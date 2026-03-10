import React, { useEffect } from "react";
import { Footer, SectionCamp, SectionInfo, Title } from "../components";

const sections = [
  {
    name: "welcome",
    reverse: false,
    img: "/assets/camp1.webp",
    heading: "The Ultimate Guide to a Successful Camping Adventure",
    p1: "Everything you need to know for your next adventure — gear, food, safety, and more.",
    p2: "Let's start exploring the great outdoors!",
    info: {
      heading: "Public camping orientation guide:",
      text: "In this guide, we cover the essential considerations for a successful camping trip — from the gear and clothing required for a comfortable experience, to the best food options to pack and ensure adequate sustenance.",
    },
  },
  {
    name: "gear",
    reverse: true,
    img: "/assets/campHouse.webp",
    heading: "Essential Gear for a Safe Camping Trip",
    p1: "We highlight the must-have equipment needed to ensure a smooth and enjoyable camping experience, with a comprehensive guide on what to bring.",
    p2: "Set your inventory wisely.",
    info: {
      heading: "Sleeping arrangements:",
      text: "This section covers essential gear for a comfortable and safe camping trip: tents, sleeping bags, sleeping pads, and pillows, as well as insect repellent gear like bug spray and mosquito nets. Camp stoves, first aid kits, flashlights, and cooler bags are also discussed.",
    },
  },
  {
    name: "clothing",
    reverse: false,
    img: "/assets/family1.webp",
    heading: "Proper Clothing in the Great Outdoors",
    p1: "Choosing the right clothing is just as important as having the right gear. We highlight the importance of layering and bringing clothing for various weather conditions — from waterproof jackets to sturdy hiking shoes.",
    p2: "With the right clothing, you can stay comfortable and confident as you explore.",
    info: {
      heading: "Being comfortable is crucial:",
      text: "Pack clothing appropriate for your planned activities — hiking, fishing, or swimming. Consider quick-drying and moisture-wicking materials. It's also important to pack extra clothing, including socks and underwear, in case of unexpected weather changes or accidents.",
    },
  },
  {
    name: "food",
    reverse: true,
    img: "/assets/food.webp",
    heading: "Fuel Your Adventure with Great Camp Meals!",
    p1: "Don't let meal planning stress you out. We've got you covered with tips for a delicious and satisfying outdoor feast.",
    p2: "You can still put together a great lunch while camping!",
    info: {
      heading: "Preferable foods:",
      text: "We cover suitable food options for a camping trip: non-perishable snacks, ready-to-eat meals, dehydrated options, fresh fruits and veggies, grains, protein-rich foods, and beverages for hydration. We also dive into the nutritional facts of why these foods are ideal for outdoor adventures.",
    },
  },
  {
    name: "wildlife",
    reverse: false,
    img: "/assets/wildLife.webp",
    heading: "Keep Yourself and the Wildlife Safe — You're Their Guest!",
    p1: "While encountering wild animals can be exciting, it's important to be prepared and take necessary precautions to ensure the safety of both yourself and the animals.",
    p2: "Exploring the great outdoors can bring you face to face with wildlife.",
    info: {
      heading: "Treat the wildlife kindly:",
      text: "We'll provide tips on how to avoid dangerous wildlife encounters and what to do if you come into contact with an animal. From storing food properly to making noise while hiking, we'll equip you with the knowledge you need to stay safe.",
    },
  },
  {
    name: "monster",
    reverse: true,
    img: "/assets/bigFoot.webp",
    heading: "Encountering Odd Creatures: Preparing for the Unexpected",
    p1: "It is possible to encounter creatures such as Bigfoot. Stay alert, make noise to avoid surprising them, carry defensive tools like pepper spray, and know your best escape routes.",
    p2: "Always prioritize your safety — do not approach unknown creatures.",
    info: {
      heading: "Beware of the Deceptive Gifts of Monsters:",
      text: "Entering the territory of monstrous creatures can be dangerous. They may try to trick you with friendly gestures — avoid socializing with them. If you find yourself in danger, escape and alert local hunters. In our guide, you'll learn how to handle the unexpected and stay ahead of these treacherous creatures.",
    },
  },
  {
    name: "swimming",
    reverse: false,
    img: "/assets/swim.webp",
    heading: "Dive Into Fun with Safe Swimming Tips!",
    p1: "Taking a dip in a nearby lake or river can be refreshing during a camping trip. However, it's important to be aware of the risks and take necessary precautions.",
    p2: "Grab your towel and let's hit the water!",
    info: {
      heading: "Aquatic safety basics:",
      text: "Camping and swimming go hand in hand. However, it's important to follow basic safety tips for a successful trip. Our guide covers all the essentials, including setting up safely and staying alert and prepared for any potential accidents.",
    },
  },
  {
    name: "fires",
    reverse: true,
    img: "/assets/campNight.webp",
    heading: "Campfires Are Much More Fun When Safely Set Up!",
    p1: "There's nothing quite like roasting marshmallows over an open flame. Light up your campsite with safe campfire practices.",
    p2: "Keep your campfire blazing — responsibly!",
    info: {
      heading: "Campfire safety:",
      text: "A campfire provides warmth, light, and a cooking area — but it's crucial to follow safety rules. Clear flammable materials, keep the fire contained, and have water nearby. Before leaving, ensure the fire is completely out and cool to the touch. Remember: you have the power to prevent forest fires.",
    },
  },
];

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (!hash) return;
    const navbar = document.getElementById("navbar");
    const target = document.getElementById(hash);
    if (target && navbar) {
      setTimeout(() => {
        window.scrollTo({
          top: target.offsetTop - navbar.offsetHeight - 10,
          behavior: "smooth",
        });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const sectionIds = [
      "welcome",
      "gear",
      "clothing",
      "food",
      "wildlife",
      "monster",
      "swimming",
      "fires",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="w-full pt-[85px]">
        <Title />
        {sections.map(({ name, reverse, img, heading, p1, p2, info }) => (
          <React.Fragment key={name}>
            <SectionCamp
              name={name}
              reverse={reverse}
              img={img}
              heading={heading}
              p1={p1}
              p2={p2}
            />
            <SectionInfo heading={info.heading} text={info.text} />
          </React.Fragment>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Home;
