import {
  FaHome,
  FaSwimmer,
  FaBookOpen,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaGithubSquare,
  FaFlagUsa,
} from "react-icons/fa";
import {
  GiBattleGear,
  GiOpenedFoodCan,
  GiClothes,
  GiFireSilhouette,
  GiWolfHowl,
  GiFishMonster,
} from "react-icons/gi";
import { MdContacts } from "react-icons/md";

export const navLinks = [
  { name: "home", id: 23, url: "/", icon: <FaHome /> },
  { name: "about", id: 43, url: "/about", icon: <FaBookOpen /> },
  { name: "contact", id: 555, url: "#welcome", icon: <MdContacts /> },
];

export const sideBarLinks = [
  { name: "welcome", id: 31, icon: <FaHome />, url: "#welcome" },
  { name: "gear", id: 341, icon: <GiBattleGear />, url: "#gear" },
  { name: "clothing", id: 401893, icon: <GiClothes />, url: "#clothing" },
  { name: "food", id: 65, icon: <GiOpenedFoodCan />, url: "#food" },
  { name: "wildlife", id: 14903, icon: <GiWolfHowl />, url: "#wildlife" },
  { name: "monster", id: 10934, icon: <GiFishMonster />, url: "#monster" },
  { name: "swimming", id: 49013, icon: <FaSwimmer />, url: "#swimming" },
  { name: "fires", id: 49130, icon: <GiFireSilhouette />, url: "#fires" },
];

export const socialLinks = [
  { name: "Facebook", icon: <FaFacebookSquare />, url: "https://facebook.com" },
  {
    name: "Instagram",
    icon: <FaInstagramSquare />,
    url: "https://instagram.com",
  },
  { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com" },
  {
    name: "GitHub",
    icon: <FaGithubSquare />,
    url: "https://github.com/Xaida02",
  },
  { name: "USA Gov", icon: <FaFlagUsa />, url: "https://www.fs.usda.gov" },
];
