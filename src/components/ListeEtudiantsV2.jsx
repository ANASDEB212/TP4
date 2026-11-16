
import { useContext } from "react";
import { EtudiantsContext } from "../context/EtudiantsContext";

function ListeEtudiantsV2() {

  const { etudiants, dispatch } = useContext(EtudiantsContext);

  return (
    <div>
      <h2>Liste des étudiants</h2>

      {etudiants.length === 0 ? (
        <p>Aucun étudiant</p>
      ) : (
        <ul>
          {etudiants.map((etudiant) => (
            <li key={etudiant.id}>
              {etudiant.nom} {etudiant.prenom} - {etudiant.age} ans

              <button
                onClick={() =>
                  dispatch({
                    type: "SUPPRIMER",
                    payload: etudiant.id
                  })
                }
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => dispatch({ type: "VIDER" })}
      >
        Vider la liste
      </button>
    </div>
  );
}

export default ListeEtudiantsV2;
