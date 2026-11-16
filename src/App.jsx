import FormulaireEtudiant from "./components/FormulaireEtudiant";
import ListeEtudiantsV2 from "./components/ListeEtudiantsV2";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <h1>Gestion des étudiants</h1>

      <FormulaireEtudiant />

      <ListeEtudiantsV2 />

      <Resume />
    </div>
  );
}

export default App;