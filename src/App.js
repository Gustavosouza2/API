import React, { useEffect, useState} from "react";
import './App.css';
import api from "../src/services/api";


function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
    .get("https://api.github.com/users/Gustavosouza2")
    .then((response) => setUser(response.data))
    .catch((error) => {
      console.log("ERRROOR" + error)
    });

  }, []);


  return (
    <div className="App">
        <p>Usuário: {user?.login}</p>
        <p>biografia: {user?.bio}</p>
    </div>
  );
}

export default App;
