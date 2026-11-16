import { useRef, useState } from "react";

function ComparaisonRefState() {

  const [compteurState, setCompteurState] = useState(0);

  const compteurRef = useRef(0);

  function incrementerRef() {
    compteurRef.current = compteurRef.current + 1;
  }

  return (
    <div>

      <p>useState : {compteurState}</p>

      <p>useRef : {compteurRef.current}</p>

      <button onClick={() => setCompteurState(compteurState + 1)}>
        Incrémenter useState
      </button>

      <button onClick={incrementerRef}>
        Incrémenter useRef
      </button>

      <button onClick={() => console.log(compteurRef.current)}>
        Afficher dans la console
      </button>

    </div>
  );
}

export default ComparaisonRefState;
