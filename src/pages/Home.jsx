import React from "react";
import "./Home.css";
import { Footer, SectionCamp, SectionInfo, Title } from "../components";

const Home = () => {
  return (
    <>
      <main className="h-full w-full pt-10">
        <Title />
        {/* Hero */}
        <SectionCamp
          name="welcome"
          reverse={false}
          heading="The Ultimate Guide to a Successful Camping Adventure"
          p1={
            <>
              The Ultimate Camping Guide: Everything You Need to Know for Your
              Next Adventure
            </>
          }
          p2={"Let's start exploring the great outdoors!"}
          img="/assets/camp1.png"
        />
        <SectionInfo
          heading="Public camping orientation guide:"
          text={
            <>
              In the guide, we will talk into the essential considerations for a
              successful camping trip. From the gear and clothing required for a
              comfortable experience, to the best food options to pack and
              ensure adequate sustenance.
            </>
          }
        />

        <SectionCamp
          reverse={true}
          name="gear"
          img="/assets/campHouse.png"
          heading="Essential Gear for a safe Camping Trip"
          p1={
            <>
              We will highlight the must-have equipment needed to ensure a
              smooth and enjoyable camping experience. We will provide you with
              a comprehensive guide on what to bring to ensure you are fully
              equipped.
            </>
          }
          p2="Set your inventary wisely."
        />
        {/* Gear list */}
        <SectionInfo
          heading="Sleepin arrangements:"
          text={
            <>
              This section of the camping guide covers essential gear for a
              comfortable and safe camping trip.
              <br />
              It cover the importance sleeping arrangements such as a tent,
              sleeping bag, sleeping pad, and pillow, as well as insect
              repellent gear such as bug spray, mosquito head net, and
              insecticide-treated clothing.
              <br />
              Other miscellaneous gear such as a camp stove, first aid kit,
              flashlight or headlamp, and a cooler bag are also discussed.
            </>
          }
        />
        <SectionCamp
          reverse={false}
          name="clothing"
          img="/assets/family1.png"
          heading="Proper Clothing in the great outdoors "
          p1={
            <>
              When it comes to camping, choosing the right clothing is just as
              important as having the right gear.
              <br />
              In this section, we will highlight the importance of layering and
              bringing clothing that will keep you comfortable in various
              weather conditions. From waterproof jackets to sturdy hiking
              shoes.
            </>
          }
          p2=" With the right clothing, you can stay comfortable and confident as you explore."
        />
        <SectionInfo
          heading="Being comfortable is crucial"
          text={
            <>
              Don't forget to pack clothing that is appropriate for the
              activities you plan to do, such as hiking, fishing, or swimming.
              <br /> Consider bringing quick-drying and moisture-wicking
              materials to keep you cool and comfortable. It's also{" "}
              <span className="font-semibold">important</span> to pack extra
              clothing, including socks and underwear, in case of unexpected
              weather changes or accidents
            </>
          }
        />
        <SectionCamp
          reverse={true}
          name="food"
          img="/assets/food.png"
          heading="Fuel Your Adventure with Yummy Camp Meals!"
          p1={
            <>
              Don't let meal planning stress you out during your camping trip.
              We've got you covered with tips for a delicious and satisfying
              outdoor feast.
            </>
          }
          p2="You can still come up with a good lunch while camping!"
        />
        <SectionInfo
          heading="Preferible foods"
          text={
            <>
              The Preferable Foods section lists various{" "}
              <span className="font-semibold">suitable</span> food options for a
              camping trip, including non-perishable snacks, ready-to-eat meals,
              dehydrated/freeze-dried options, fresh fruits/veggies,
              grains/pasta, protein-rich foods, breakfast foods, and beverages
              for hydration.
              <br /> We also will dive into the nutritionals facts of why this
              food is just the ideal for your outdoor adventure.
            </>
          }
        />

        <SectionCamp
          reverse={false}
          name="wildlife"
          img="/assets/wildLife.png"
          heading="Keep yourself and the wildlife safe. You're their guest!"
          p1={
            <>
              While encountering wild animals can be exciting, it's important to
              be prepared and take necessary precautions to ensure the safety of
              both yourself and the animals.
            </>
          }
          p2="Exploring the great outdoors can bring you face to face with
            wildlife."
        />
        <SectionInfo
          heading="Treat the wildlife kindly"
          text={
            <>
              In our capacitation, we'll provide tips on how to avoid{" "}
              <span className="font-semibold">dangerous</span>
              wildlife encounters and what to do if you come into contact with
              an animal. <br />
              From storing food properly to making noise while hiking, we'll
              equip you with the knowledge you need to safely enjoy your camping
              experience.
            </>
          }
        />
        <SectionCamp
          reverse={true}
          name="monster"
          img="/assets/bigFoot.png"
          heading="Encountering Odd Creatures: Preparing for the Unexpected"
          p1={
            <>
              it is possible to encounter monsters such as Bigfoot.
              <br />
              For such an encounter we should follow some basic safety tips.
              These may include staying alert, making noise to avoid surprising
              the creature, carrying defensive weapons such as pepper spray, and
              knowing the best escape routes.
            </>
          }
          p2="Always prioritize your safety and if you do encounter a monster, do not approach it."
        />
        <SectionInfo
          heading="Beware of the Deceptive Gifts of Monsters"
          text={
            <>
              Entering the territory of monstrous creatures can be dangerous.
              They may try to trick you into a false sense of security with
              friendly gifts, but it's important to avoid socializing with them.
              <br />
              If you find yourself in a dangerous situation, escape and alert
              local <span className="font-semibold">hunters</span>. Monsters are
              known to plant false evidence, play mind games, make fake calls to
              authorities, and sing loudly to disrupt sleep.
              <br /> In our guide, you will learn how to handle the unexpected
              and stay ahead of these treacherous creatures.
            </>
          }
        />

        <SectionCamp
          reverse={false}
          name="swimming"
          img="/assets/swim.png"
          heading="Dive into Fun with Safe Swimming Tips!"
          p1={
            <>
              Taking a dip in a nearby lake or river can be a refreshing and
              enjoyable experience during a camping trip. However, it's
              important to be aware of the risks and take necessary precautions.
            </>
          }
          p2="So, grab your towel and let's hit the water!"
        />
        <SectionInfo
          heading="Aquatic ape theory:"
          text={
            <>
              Camping and swimming go hand in hand, providing a fun and
              refreshing experience in the great outdoors.
              <br /> However, it's important to be prepared and follow basic
              safety tips to ensure a successful and memorable trip. Our guide
              covers all the essentials, including setting up for swimming and
              being alert and prepared for any{" "}
              <span className="font-semibold">potential</span> accidents.
            </>
          }
        />

        <SectionCamp
          reverse={true}
          name="fires"
          img="/assets/campNight.png"
          heading="Campfire's are much more fun when all is safely set up!"
          p1={
            <>
              Light Up Your Campsite with Safe Campfires! There's nothing quite
              like roasting marshmallows over an open flame while enjoying the
              great outdoors.
            </>
          }
          p2="Keep your campfire blazing!"
        />
        <SectionInfo
          heading="Campfire Safety:"
          text={
            <>
              When camping, a campfire can serve as a source of warmth, light,
              and cooking area. However, it's crucial to follow campfire safety
              rules to avoid accidents and forest fires.
              <br />
              Clear flammable materials from the fire pit and keep the fire
              contained. Keep a bucket of water or shovel nearby to put out the
              fire. Before leaving the campsite, ensure the fire is completely
              out and cool to the touch.
              <br /> Remember, you have the power to{" "}
              <span className="font-semibold">prevent</span> forest fires.
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
