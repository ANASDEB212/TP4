
import { useContext } from "react";
import { EtudiantsContext } from "../context/EtudiantsContext";

function Resume() {

  const { etudiants } = useContext(EtudiantsContext);

  const nombreEtudiants = etudiants.length;

  const sommeAges = etudiants.reduce(
    (total, etudiant) => total + etudiant.age,
    0
  );

  const ageMoyen = nombreEtudiants === 0
    ? 0
    : sommeAges / nombreEtudiants;

  return (
    <div>
      <h2>Résumé</h2>

      <p>Nombre d'étudiants : {nombreEtudiants}</p>

      <p>Âge moyen : {ageMoyen.toFixed(1)} ans</p>
    </div>
  );
}

export default Resume;
