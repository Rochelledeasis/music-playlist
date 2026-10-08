import './Music design.css'
import airSupply from './assets/air supply.png'
import aha from './assets/aha.png'
import pne from './assets/pne.png'
import eheads from './assets/eheads.png'
import cry from './assets/cry.png'

function App() {

  return (
    <>
     <section>
      <h2>Your Album</h2>
    
    </section>
    <div>
      
      <h1>My Music Playlist</h1>
      <img src={airSupply} alt=" " />
      <small>Air Supply</small>
      <img src={aha} alt=" " />
      <small>A-ha</small>
      <img src={pne} alt=" " />
      <small>Parokya ni Edgar</small>
      <img src={eheads} alt=" " />
      <small>Eraserheads</small>
      <img src={cry} alt=" " />
      <small>Etu omaasa kay Cruxx</small>

    </div> 
    </>
  )
}

export default App
