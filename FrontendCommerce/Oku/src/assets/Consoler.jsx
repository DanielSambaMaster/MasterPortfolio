import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSun, faMoon, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faZhihu } from "@fortawesome/free-brands-svg-icons"
export default function Consoler({ mode, setMode }) {
//                    <button className="header-button-main" onClick={() => ChangeMode({mode, setMode})}>{mode ? <FontAwesomeIcon icon={faMoon} className="faMoon" /> : <FontAwesomeIcon icon={faSun} className="faSun"/>}</button>

    return (
     <div>
<Header mode={mode} setMode={setMode} />
     </div>
    )

  }

  export function Header({ mode, setMode }) { 


    console.log("mode", mode)
    return(
        <div className={mode ? "headerlight" : "headerdark"}>

                <div className="header-title"><span className={mode ? "header-title-text-light" : "header-title-text-dark"}>Daniel Samba</span> <button className="header-button"><FontAwesomeIcon icon={faMagnifyingGlass} className="faMagnifyingGlass" /></button></div>
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
                    <button className="header-button-languages"><FontAwesomeIcon icon={faZhihu} className="faZhihu" /></button>
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