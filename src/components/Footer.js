import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="helper_container">
            <div className="footer_pagination helper_container">
                <ul>
                    <li>Airbnb</li>
                    <li>Stays</li>
                    <li>Philippines</li>
                </ul>
            </div>
            <footer>
                <div className="footer_copy">
                    <p>© 2021 Airbnb, Inc. All rights reserved</p>  
                    <ul>
                        <li>
                            <Link to="./privacy">
                            Privacy
                            </Link>
                        </li>
                        <li>
                            <Link to="./terms">
                            Terms
                            </Link>
                        </li>
                        <li>
                            <Link to="./site_map">
                            Site Map
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer_social">
                    <ul>
                        <li><i class='bx bxl-facebook'></i></li>
                        <li><i class='bx bxl-twitter' ></i></li>
                        <li><i class='bx bxl-instagram-alt' ></i></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer
