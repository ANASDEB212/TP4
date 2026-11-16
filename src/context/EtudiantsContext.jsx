
import { createContext, useReducer } from "react";

function etudiantsReducer(state, action) {
  switch (action.type) {
    case "AJOUTER":
      return [...state, action.payload];

    case "SUPPRIMER":
      return state.filter(
        etudiant => etudiant.id !== action.payload
      );

    case "VIDER":
      return [];

    default:
      return state;
  }
}

export const EtudiantsContext = createContext();

const initial = [
  { id: 1, nom: "Amrani", prenom: "Sara", age: 20 },
  { id: 2, nom: "Bennani", prenom: "Youssef", age: 22 },
  { id: 3, nom: "Alaoui", prenom: "Imane", age: 19 }
];

export function EtudiantsProvider({ children }) {
  const [etudiants, dispatch] = useReducer(
    etudiantsReducer,
    initial
  );

  return (
    <EtudiantsContext.Provider value={{ etudiants, dispatch }}>
      {children}
    </EtudiantsContext.Provider>
  );
}
