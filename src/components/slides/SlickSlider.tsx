import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import formatDateTime from "../../utils/FormatDateTime";
import {Event }from "../../models/Event"
import EventDetailsModal from "../forms/EventDetailModel";
function SlickSlider({ events }: { events: Event[] }) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 1, 
          },
        },
      ],
    };

  let sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      (sliderRef.current as any).slickNext(); 
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      (sliderRef.current as any).slickPrev(); 
    }
  };
  const handleSlideClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const displayImages = events.map((event, i) => (
    <div key={i} className="slide" onClick={() => handleSlideClick(event)}>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="text-overlay">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          {event.startTime && (

          <p>{formatDateTime(event.startTime)}</p>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="slider-container">
      <section className="slick-container">
        <Slider ref={sliderRef} {...settings}>
          {displayImages}
        </Slider>
        <div className="slick-arrows">
          <button onClick={previous}>
            <IoIosArrowBack />
          </button>
          <button onClick={next}>
            <IoIosArrowForward />
          </button>
        </div>
      </section>
      <EventDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
      />
    </div>
  );
}

export default SlickSlider;
