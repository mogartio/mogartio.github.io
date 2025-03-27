import mogartio from '.././img/mogartio.jpeg'
import link from '.././img/external-link.png'
import { useRef, useState } from 'react';
export default function Main() {
    const ref = useRef(null)
    function timeout(delay) {
      return new Promise( res => setTimeout(res, delay) );
    }
    const [visible, setVisible] = useState(false)
    let cambiarVisibilidad = () => {
        if ( visible ) {
            setVisible(false)
            return
        }
        setVisible(true)
        scroll()
    };
    async function scroll(){
      await timeout(1)
      window.scrollTo(0, document.body.scrollHeight)
  };
    const img = new Image();
    img.src = mogartio;
return (
      <div ref={ref}>
        <div className="dg_container">
            <div className="video-container">
                <iframe className="video-dg"
                  src="https://www.youtube.com/embed/4n_UKVljoS0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
            </div>

<div class="parrafo_dg">
  <h1>Duck Game Clone</h1>
  <h2>Multiplayer Online Shooter with Custom Physics</h2>

  <div class="content-section">
    <h3>Project Overview:</h3>
    <ul class="feature-list">
      <li><strong>Client-Server Architecture</strong> supporting concurrent game lobbies</li>
      <li><strong>Custom Physics Engine</strong> for character movement, collisions, and projectile dynamics</li>
      <li><strong>Online Multiplayer</strong> via TCP networking with socket programming</li>
      <li><strong>Rendering</strong> using SDL</li>
    </ul>
  </div>

  <div class="divider"></div>

  <div class="content-section">
    <h3>Key Technologies:</h3>
    <ul class="tech-list">
      <li>C++ (OOP)</li>
      <li>Concurrency</li>
      <li>TCP Sockets</li>
      <li>SDL</li>
      <li>Custom Physics Engine built from Scratch</li>
      <li>Collision Detection</li>
    </ul>
  </div>
</div>
 <button className="botonInvisible" onClick={cambiarVisibilidad}> More About Me <img src={link} className='botonVisibilidad'alt="LINK"/> </button>
            {visible && 
                <div className="ContainerVisible" >
                    <div className="wrapperPersonal">
                      <div className="hola"> Hi! </div>
                      <div > <img src={mogartio} className="fotoMia"/></ div>
                    </div>
                    <p className="parrafoPerso">I'm Martín,a fourth-year Informatics Engineering student at UBA. <br></br> 
                                      <br></br> 
                             I'm mainly interested in backend development at both high and low level of abstraction, although I also enjoy working with operating systems.<br></br> <br></br>
          Some trivia about me: My favourite language is C++, I'm a Neovim poweruser and I'm a Racing Club de Avellaneda enjoyer <br></br> <br></br> 
         Thanks a lot for visiting my website, you can find my CV, my linkedin profile and my github account at the top of the page.   </p>

                </div>}
        </div>
    </div>
);
}
