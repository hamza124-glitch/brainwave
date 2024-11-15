import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
} from "../assets";

import merlin from "../assets/merlin.svg";
import meta from "../assets/meta.svg";
import youtube from "../assets/youtube.svg";
import tiktok from "../assets/tiktok.svg";

import yt from "../assets/youtube-circle.png";
import tk from "../assets/tiktok-circle.png";
import fb from "../assets/facebook-circle.png";
import ig from "../assets/instagram-circle.png";
import coin from "../assets/coin.png";
import report from "../assets/report.png";
import protectlogo from "../assets/protectlogo.png";

export const navigation = [
  {
    id: "0",
    title: "Content ID",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [merlin, tiktok, meta, youtube];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "If you're no longer subscribed, your tracks will remain copyrighted, and you'll keep 80% of your revenue.";

export const collabContent = [
  {
    id: "0",
    title: "YouTube Content-ID",
    text: collabText,
  },
  {
    id: "1",
    title: "Copyright Protection",
  },
  {
    id: "2",
    title: "Instagram / Facebook",
  },
  {
    id: "3",
    title: "TikTok Protection",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: yt,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: yt,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: ig,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: tk,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: fb,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: coin,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: protectlogo,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: report,
    width: 38,
    height: 40,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Unlimited Month",
    description: "AI chatbot, personalized recommendations",
    price: "19.99",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Unlimited Year",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "65",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Unlimited Lifetime",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: "120",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Content-ID",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "AI-Music Acceptance",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "/benefits/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Monetization",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "/benefits/card-1.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Channel Whitelist",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "/benefits/card-1.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Detailed Reports",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "No Lock-in Subscriptions",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "/benefits/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
