import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, kind }) => {
  const filteredPets = pets.filter(pet => pet.kind === kind);

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={pets.filter(pet => pet.kind === "Cat")} dogs={pets.filter(pet => pet.kind === "Dog")} />
      <section className="pets-list">
        {filteredPets.map((pet) => (
          <Pet key={pet.id} kind={kind.toLowerCase()} pet={pet} />
        ))}
      </section>
    </section>
  );
};

export default PetsList
