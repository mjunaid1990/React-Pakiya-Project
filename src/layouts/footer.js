import React from "react";
import logoLight from './../assets/img/Packiya-light-logo.png';
import paymentIcon from './../assets/img/payment-icon.png';
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer bg-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-12">
                        <div className="footer-logo">
                            <img src={logoLight} alt="Packia" />
                        </div>
                        <div className="contact-info py-4">
                            <a href="tel:+18507820008" className="d-block">Phone (US): +1 (850) 782-0008</a>
                            <a href="tel:+447451276400" className="d-block">Phone (UK): +44 7451 276400</a>
                            <a href="mailTo:info@packiya.com" className="d-block">Email: info@packiya.com</a>
                            <span className="d-block">Timing: Mon to Fri 9am to 5pm</span>
                            <span className="d-block">Address: 14 Breckon Hill Rd, Middlesbrough TS4 2DR, UK</span>
                        </div>
                        <div className="social-icons">
                            <a href="https://facebook.com/packiya.boxes" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com/packiya_boxes" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/@packiya_com" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.pinterest.com/packiya_boxes/" target="_blank" rel="noreferrer">
                                <i className="fab fa-pinterest"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/packiya-boxes/" target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className={`col-md-3 col-sm-4 col-12 ${isMobile ? 'mt-3' : ''}`}>
                        <div className="footer-title">
                            Quick Links
                        </div>
                        <div className="custom-links">
                            <Link to="/about-us" className="d-block">About Us</Link>
                            <Link to="/product/mailer-boxes" className="d-block">Mailer Boxes</Link>
                            <Link to="/product/product-boxes" className="d-block">Product Boxes</Link>
                            <Link to="/product/shipping-boxes" className="d-block">Shipping Boxes</Link>
                            <Link to="/privacy-policy" className="d-block">Privacy Policy</Link>
                            <Link to="/terms-and-conditions" className="d-block">Terms and conditions</Link>
                        </div>

                    </div>
                    <div className={`col-md-3 col-sm-4 col-12 safe-payment ${isMobile ? 'mt-3' : ''}`}>
                    
                        <div className="footer-title">
                            Safe Payments
                        </div>
                        <p>Our website is compatible with many popular payment methods. SSL 100% secure transactions</p>
                        <div className="payment-logo">
                            <img src={paymentIcon} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-12 newsletter">
                        <div className="footer-title">
                            Subscribe to newsletter
                        </div>
                        <p>Be among the first to learn about new products, promotions and featured customer stories</p>
                        <form className="newsletter-form">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Your Email" />
                                    <div className="input-group-append">
                                        <button className="btn btn-success" type="button">Subscribe</button>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row copyright">
                    <div className="col-12 text-center">
                        <hr />
                        @2023 <span className="text-uppercase">Packiya.com All Rights Reserved</span>
                    </div>
                </div>

            </div>
            <a href="https://api.whatsapp.com/send?phone=+447451276400&text=Hi! I am looking for a Custom Box." className="whatsapp-float" rel="noreferrer" target="_blank">
                <i className="fab fa-whatsapp my-float"></i>
            </a>
        </footer>

    );
}
export default Footer;