import './equipe.css'
import Tamara from '../../media/Tâmara.png'
import Nyze from '../../media/Nyze.png'
import Gilberto from '../../media/Gilberto.png'
import Alane from '../../media/Alane.png'
import Leonel from '../../media/Leonel.png'
import Flavio from '../../media/Flávio.png'
import Deiane from '../../media/Deiane.png'
import David from '../../media/David.png'
import Cibelle from '../../media/Cibelle.png'

function Equipe(){
    return(
        <section className="equipe">
        
        <h1>Equipe</h1>

        <img src={Tamara} alt="coord" className="img"/>
        <p>Tâmara Milhomem</p>

        <section className="container">

        <div>
          <img src={Nyze} alt="coord" className="img"/>
          <p>Nyze Maia</p>
        </div>

        <div>
          <img src={Gilberto} alt="coord" className="img"/>
          <p>Gilberto Nunes</p>
        </div>

        <div>
          <img src={Alane} alt="coord" className="img"/>
          <p>Alane Costa</p>
        </div>

        <div>
          <img src={Leonel} alt="coord" className="img"/>
          <p>Leonel Feitosa</p>
        </div>

        </section>

        <section className="container">

        <div>
          <img src={Flavio} alt="coord" className="img"/>
          <p>Flávio Eduardo</p>
        </div>

        <div>
          <img src={Deiane} alt="coord" className="img"/>
          <p>Deiane Silva</p>
        </div>

        <div>
          <img src={David} alt="coord" className="img"/>
          <p>David Teotonio</p>
        </div>

        <div>
          <img src={Cibelle} alt="coord" className="img"/>
          <p>Cibelle Yasmin</p>
        </div>

        </section>
        
      </section>
    )
}

export default Equipe