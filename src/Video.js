import linkVideo from './intro.mp4'

function Video(){
    return(
        <section className="intro">
        <video width="780px" height="439px" controls>
          <source src={linkVideo} type="video/mp4"/>
        </video>
        <br></br>
        <button>Siga-nos</button>
      </section>
    )
}

export default Video