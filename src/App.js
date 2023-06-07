import './styles.scss';
import axios from 'axios';
import Personaje from './Personaje';
import { useState, useEffect } from 'react';

function App() {

   const [personajes, setPersonajes] = useState([])

   useEffect(() => {
      axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6864b7af2e01b02a0f82a948606cff61&hash=2b4fbb2ff4b6335512e68c684d7e12ef`).then(resp => {
         setPersonajes(resp.data.data.results)

      }).catch(error => console.log(error))
   }, [])

   console.log(personajes)


   return (
      <div className='App'>
         <h1>MARVEL</h1>
         <div className="personajes-container">
            {
               personajes.map( personaje => (
               <Personaje personaje={personaje} key={personaje.id}/>
               ))
            }
         </div>
      </div>
   );
}

export default App;

