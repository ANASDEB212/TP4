import { useReducer } from "react";

function compteurReducer(state, action) {
  switch (action.type) {
    case "INCREMENTER":
      return state + 1;

    case "DECREMENTER":
      return Math.max(0, state - 1);

    case "AJOUTER":
      return state + action.payload;

    case "REINITIALISER":
      return 0;

    default:
      return state;
  }
}

function CompteurReducer() {
  const [compteur, dispatch] = useReducer(compteurReducer, 0);

  return (
    <div>
      <h2>Compteur : {compteur}</h2>

      <button onClick={() => dispatch({ type: "INCREMENTER" })}>
        +1
      </button>

      <button onClick={() => dispatch({ type: "DECREMENTER" })}>
        -1
      </button>

      <button onClick={() => dispatch({ type: "AJOUTER", payload: 5 })}>
        +5
      </button>

      <button onClick={() => dispatch({ type: "REINITIALISER" })}>
        Remise à zéro
      </button>
    </div>
  );
}

export default CompteurReducer;