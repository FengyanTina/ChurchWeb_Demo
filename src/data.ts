import PrayerBible from "./assets/spiritual-prayer-hands-holding-bible.jpg";
import worshipHands from "./assets/worshipHands.jpg";
import edward from "./assets/edward.jpg";
import BethelWorship from "./assets/BethelWorship.jpg";
import Worship from "./assets/Worship.jpeg";
import Conference from "./assets/Conference.jpg";
import Mission from "./assets/Mission.png";
import Prayer from "./assets/Prayer.jpg";
import Bible from "./assets/Bible.jpg";
import welcome2 from "./assets/welcome2.jpg"
import Varhistoria from "./assets/Varhistoria.jpg"
import DavidB from "./assets/DavidB.jpg"
import { EventCategory,Event } from "./models/Event";
import { ActivitySocialMediaScetionCardModel } from "./models/ActivitySocialMediaSectionModel";
import { ImageInforSectionModel } from "./models/ImageInforSection";
import { User, UserCategory } from "./models/User";
import SundaySchoolTeaching  from "./assets/sundaySchool/sundayTeaching.jpg"
import SundaySchool2 from "./assets/sundaySchool/sudaySchool2.jpg"
import SundaySchool3 from "./assets/sundaySchool/sudaySchool3.jpg"
import SundaySchool4 from "./assets/sundaySchool/sundayschool4.jpg"
import SundaySchool5 from "./assets/sundaySchool/sundaySchool5.jpg"
import SundaySchool6 from "./assets/sundaySchool/sundaySchool6.jpg"
import SundaySchool7 from "./assets/sundaySchool/sundaySchool7.jpg"
import SundaySchool8 from "./assets/sundaySchool/sundaySchool8.jpg"
import { ImageGallaryItemData } from "./models/ImageGallaryItemData";
import { PageInforModel } from "./models/PageInforModel";


  
const initialUsers: User[] = [
    {
      id: "1",
      firstName: "Johana",
      lastName: "Beman",
      userId: "johanaB",
      userName: "johana123",
      email: "john.be@example.com",
      phoneNumber: "123-456-7890",
      category:UserCategory.Admin // Replace with appropriate UserCategory type
    },
    {
      id: "2",
      firstName: "Tina",
      lastName: "Alwarzon",
      userId: "tina456",
      userName: "tinaW",
      email: "jane.smith@example.com",
      phoneNumber: "234-567-8901",
      category:UserCategory.Member // Replace with appropriate UserCategory type
    },
    {
      id: "3",
      firstName: "David",
      lastName: "Beman",
      userId: "david567",
      userName: "davidB",
      email: "alice.johnson@example.com",
      phoneNumber: "345-678-9012",
      category:UserCategory.Pastor
    },
    {
      id: "4",
      firstName: "Kicki",
      lastName: "Williams",
      userId: "bobwilliams101",
      userName: "bobw",
      email: "bob.williams@example.com",
      phoneNumber: "456-789-0123",
      category:UserCategory.TeamLeader
    },  
  ];
  
  export default initialUsers;
  
  export const newHere:ImageInforSectionModel ={
    id:'23',
    inforSectionId:"",
    title:"New Here? ",
    subtitle:"can't wait to meet you!",
    description:"You may find information you need in below links or feel free to contact us. ",
    images:welcome2,
  }

  export const comingEvents:Event[] = [
    {
      id: "1",
      title: "Sunday Worship",
      category:EventCategory.Event,
      startTime: new Date("2024-09-22T10:00:00"),
      description: "Join us for a special Sunday worship service.",
      image: worshipHands, // Use actual image URL
      location:"BKC"
    },
    {
      id: "2",
      title: "Community Outreach",
      category:EventCategory.Event,
      startTime: new Date("2024-09-25T14:00:00"),
      description: "Participate in our community outreach program.",
      image: edward, // Use actual image URL
       location:"BKC"
    },
    {
      id: "3",
      title: "Bible Study Group",
      category:EventCategory.Event,
      startTime: new Date("2024-09-27T19:00:00"),
      description: "Deep dive into the scriptures with our study group.",
      image: BethelWorship, // Use actual image URL
       location:"BKC"
    },
    {
      id: "4",
      title: "Prayer Meeting",
      category:EventCategory.Event,
      startTime: new Date("2024-09-30T08:00:00"),
      description: "Come together for our weekly prayer meeting.",
      image: Worship, // Use actual image URL
       location:"BKC"
    },
  ];
  
  
  export const sundayServiceCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "For Congregation",
    subtitle:"välkommen till vår kyrka nu på söndag!",
    startTime:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.SundayService,
    description:"Veckans höjdpunkt i kyrkan är våra gudstjänster! Varje söndag klockan 11 träffas vi i Borås Kristna Center och firar gudstjänst. Syftet är att upphöja och ära Gud tillsammans. Våra gudstjänster är öppna för alla och vi vill vara tydliga med allt vi gör, så att alla kan förstå.Våra gudstjänster innehåller bön och lovsång, predikan och förbön. Givetvis avslutar vi med ett fantastiskt kyrkfika. För dig som besöker oss för första gången är fikat dessutom helt gratis!",
    images: Worship 
  }
  export const sundaySchoolActivityCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "For Small Kids",
    subtitle:"BKC-KIDS",
    startTime:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.SundaySchoole,
    description:"BKC-Kids är för barn mellan 2-12 år. Barnens egen gudstjänst där vi tillsammans får möta spännande bibelpersoner, lyssna på Guds ord, lekar och tävlingar, vi äter korv och pysslar tillsammans. Kom med du också!",
    images: edward ,
  }
 
  export const youthActivityCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "For Young Adult",
    subtitle:"Bkc Ungdom",
    startTime:new Date(2024, 9, 22, 14, 30),
    category: EventCategory.YouthService,
    description:"Vi kommer att leva, sova och äta på sommargården Solviken som ligger 5 km utanför Fristad precis vid sjön Ärtingen. Det finns tillgång till ca 20 sängplatser så för att alla säkert ska på plats kommer vi även att ställa upp husvagnar eller erbjuda möjlighet att tälta för er som är riktigt äventyrliga! Vill du inte övernatta utan bara vara med dagtid går detta också bra, skriv då detta i anmälan!",
    images: worshipHands ,
  }
  export const homeGroupActivityCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "Your Small Community",
    subtitle:"Together,Stronger!",
    startTime:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.HomeGroup,
    description:"Bibeln beskriver Gud som en Fader. Han älskar och längtar efter en relation med varje människa. Jesus säger att han är vägen, sanningen och livet och var och en som längtar efter livets mening, efter tillvarons själva pulserande centrum, är välkommen in i hans stora famn.",
    images:Varhistoria 
  }
  
