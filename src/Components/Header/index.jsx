import React from "react"
import { Link } from "react-router-dom";
import './style.scss'

const Header = () => {

return (
        <section className="header">
        <h1 className="header-title"> La bibliothèque fantastique de Maggie</h1>

        <div>
            <ul className="nav-container">
                
                <Link to="/">
                <li className="nav-link">
                    ACCUEIL
                </li>
                </Link>

                <Link to="/blog">
                <li className="nav-link">
                    MON BLOG                        
                </li>
                </Link>

                <Link to="/podcast">
                <li className="nav-link">         
                    MON PODCAST
                </li>
                </Link>

                <Link to="/bibliothèque">
                <li className="nav-link">
                    MA BIBLIOTHÈQUE
                </li>
                </Link>

            </ul>
        </div>
        </section>
    )

}

export default Header;