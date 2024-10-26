import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slide.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Event } from "../../models/Event";
import { useState } from "react";
import EventDetailsModal from "../forms/EventDetailModel";

const Carousel = ({ events }: { events: Event[] }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleSlideClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };
  const displayEvents = events.map((event) => {
    let imageUrl: string | undefined;

    // Handle different cases for `event.image`
    if (typeof event.image === "string") {
      imageUrl = event.image;
    } else if (Array.isArray(event.image)) {
      imageUrl =
        typeof event.image[0] === "string" ? event.image[0] : undefined;
    }

    return (
      <SwiperSlide
        className="single-slide"
        key={event.id}
        onClick={() => handleSlideClick(event)}
      >
        {imageUrl && <img src={imageUrl} alt={event.title} />}{" "}
        <h2>{event.title}</h2>
        {event.startTime && (
          <h5>
            {event.startTime.toLocaleDateString("sv-SE")}{" "}
            {event.startTime.toLocaleTimeString("sv-SE", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h5>
        )}
        {event.description && <p>{event.description}</p>}{" "}
      </SwiperSlide>
    );
  });

  return (
    <section className="swiper-slider">
      <EventDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
      />
      <Swiper
        effect={"coverflow"}
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.75": {
            slidesPerView: 1,
          },
          "@1.00": {
            slidesPerView: 3,
          },
          "@1.50": {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {displayEvents}
      </Swiper>
    </section>
  );
};

export default Carousel;
