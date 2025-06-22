import { useEffect } from "react";
import Person from "../../components/Person/Person";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import bg from "../../img/pages/team/bg.jpg";
import { persons } from "../../data/persons";
import { useState } from "react";
import TeamSingle from "../../components/TeamSingle/TeamSingle";
import { motion } from "framer-motion";
import person1 from "../../img/pages/team/person1.jpg";
import person2 from "../../img/pages/team/person2.jpg";
import person3 from "../../img/pages/team/person3.jpg";
import person4 from "../../img/pages/team/person4.jpg";
import person5 from "../../img/pages/team/person5.jpg";
import person6 from "../../img/pages/team/person6.jpg";
import person7 from "../../img/pages/team/person7.jpg";
import person8 from "../../img/pages/team/person8.jpg";
const personsImages = [
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
];
const Team = ({ pickPerson }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [personId, setPersonId] = useState(1);
  const [showPerson, setShowPerson] = useState(false);
  const clickOnPerson = (id) => {
    setPersonId(id);
    setShowPerson(true);
  };
  return (
    <section className="team">
      <Title title="Our Professional" img={bg} subtitle="Team"></Title>
      <div className="container ">
        <div className="team__wrapper">
          <motion.div
            className="team__grid grid grid-cols-2 w-full  xs:w-[90%] md:w-auto mx-auto md:mx-0 md:grid-cols-4  grid-rows-4
            md:grid-rows-2 gap-y-[20px] md:gap-y-[30px] lg:gap-y-[40px] xl:gap-y-[50px] mb-[40px] sm:mb-[60px] md:mb-[150px] lg:mb-[200px]"
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
          >
            {persons.map((person, index) => (
              <Person
                name={person.name}
                job={person.job}
                id={person.id}
                hasLinkedIn={
                  person.hasOwnProperty("linkedInUrl") ? true : false
                }
                clickOnPerson={clickOnPerson}
                custom={index * 0.5}
                img={personsImages[index]}
              />
            ))}
          </motion.div>
        </div>
        <TeamSingle
          person={persons[personId - 1]}
          img={personsImages[personId - 1]}
        />
      </div>
    </section>
  );
};

export default Team;
