import React from "react"
import { Link } from "react-router-dom";
import './style.scss'

const Header = () => {

return (
        <section className="header">
        <h1 className="header-title"> La bibliothèque fantastique de Maggie</h1>

        <div>
            <ul className="nav-container">
                
                <Link to="/about">
                <li >
                    
                    À PROPOS
                </li>
                </Link>
                <li>
                    
                    MON BLOG                        
                </li>
                <li>
                    
                    MON PODCAST
                </li>
                <li>
                    
                    MA BIBLIOTHÈQUE
                </li>
            </ul>
        </div>
        </section>
    )

}

export default Header;