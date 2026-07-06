
import lion from "./assets/lion.png"
import lionlight from "./assets/lionlight.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSun, faMoon, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faZhihu } from "@fortawesome/free-brands-svg-icons"
export default function Consoler({ mode, setMode }) {
//                    <button className="header-button-main" onClick={() => ChangeMode({mode, setMode})}>{mode ? <FontAwesomeIcon icon={faMoon} className="faMoon" /> : <FontAwesomeIcon icon={faSun} className="faSun"/>}</button>

//{mode ? "header-button-dark" : "header-button-light"}
    return (
     <div>
<Header mode={mode} setMode={setMode} />
<DisplayMain mode={mode} setMode={setMode} />
     </div>
    )

  }

  export function Header({ mode, setMode }) { 


    console.log("mode", mode)
    return(
        <div className={mode ? "headerlight" : "headerdark"}>

                <div className="header-title">
                    <span className={mode ? "header-title-text-light" : "header-title-text-dark"}>Daniel Samba</span> 
                    <button className={mode ? "header-button-dark" : "header-button-light"}><FontAwesomeIcon icon={faMagnifyingGlass} className="faMagnifyingGlass" /></button></div>
                <div className="header-list-container">

                    <ul className="header-list">
                        <li className={mode ? "header-list-item-dark" : "header-list-item-light"}>Poliglota</li>
                        <li className={mode ? "header-list-item-dark" : "header-list-item-light"}>Eng. Software</li>
                        <li className={mode ? "header-list-item-dark" : "header-list-item-light"}>Projects</li>
                        <li className={mode ? "header-list-item-dark" : "header-list-item-light"}>Contact</li>
                    </ul>
                </div>
                <div className="header-button-container">


                    <div className="header-toggle-light">

                        <FontAwesomeIcon icon={faMoon} className="faMoon" /> 
                           
                        <button className="header-button-mode" onClick={() => ChangeMode({mode, setMode})}  >
                        </button>
                        <FontAwesomeIcon icon={faSun} className="faSun"/>
                    </div>

                <div className="header-languages">
                <div>PT |</div>
                <div>EN |</div>
                <div>FR |</div>
                <div>CN </div>
                </div>
                
                </div>




        </div>
    )
  }
  
  function ChangeMode( {mode, setMode}) {
        setMode(!mode);
document.querySelector(".header-button-mode").classList.toggle("header-button-mode-active");
document.querySelector(".header-toggle-light").classList.toggle("header-toggle-light-active");
            document.body.style.backgroundColor = mode ? "black" : "#f5f5f5";



    }
function DisplayMain({mode, setMode}) {

    return(
        <div className="main-container">
          <div className="main-text-container">

<div className={mode ? "main-text-contenty-light" : "main-text-contenty-dark"}>

    <span className={mode ? "main-text-content-light" : "main-text-content-dark"}>
        Sobre Mim<br/>

Olá! O meu nome é Daniel E. Garcia Samba.

Sou estudante do 2.º ano de Ciência da Computação na Universidade Agostinho Neto, onde desenvolvo uma base sólida em engenharia de software, estruturas de dados, algoritmos, bases de dados e desenvolvimento de aplicações.

Tenho uma forte paixão por tecnologia, inovação e transformação digital. Dedico-me ao desenvolvimento de soluções modernas que combinam design, desempenho e experiência do utilizador (UI/UX), procurando sempre criar produtos intuitivos, escaláveis e orientados para resultados.
<br/>
Ao longo do meu percurso, tenho desenvolvido competências em desenvolvimento web, integração de sistemas, automação de processos, análise de dados e criação de software corporativo. Gosto de aprender continuamente novas tecnologias e de enfrentar desafios que me permitam evoluir tanto a nível técnico como profissional.

<br/>Além da área tecnológica, possuo experiência em ambientes corporativos, especialmente em operações e atendimento ao cliente, o que me permitiu desenvolver competências como comunicação, trabalho em equipa, resolução de problemas e gestão de processos.
    </span>
<div class="technologies">

  <div class="tech">
    <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" className="tech-icon"/>
  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/css/1572B6" alt="CSS3" className="tech-icon "/>
  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="tech-icon "/>
 
  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="tech-icon"/>
  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="tech-icon"/>

  </div>

<div class="tech">
    <img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase" className="tech-icon"/>
  </div>
  <div class="tech">
    <img src="https://cdn.simpleicons.org/vite/646CFF" alt="Vite" className="tech-icon"/>

  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/node.js/5FA04E" alt="Node.js" className="tech-icon"/>

  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/express/FFFFFF" alt="Express" className="tech-icon"/>

  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="tech-icon"/>
  
  </div>

  

  <div class="tech">
    <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="tech-icon"/>
  
  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/kubernetes/326CE5" alt="Kubernetes" className="tech-icon"/>

  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" className="tech-icon"/>
  
  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" className="tech-icon"/>
    
  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL" className="tech-icon"/>
  
  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" className="tech-icon"/>
   
  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" className="tech-icon"/>

  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase" className="tech-icon"/>

  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" className="tech-icon"/>
   
  </div>

  <div class="tech">
    <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" className="tech-icon"/>

  </div>

</div>
</div>

          </div>
            <div className="main-image-container" ><img src={ mode ? lion : lionlight} alt="Lion" className="main-image" /></div>
        </div>
    )
}
