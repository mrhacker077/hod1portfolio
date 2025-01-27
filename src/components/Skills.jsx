import React from "react";
import part from "../part.webp";
import mt from "../mt.jpg";
import pp from "../pp.jpg";
import pm from "../pm.jpeg";
import thermodynamics from "../thermodynamics.jpg";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: part,
      name: "Particulate technology",
      description:
        "Particulate technology studies the behavior and processing of solid particles in mixing, grinding, and separation.",
    },
    {
      id: 2,
      logo: pm,
      name: "Plant maintenance",
      description:
        "Plant maintenance is the process of inspecting, repairing, and optimizing equipment to ensure safe and efficient operations.",
    },
    {
      id: 3,
      logo: mt,
      name: "Mass transfer",
      description:
        "Mass transfer is the movement of substances between phases due to concentration differences, vital in processes like distillation.",
    },
    {
      id: 4,
      logo: thermodynamics,
      name: "thermodynamics and kinetics",
      description:
        "Thermodynamics deals with energy and equilibrium and Kinetics studies reaction rates.",
    },
    {
      id: 5,
      logo: pp,
      name: "Process plant technology",
      description:
        "Oracle offers database software, cloud solutions, and enterprise technology for businesses worldwide.",
    }
  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-4xl font-bold mb-5">Skills</h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 my-5"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 bg-blue-200"
              key={id}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
