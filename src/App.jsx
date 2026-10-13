import './Music design.css'
import airSupply from './assets/air supply.png'
import aha from './assets/aha.png'
import pne from './assets/pne.png'
import eheads from './assets/eheads.png'
import cry from './assets/cry.png'
import Beatles from './assets/Beatles.png'
import tff from './assets/tff.png'
import car from './assets/car.png'

function App() {

  return (
    <>
     <section>
      <h2>Your Album</h2>
      <h1>My Favorite Albums</h1>
    </section>
    <div>


         <div className="album">
            <img src={aha} alt=" " />
            <small>A-ha</small>
            <medium>Playing: Take on Me</medium>
          </div>

       <div className="playlist">
          <div className="album">
            <img src={airSupply} alt=" " />
            <small>Air Supply</small>
          </div>

          <div className="album">
            <img src={pne} alt=" " />
            <small>Parokya ni Edgar</small>
          </div>

          <div className="album">
            <img src={eheads} alt=" " />
            <small>Eraserheads</small>
          </div>

          <div className="album">
            <img src={tff} alt=" " />
            <small>Tears for Fears</small>
          </div>

          <div className="album">
            <img src={Beatles} alt=" " />
            <small>The Beatles</small>
          </div>

          <div className="album">
            <img src={cry} alt=" " />
            <small>Etu omaasa kay Cruxx</small>
          </div>
 
          <div className="album">
            <img src={car} alt=" " />
            <small>Carpenters</small>
          </div>
        </div>
      </div>
    </>
  )
}

export default App