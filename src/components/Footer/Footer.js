import './footer.css'
import igIcon from '../../media/ig-icon.png'
import ytIcon from '../../media/yt-icon.png'

function Footer(){
    return(
        <section className="footer">
            <h1>Fique por dentro!</h1>

            <div id="container-icon">
                <a href="https://www.instagram.com/le.tra.da/" target="blank"><img src={igIcon} alt="IG" className="icon"/></a>
                <a href="https://www.youtube.com/channel/UCNtgNsnIkNHdADRHmwN1Ggg" target="blank"><img src={ytIcon} alt="YT" className="icon"/></a>
            </div>

            <h2>Gostariamo de saber sua opinião:</h2>
            <h3>Gestão:</h3>
            <p>tratamentodedados123@gmail.com</p>
            <h3>Para acessar nosso conteúdo:</h3>
            <p>@le.tra.da</p>

            <span><p>&copy;2022 por xFlax00</p></span>
        </section>
    )
}

export default Footer