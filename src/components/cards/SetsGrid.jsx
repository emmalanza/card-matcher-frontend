import React from "react";
import { Link } from "react-router-dom"; 
import ImageA1 from "@assets/img/sets/a1.webp";
import ImageA1a from "@assets/img/sets/a1a.webp";
import ImageA2 from "@assets/img/sets/a2.webp";
import ImageA2a from "@assets/img/sets/a2a.webp";
import ImageA2b from "@assets/img/sets/a2b.webp";
import backgroundImage from "@assets/img/sets/bg-ash.webp";

const SetsGrid = () => {

  //TODO: get sets from API
  const sets = [
    {
      id: "A1",
      name: "Genes Formidables",
      img: ImageA1,
    },
    {
      id: "A1a",
      name: "La Isla Singular",
      img: ImageA1a,
    },
    {
      id: "A2",
      name: "Pugna Espacio-Temporal",
      img: ImageA2,
    },
    {
      id: "A2a",
      name: "Luz Triunfal",
      img: ImageA2a,
    },
    {
      id: "A2b",
      name: "Festival Brillante",
      img: ImageA2b,
    },
  ];

  return (
    <section id="sets"
      className="flex flex-col items-center justify-center bg-cover bg-right lg:bg-center min-h-screen bg-fixed lg:p-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="md:self-start 2xl:self-center grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-w-4xl 2xl:max-w-6xl">
        {sets.map((set) => (
          <Link
          to={`/sets?setId=${set.id}&setName=${encodeURIComponent(set.name)}`}
            key={set.id}
            className="rounded-lg hover:scale-105 transition-transform duration-300 p-2 bg-white shadow-lg"
          >
            <img
              src={set.img}
              alt={set.name}
              className="w-full object-contain rounded-lg"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SetsGrid;
