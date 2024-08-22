import React, {useState} from 'react'
import BulmaIcon from '../Assets/Bulma_Icon.svg'

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={BulmaIcon} alt="Bulma Logo" width="112" height="28" />
                </a>

                <a
                    role="button"
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    onClick={toggleNavbar}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Home
                    </a>

                    <a className="navbar-item" href="#">
                        About
                    </a>

                    <a className="navbar-item" href="#">
                        Contact
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="#">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="#">
                                Documentation
                            </a>
                            <a className="navbar-item" href="#">
                                Tutorials
                            </a>
                            <a className="navbar-item" href="#">
                                FAQ
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item" href="#">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-light" href="#">
                                Log in
                            </a>
                            <a className="button is-primary" href="#">
                                <strong>Sign up</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