export const imageGallarytemData = [
    {
      img: Bible,
      title: "Bible Study",
     
      featured: true,
    },
    {
      img: Worship,
      title: "Juesus Conference",
     
    },
    {
      img: Prayer,
      title: "Praying for Borås",
     
    },
    {
      img: Conference,
      title: "Comminity Prayer",
 
    },
    {
      img: Mission,
      title: "Youth Camp",
      
    },
    {
      img: BethelWorship,
      title: "Togather Worship",
     
      featured: true,
    },
    {
      img: worshipHands,
      title: "Worship Conference",
    
    },
    {
      img: PrayerBible,
      title: "Study the words",
    
    },
  ];
  
  
  export const socialMediaActivityCardInfor:ActivitySocialMediaScetionCardModel={
    id: "1",
    inforSectionId:"",
    title: "All activities on Social media",
    subtitle:"Together,Stronger!",
    category: EventCategory.SocialMedia,
    description:"Under höstens tre första veckor (36-38) kommer vi uppmuntra till bön och fasta.Under höstens tre Under höstens tre Under höstens tre Under höstens tre tre Under höstens tre - auto updating activies from our social media",
    images:imageGallarytemData ,
  }
  export const news:Event[] = [
    {
      id: "1",
      startTime: new Date(2024, 9, 22, 14, 30), // October 22, 2024, 2:30 PM
      endTime:new Date(2024, 9, 22, 15, 30),
      title: "Reaching out ",
      image: PrayerBible,
      category:EventCategory.News,
      description:
        "An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.",
    },
    {
      id: "2",
      startTime: new Date(2024, 9, 25, 19, 0), // October 25, 2024, 7:00 PM
      endTime:new Date(2024, 9, 25, 20, 0),
      title: "Easter camp",
      category:EventCategory.News,
      image: edward,
      description:
        "Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.",
    },
    {
      id: "3",
      startTime: new Date(2024, 9, 27, 9, 0), // October 27, 2024, 9:00 AM
      endTime:new Date(2024, 9, 27, 10, 0), 
      title: "Charity Run",
      category:EventCategory.News,
      image: Worship,
      description:
        "Participate in the annual charity run to support a good cause.",
    },
    {
      id: "4",
      startTime: new Date(2024, 9, 30, 17, 30), // October 30, 2024, 5:30 PM
     endTime: new Date(2024, 9, 30, 19, 30), 
      title: "Food Festival",
      image: BethelWorship,
      category:EventCategory.News,
      description:
        "Savor delicious dishes from a variety of food vendors and enjoy live entertainment.",
    },
  ];
  export const Pastor= {
    title:"David B",
    subTitle:"Main Pastor",
    content: "BKC pastor, Blog,\n\nThe relationship between Tim Dilena and Times Square Church is a close one. Tim’s father, Paul Dilena, was the police captain in David Wilkerson’s bestselling book The Cross and the Switchblade and was the treasurer of the first Teen Challenge.\n\nPrior to the senior pastorate, he had been a frequent and well-loved speaker at Times Square Church for over 25 years.\n\nThe relationship between Tim Dilena and Times Square Church is a close one. Tim’s father, Paul Dilena, was the police captain in David Wilkerson’s bestselling book The Cross and the Switchblade and was the treasurer of the first Teen Challenge.\n\nPrior to the senior pastorate, he had been a frequent and well-loved speaker at Times Square Church for over 25 years.\n\nThe relationship between Tim Dilena and Times Square Church is a close one. Tim’s father, Paul Dilena, was the police captain in David Wilkerson’s bestselling book The Cross and the Switchblade and was the treasurer of the first Teen Challenge.",
    image: DavidB   
    }

    export const events = [
        {
          id: "1",
          startTime: new Date(2024, 9, 22, 14, 30), // October 22, 2024, 2:30 PM
          title: "Reaching out ",
          category: EventCategory.Event,
          image: PrayerBible,
          description:
            "An exhibition featuring contemporary art pieces from local artists.",
        },
        {
          id: "2",
          startTime: new Date(2024, 9, 25, 19, 0), // October 25, 2024, 7:00 PM
          title: "Tech Conference",
          category: EventCategory.Event,
          image: edward,
          description:
            "Join the biggest technology conference of the year with keynote speakers.",
        },
        {
          id: "3",
          startTime: new Date(2024, 9, 27, 9, 0), // October 27, 2024, 9:00 AM
          title: "Charity Run",
          category: EventCategory.Event,
          image: Worship,
          description:
            "Participate in the annual charity run to support a good cause.",
        },
        {
          id: "4",
          startTime: new Date(2024, 9, 30, 17, 30), // October 30, 2024, 5:30 PM
          title: "Food Festival",
          category: EventCategory.Event,
          image: BethelWorship,
          description:
            "Savor delicious dishes from a variety of food vendors and enjoy live entertainment.",
        },
      ];

      
  export const steps = [
    {
        id:"s1",
      title: "Step 1",
      description: "Register You here",
      linkName:"Register",
      link: "http://example.com/register",
    },
    {
        id:"s2",
      title: "Step 2",
      description:
        "After you register, you will receive a follow-up email with a video explaining the meaning and significance of water baptism.",
    },
    { id:"s3", title: "Step 3", description: "Schedule the baptism." },
  ];
  export const servings = [
    {
        id:"s1",
      title: "SundayService",
      description: "Gifted in music? Sunday Service you can serve the Lord in worship team. Or if you are good at tech, use your skills to service in tech team. If you are interested,",
      linkName:"Register you here",
      link: "http://example.com/register",
    },
    {
        id:"s2",
        title: "SundaySchoole",
        description: "Have a vision in young children? Want to help the next generation growing in the knowlege of the Bible?. Our sunday school has two groups, young children and older group",
        linkName:"Register you here",
        link: "http://example.com/register",
    },
    { id:"s3",
        title: "UsherTeam",
        description: "Recive people or help with fika prepareation, you can share your love and your smile with people coming to church. Give them the bigest welcome to the house of the Lord in the sunday morning",
        linkName:"Register you here",
        link: "http://example.com/register",
     },
     { id:"s4",
        title: "YouthGroup",
        description: "Have passion in youth?",
        linkName:"Register you here",
        link: "http://example.com/register",
     },
  ];
  export const baptismService = {
    id:"102",
    title: "Want to be baptized?",
    steps: steps,
    image: Mission,
  };
  export const findYourVision = {
    id:"103",
    title: "Want to Serve",
    description:"You can find your vision and purpose, and serve the Lord in different ways.",
    steps: servings,
    images:[Mission, Prayer,Conference,]
  };
