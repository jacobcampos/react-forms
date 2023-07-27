import { useState } from "react";
import '../App.css'

export default function Authenticate({token}) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleClick() {

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setErrorMessage('Example ');
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && (<p className="error">{errorMessage}</p>)}
      <button onClick={handleClick}>Authenticate Token!</button>
  </div>
  );
}