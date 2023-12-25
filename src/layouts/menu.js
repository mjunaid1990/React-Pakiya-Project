import React from "react";
import LogoImage from './../assets/img/Packiya-logo.png';
import { Link, useLocation } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import 'bootstrap/dist/js/bootstrap.min.js';

function Menu() {
    const location = useLocation();
    if (isMobile) {
        return (

            <div className="container">
                <nav className="navbar navbar-expand-lg p-0">
                    <Link className="navbar-brand" to="/">
                        <img src={LogoImage} width="150" className="d-inline-block align-top" alt="Packia" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className={location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-link dropdown">
                                <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    By Industry
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                                    <Link className="dropdown-item" to="/categories/cosmetic-boxes">Cosmetic Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/food-boxes">Food Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/retail-boxes">Retail Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/display-packaging">Display Packaging</Link>
                                    <Link className="dropdown-item" to="/categories/bakery-boxes">Bakery Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/eco-friendly-boxes">Eco Friendly Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/metalized-boxes">Metalized Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/medicine-boxes">Medicine Boxes</Link>
                                </div>
                            </li>
                            <li class="nav-link dropdown">
                                <button class="dropdown-toggle" type="button" id="dropdownMenuRigid" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Rigid Boxes
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuRigid" >
                                    <Link className="dropdown-item" to="/categories/rigid-gift-boxes">Rigid Gift Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/jewellery-boxes">Jewellery Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/custom-rigid-boxes">Custom Rigid Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/luxury-boxes">Luxury Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/apparel-boxes">Apparel Boxes</Link>
                                </div>
                            </li>
                            <li class="nav-link dropdown">
                                <button class="dropdown-toggle" type="button" id="dropdownMenustyle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    By Style
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenustyle" >
                                    <Link className="dropdown-item" to="/categories/bottom-closure">Bottom Closure</Link>
                                    <Link className="dropdown-item" to="/categories/figure-and-pattern">Figure and Pattern</Link>
                                    <Link className="dropdown-item" to="/categories/fold-and-assemble">Fold and Assemble</Link>
                                    <Link className="dropdown-item" to="/categories/rectangular">Rectangular</Link>
                                    <Link className="dropdown-item" to="/categories/showcase-exhibit">Showcase Exhibit</Link>
                                    <Link className="dropdown-item" to="/categories/top-closure">Top Closure</Link>
                                </div>
                            </li>
                            <li class="nav-link dropdown">
                                <button class="dropdown-toggle" type="button" id="dropdownMenuOther" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Other Products
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuOther" >
                                    <Link className="dropdown-item" to="/categories/boxes-by-material">Boxes By Material</Link>
                                    <Link className="dropdown-item" to="/categories/cardboard-boxes">Cardboard Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/regular-boxes">Regular Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/printing-products">Printing Products</Link>
                                </div>
                            </li>
                            <li className={location.pathname === '/contact-us' ? 'nav-item active' : 'nav-item'}>
                                <Link className="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    } else {
        return (

            <div className="container">

                <div className="header-top">
                    <Link className="navbar-brand" to="/">
                        <img src={LogoImage} width="150" className="d-inline-block align-top" alt="Packia" />
                    </Link>
                    <div className="header-top-inner text-right">
                        <a href="tel:+447451276400" className="account">
                            <i className="fa fa-phone"></i>:
                            +44 7451 276400
                        </a>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg p-0">

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className={location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-link dropdown">
                                <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    By Industry
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                                    <Link className="dropdown-item" to="/categories/cosmetic-boxes">Cosmetic Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/food-boxes">Food Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/retail-boxes">Retail Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/display-packaging">Display Packaging</Link>
                                    <Link className="dropdown-item" to="/categories/bakery-boxes">Bakery Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/eco-friendly-boxes">Eco Friendly Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/metalized-boxes">Metalized Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/medicine-boxes">Medicine Boxes</Link>
                                </div>
                            </li>
                            <li class="nav-link dropdown">
                                <button class="dropdown-toggle" type="button" id="dropdownMenuRigid" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Rigid Boxes
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuRigid" >
                                    <Link className="dropdown-item" to="/categories/rigid-gift-boxes">Rigid Gift Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/jewellery-boxes">Jewellery Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/custom-rigid-boxes">Custom Rigid Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/luxury-boxes">Luxury Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/apparel-boxes">Apparel Boxes</Link>
                                </div>
                            </li>
                            <li class="nav-link dropdown">
                                <button class="dropdown-toggle" type="button" id="dropdownMenustyle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    By Style
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenustyle" >
                                    <Link className="dropdown-item" to="/categories/bottom-closure">Bottom Closure</Link>
                                    <Link className="dropdown-item" to="/categories/figure-and-pattern">Figure and Pattern</Link>
                                    <Link className="dropdown-item" to="/categories/fold-and-assemble">Fold and Assemble</Link>
                                    <Link className="dropdown-item" to="/categories/rectangular">Rectangular</Link>
                                    <Link className="dropdown-item" to="/categories/showcase-exhibit">Showcase Exhibit</Link>
                                    <Link className="dropdown-item" to="/categories/top-closure">Top Closure</Link>
                                </div>
                            </li>
                            <li class="nav-link dropdown">
                                <button class="dropdown-toggle" type="button" id="dropdownMenuOther" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Other Products
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuOther" >
                                    <Link className="dropdown-item" to="/categories/boxes-by-material">Boxes By Material</Link>
                                    <Link className="dropdown-item" to="/categories/cardboard-boxes">Cardboard Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/regular-boxes">Regular Boxes</Link>
                                    <Link className="dropdown-item" to="/categories/printing-products">Printing Products</Link>
                                </div>
                            </li>
                            
                            <li className={location.pathname === '/contact-us' ? 'nav-item active' : 'nav-item'}>
                                <Link className="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }

}
export default Menu;