export const sundayServiceSection  = {
  id: "1",
  time: new Date(2024, 9, 22, 14, 30), // October 22, 2024, 2:30 PM
  title: "Welcom to our Sunday Service! ",
  subTitle: "  Come as you are !",
  category:EventCategory.SundayService,
  images: Conference,
  description:
    "Live English simultaneous translation is available for theSunday services. Thought-provoking and engaging messages based on the Bible from our senior pastor, Tim Dilena. Each service lasts around 90 minutes. Engaging worship music. Come as you are. There is no dress code.",
};
export const prayerService = {
    id:'12',
  title: "We want to pray for you!",
  linkSubtitle: "send in your prayer requiest any time",
  images: Prayer,
  description:
    "Live English simultaneous translation is available for theSunday services. Thought-provoking and engaging messages based on the Bible from our senior pastor, Tim Dilena. Each service lasts around 90 minutes. Engaging worship music. Come as you are. There is no dress code.",
};
















export const BKCkIDS2:PageInforModel = {
    id:"kids",
      title:"Sunday School",
      subtitle: "Lets kids come to the Lord",
      description:"The learn the word, while having fun. They build their little community, and grow together as part of the church family,The learn the word, while having fun. They build their little community, and grow together as part of the church family,The learn the word, while having fun. They build their little community, and grow together as part of the church family", 
      startTime: new Date(2024, 9, 30, 17, 30),

   location:"BKC",       
  }
  
