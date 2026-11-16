
import { useContext } from "react";
import { DonneesContext } from "../context/DonneesContext";

function NombreEtudiants() {

  const { etudiants } = useContext(DonneesContext);

  return (
    <div>
      <h2>Nombre total d'étudiants</h2>
      <p>{etudiants.length}</p>
    </div>
  );

}

export default NombreEtudiants;
