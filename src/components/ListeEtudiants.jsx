
import { useContext } from "react";
import { DonneesContext } from "../context/DonneesContext";

function ListeEtudiants() {

  const { etudiants } = useContext(DonneesContext);

  return (
    <div>
      <h2>Liste des étudiants</h2>

      <ul>
        {etudiants.map((etudiant) => (
          <li key={etudiant.id}>
            {etudiant.nom} {etudiant.prenom} - {etudiant.age} ans
          </li>
        ))}
      </ul>
    </div>
  );

}

export default ListeEtudiants;
