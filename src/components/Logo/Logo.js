import './logo.css'
import logo from '../../media/logo_letrada.png'

function Logo(){
    return(
    <section className='logo'>
        <img src={logo} alt="logo" />
    </section>
    )
}

export default Logo