export const BKCkYouth:PageInforModel = {
    id:"youth",
    title:"Youth Group",
    subtitle: "Join Us Every Friday Night",
    description:"The learn the word, while having fun. They build their little community, and grow together as part of the church family,The learn the word, while having fun. They build their little community, and grow together as part of the church family,The learn the word, while having fun. They build their little community, and grow together as part of the church family.Find a group of friends who you can be yourself with while growing in your relationship with God. By joining us in-person or online you can discover exactly who God intentionally made you to be.", 
    startTime: new Date(2024, 9, 30, 17, 30),

 location:"BKC",  
}
export const SundaySchoolImageGallary:ImageGallaryItemData [] = [
    {
        img: SundaySchoolTeaching ,
        title:"2",
        rows: 2,
        cols: 2,
      },
      {
        img: SundaySchool2,
        title:"3",
      },
      {
        img: SundaySchool3,
        title:"4",
      },
      {
        img: SundaySchool4,
        title:"5",
        cols: 2,
      },
      {
        img: SundaySchool5,
        title:"6",
        cols: 2,
      },
      {
        img: SundaySchool6,
        title:"7",
        author: '@arwinneil',
        rows: 2,
        cols: 2,
      },
      {
        img: SundaySchool7,
        title:"8",
      },
      {
        img: SundaySchool8,
        title: '9',
      },
    
    //   {
    //     img: SundaySchool9,
    //     title: '10',
    //     rows: 2,
    //     cols: 2,
    //   },
    //   {
    //     img: SundaySchool10,
    //     title: '11',
    //   },
    //   {
    //     img: SundaySchool11,
    //     title: '12',
    //   },
    //   {
    //     img: SundaySchool12,
    //     title: '13',
    //     cols: 2,
    //   },


];
