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

                <div className="header-title"><span className="header-title-text">Daniel Samba</span> <button className="header-button">Center</button></div>
                <div className="header-list-container">

                    <ul className="header-list">
                        <li className="header-list-item">Home</li>
                        <li className="header-list-item">About</li>
                        <li className="header-list-item">Projects</li>
                        <li className="header-list-item">Contact</li>
                    </ul>
                </div>
                <div className="header-button-container">

                    <button className="header-button" onClick={() => setMode(!mode)}>{mode ? "Dark" : "Light"}</button>
                    <button className="header-button">EN-PC</button>
                </div>




        </div>
    )
  }