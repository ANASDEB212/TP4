
import { createContext } from "react";

export const DonneesContext = createContext();

const etudiants = [
  { id: 1, nom: "Amrani", prenom: "Sara", age: 20 },
  { id: 2, nom: "Bennani", prenom: "Youssef", age: 22 },
  { id: 3, nom: "Alaoui", prenom: "Imane", age: 19 },
  { id: 4, nom: "Idrissi", prenom: "Omar", age: 21 },
  { id: 5, nom: "Tazi", prenom: "Salma", age: 23 }
];

export function DonneesProvider({children}) {

  return (
    <DonneesContext.Provider value={{ etudiants }}>
      {children}
    </DonneesContext.Provider>
  );

}
