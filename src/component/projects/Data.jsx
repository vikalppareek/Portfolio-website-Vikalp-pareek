import Image1 from "../../assets/stockora project.png";
import Image2 from "../../assets/Weather app project.png";
//import Image3 from "../../assets/Ekart-Ecommerse-Website.gif";
import Image4 from "../../assets/Spotify Clone.png"
//import Image5 from "../../assets/ Myntra-clone.png";
import Image6 from "../../assets/github.gif";




export const Data = [
  {
    id: 1,
    image: Image1,
    title: "Stockora",
    description:
      "Developed a dynamic and user-friendly stock trading platform using the MERN stack (MongoDB, Express, React, Node.js). The platform allows users to create accounts, monitor real-time stock prices, and execute trades. data persistence with MongoDB and implemented API calls to fetch live market data",
 
      link:"https://stockora-frontend.vercel.app/ ",
  },
    {
      id: 2,
      image: Image2,
      title: "Weather APP",
      description:
        "Developed a Weather application project that displays current weather information and allows users to search for weather data of any city .Integrated  the OpenWeather API to fetch and display real-time weather data Implemented user-friendly features such as temperature, wind, speed, humidity, clouds, weather etc",
        link:" https://github.com/vikalppareek/Weather-app.git",
    },
    // {
    //   id: 3,
    //   image: Image3,
    //   title: "Ekart Ecommerce website",
    //   description:
    //     "Developed an Ekart E-Commerce website project using ReactJs, Redux and tailwindCss to create a responsive and user-friendly  beautiful interface. Add to cart, Remove to Cart, Checkout functionality Add.User can navigate between cart and home pages",
    //     link:"https://ecart-samridh-gaur.vercel.app/",
    // },
    {
      id: 4,
      image: Image4,
      title: "Spotify Clone",
      description:
        "Developed a Spotify clone landing page using HTML, CSS, and JavaScript. I used javascript  to create a responsive and visually appealing design that closely resembles the original Spotify landing page. Create a Navbar section, Home, hero, footer, etc.",

        link:" https://github.com/vikalppareek/Spotify-clonee.git"
    },

    // {
    //   id: 5,
    //   image: Image5,
    //   title: "Myntra Clone",
    //   description:
    //    "Created a Plan with Samridh project featuring 9 city cards. Each card includes the city name, journey price, images, and a brief introduction. The Read More and Less feature allows users to expand or collapse the card content. Additionally, there is a Not Interested button to remove city cards if you don’t like it , and a Refresh button to bring back all the city cards after removal .",
    //     link: "https://plan-with-samridh-gaur.vercel.app/"
    // },
    {
        id: 6,
        image: Image6,
      
      description: <a href=" https://github.com/vikalppareek" target="_blank" className="contact_button">Click here for more<i className="bx bx-right-arrow-alt contact_button-icon"></i>
      </a>,
      link:" https://github.com/vikalppareek"

    },
  ];
  
  
