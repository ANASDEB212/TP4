
import { useReducer, useState } from "react";

function etudiantsReducer(state, action) {
  switch (action.type) {
    case "AJOUTER":
      return [...state, action.payload];

    case "SUPPRIMER":
      return state.filter(e => e.id !== action.payload);

    case "VIDER":
      return [];

    default:
      return state;
  }
}

function GestionReducer() {

  const etudiantsInitiaux = [
    { id: 1, nom: "Amrani", prenom: "Sara", age: 20 },
    { id: 2, nom: "Bennani", prenom: "Youssef", age: 22 },
    { id: 3, nom: "Alaoui", prenom: "Imane", age: 19 }
  ];

  const [etudiants, dispatch] = useReducer(
    etudiantsReducer,
    etudiantsInitiaux
  );

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");

  function ajouterEtudiant(e) {
    e.preventDefault();

    if (!nom.trim() || !prenom.trim() || !age || Number(age) <= 0) {
      return;
    }

    const nouvelEtudiant = {
      id: Date.now(),
      nom: nom,
      prenom: prenom,
      age: Number(age)
    };

    dispatch({
      type: "AJOUTER",
      payload: nouvelEtudiant
    });

    setNom("");
    setPrenom("");
    setAge("");
  }

  return (
    <div>
      <h2>Gestion des étudiants</h2>

      <form onSubmit={ajouterEtudiant}>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />

        <input
          type="number"
          placeholder="Âge"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Ajouter</button>
      </form>

      <h3>Nombre d'étudiants : {etudiants.length}</h3>

      {etudiants.length === 0 ? (
        <p>Aucun étudiant</p>
      ) : (
        <ul>
          {etudiants.map((etudiant) => (
            <li key={etudiant.id}>
              {etudiant.nom} {etudiant.prenom} - {etudiant.age} ans

              <button
                type="button"
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
        type="button"
        onClick={() => dispatch({ type: "VIDER" })}
      >
        Vider la liste
      </button>
    </div>
  );
}

export default GestionReducer;
