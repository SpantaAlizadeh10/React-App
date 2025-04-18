import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consector adipisicing eleit Asperiors",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consector adipisicing eleit Asperiors",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consector adipisicing eleit Asperiors",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2025",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectur adipisich elit. Cumque vite temhf vhsgtr maximum repretusre",
    location: "chiana",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "ctober 1th, 2025",
    title: "best of java<",
    info: "Lorem ipsum dolor sit amet, consectur adipisich elit. Cumque vite temhf vhsgtr maximum repretusre",
    location: "indonesia",
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2025",
    title: "explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectur adipisich elit. Cumque vite temhf vhsgtr maximum repretusre",
    location: "hong kong",
    duration: 8,
    price: 5100,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2024",
    title: "kenya highlight",
    info: "Lorem ipsum dolor sit amet, consectur adipisich elit. Cumque vite temhf vhsgtr maximum repretusre",
    location: "kenya",
    duration: 20,
    price: 3300,
  },
];
