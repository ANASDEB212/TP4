
import { useContext, useRef } from "react";
import { EtudiantsContext } from "../context/EtudiantsContext";

function FormulaireEtudiant() {

  const { dispatch } = useContext(EtudiantsContext);


  const nomRef = useRef(null);
  const prenomRef = useRef(null);
  const ageRef = useRef(null);

  function ajouterEtudiant(e) {
    e.preventDefault();

    const nom = nomRef.current.value.trim();
    const prenom = prenomRef.current.value.trim();
    const age = Number(ageRef.current.value);

    if (!nom || !prenom || !age || age <= 0) {
      return;
    }

    const nouvelEtudiant = {
      id: Date.now(),
      nom: nom,
      prenom: prenom,
      age: age
    };

   
    dispatch({
      type: "AJOUTER",
      payload: nouvelEtudiant
    });


    nomRef.current.value = "";
    prenomRef.current.value = "";
    ageRef.current.value = "";


    nomRef.current.focus();
  }

  return (
    <div>
      <h2>Ajouter un étudiant</h2>

      <form onSubmit={ajouterEtudiant}>

        <input
          type="text"
          placeholder="Nom"
          ref={nomRef}
        />

        <input
          type="text"
          placeholder="Prénom"
          ref={prenomRef}
        />

        <input
          type="number"
          placeholder="Âge"
          ref={ageRef}
        />

        <button type="submit">
          Ajouter
        </button>

      </form>
    </div>
  );
}

export default FormulaireEtudiant;
