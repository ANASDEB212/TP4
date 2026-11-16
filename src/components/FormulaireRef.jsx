
import { useRef, useState } from "react";

function FormulaireRef() {

  const nomRef = useRef(null);
  const prenomRef = useRef(null);
  const ageRef = useRef(null);

  const [message, setMessage] = useState("");

  function ajouterEtudiant(event) {
    event.preventDefault();

    const nom = nomRef.current.value;
    const prenom = prenomRef.current.value;
    const age = ageRef.current.value;

    if (nom.trim() === "") {
      nomRef.current.focus();
      return
    }

    if (prenom.trim() === "") {
      prenomRef.current.focus();
      return;
    }

    if (age.trim() === "") {
      ageRef.current.focus();
      return;
    }

    setMessage(
      `Étudiant ajouté : ${nom} ${prenom} (${age} ans)`
    );

    nomRef.current.value = "";
    prenomRef.current.value = "";
    ageRef.current.value = "";

    nomRef.current.focus();
  }

  return (
    <div>
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

      <button onClick={() => nomRef.current.focus()}>
        Focus sur le nom
      </button>

      <p>{message}</p>
    </div>
  );
}

export default FormulaireRef;
