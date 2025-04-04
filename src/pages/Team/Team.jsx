import { useEffect } from "react";
import Person from "../../components/Person/Person";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import bg from "../../img/pages/team/bg.jpg";
import { persons } from "../../data/persons";
import { useState } from "react";
import TeamSingle from "../../components/TeamSingle/TeamSingle";
import { motion } from "framer-motion";
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
            className="team__grid grid grid-cols-4 grid-rows-2 gap-y-[50px] mb-[200px]"
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
              />
            ))}
          </motion.div>
        </div>
        <TeamSingle person={persons[personId - 1]} />
      </div>
    </section>
  );
};

export default Team;
