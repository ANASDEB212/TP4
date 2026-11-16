
import { useContext } from "react";
import { DonneesContext } from "../context/DonneesContext";

function AgeMoyen() {

  const { etudiants } = useContext(DonneesContext);

  const totalAges = etudiants.reduce(
    (total, etudiant) => total + etudiant.age,
    0
  );

  const moyenne = totalAges / etudiants.length;

  return (
    <div>
      <h2>Âge moyen</h2>
      <p>{moyenne.toFixed(1)} ans</p>
    </div>
  );

}

export default AgeMoyen;
