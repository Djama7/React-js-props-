
import './App.css';
import Profile from './compo/Profile';


function App() {
  const name = 'Amine jamoussi'
  const bio  = [ '2011: Lycée les péres blanc','2015: UIK - Université Ibn Khaldoun','2022: GOMYCODE']
  const profession = 'Développeur web'
  const handlename = (a) => { 
    return alert (`  marhbé ${a} `)
  }

  return (
    <div className="App">
      <Profile name={name} profession={profession} bio={bio} handlename={handlename} >
      <img src='/amine.jpeg' alt='Not found'/>
        
       </Profile>



      
    </div>
  );
}

export default App;
