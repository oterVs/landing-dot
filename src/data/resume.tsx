import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { RiGameLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { LuCat } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
export const DATA = {
  name: "Dillion Verma",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  navbar: [
    { href: "/home", icon: HomeIcon, label: "Home" },
  ],
  contact: {

    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MarianoVilla",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mariano-luis-villa/?locale=es_ES",
        icon: Icons.linkedin,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@DotDager",
        icon: Icons.youtube,
        navbar: true,
      },
    },
  },



} as const;


export const ABOUT = {
  hobbies: [
    {
      img: "/img/hobbie1.jpg",
      title: "Mascota",
      description: "Los gatos son mis animales favoritos. Disfruto aprender sobre ellos y cuidar de mis propios felinos.",
      icon: LuCat
    },
    {
      img: "/img/hobbie2.jpg",
      title: "Filosofía",
      description: "La filosofía me apasiona. Me gusta reflexionar sobre la vida, la ética y el pensamiento humano en mi tiempo libre.",
      icon: IoBookOutline
    },
    {
      img: "/img/hobbie3.png",
      title: "Juegos",
      description: "Me gusta jugar videojuegos. Disfruto de los juegos de estrategia y de los juegos de rol.",
      icon: RiGameLine
    },
    {
      img: "/img/hobbie4.jpg", title: "Programación",
      description: "Me encanta resolver problemas con código. Siempre estoy aprendiendo nuevas tecnologías y creando proyectos para mejorar mis habilidades."
      , icon: FaCode
    },
  ]
}