
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSun, faMoon, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faZhihu } from "@fortawesome/free-brands-svg-icons"
export default function Consoler({ mode, setMode }) {

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

                <div className="header-title"><span className={mode ? "header-title-text-light" : "header-title-text-dark"}>Daniel Samba</span> <button className="header-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button></div>
                <div className="header-list-container">

                    <ul className="header-list">
                        <li className="header-list-item">Home</li>
                        <li className="header-list-item">About</li>
                        <li className="header-list-item">Projects</li>
                        <li className="header-list-item">Contact</li>
                    </ul>
                </div>
                <div className="header-button-container">

                    <button className="header-button-main" onClick={() => ChangeMode({mode, setMode})}>{mode ? <FontAwesomeIcon icon={faMoon} className="faMoon" /> : <FontAwesomeIcon icon={faSun} className="faSun"/>}</button>
                    <button className="header-button-languages"><FontAwesomeIcon icon={faZhihu} className="faZhihu" /></button>
                </div>




        </div>
    )
  }
  
  function ChangeMode( {mode, setMode}) {
        setMode(!mode);

            document.body.style.backgroundColor = mode ? "black" : "#f5f5f5";



    }