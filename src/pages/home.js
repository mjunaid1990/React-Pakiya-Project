import React, {useState, useEffect} from "react";
import MicrsoftImage from './../assets/img/microsoft.png';
import ZaraImage from './../assets/img/zara.png';
import NikeImage from './../assets/img/nike.png';
import NestleImage from './../assets/img/nestle.png';

// import OpenBoxImage from './../assets/img/open-box.png';
// import ClosedBoxImage from './../assets/img/closed-box.png';
// import OpenBoxSmallImage from './../assets/img/open-box-small.png';
// import OpenBoxShippingImage from './../assets/img/open-box-shipping.png';

import DriveCycleImage from './../assets/img/drive-cycle.png';
import ShipBoxImage from './../assets/img/ship-box.png';
import BoxProcessingImage from './../assets/img/box-processing.png';
import BoxPackagesImage from './../assets/img/packages.png';

import OurProcessImage from './../assets/img/process.png';

import Slider from "react-slick";
import { isMobile } from 'react-device-detect';
import HeroSection from './../partials/herosection';
import Header from "../layouts/header";
import { Link } from "react-router-dom";
import Faqs from "../partials/faqs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TagManager from 'react-gtm-module';

function Home() {

    const [data, setData] = useState([]);
    const [selling, setSelling] = useState([]);
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        TagManager.dataLayer({
            dataLayer: {
              event: 'pageview',
              pagePath: window.location.pathname
            },
        });
        fetchData()
    }, []);

    const fetchData = () => {
        fetch("https://app.packiya.com/api/home")
            .then(response => {
                return response.json()
            })
            .then(res => {
                setData(res.data.custom);
                setSelling(res.data.selling);
                setFaqs(res.data.faqs);
            })
    }

    

    var settings_custom_boxes = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false
    };


    return (
        <div>
            <Header></Header>
            <div className="home-page">
                <HeroSection></HeroSection>
                <main className="main">
                    <div>
                        <section className="trustedby bg-light-green">
                            <div className="container">
                                <div className="trusted-inner p-5">
                                    <h4 className="text-uppercase mb-4 text-center">Trusted by over 5,000 brands</h4>
                                    <div className="clients d-flex align-items-center justify-content-between">
                                        <div className="client-image">
                                            <img src={MicrsoftImage} alt="" className="img-fluid" />
                                        </div>
                                        <div className="client-image">
                                            <img src={ZaraImage} alt="" className="img-fluid" />
                                        </div>
                                        <div className="client-image">
                                            <img src={NikeImage} alt="" className="img-fluid" />
                                        </div>
                                        <div className="client-image">
                                            <img src={NestleImage} alt="" className="img-fluid" />
                                        </div>
                                        <div className="client-image">
                                            <img src={MicrsoftImage} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="choose-custom-box pt-100 pb-20">
                            <div className="container">
                                <h1 className="main-title">Choose Custom Boxes</h1>
                                
                                {isMobile
                                    ?
                                    <Slider className="slick-grid" {...settings_custom_boxes}>

{
                                            data && data.length > 0 ?
                                            data.map((item, index) => (
                                                <div key={index} className="product-grid-inner" >
                                                    <Link to={`/product/${item.slug}`}>
                                                        <div className="img-box">
                                                            <LazyLoadImage src={'https://app.packiya.com'+item.description_image_url} alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="content-box">
                                                            {item.box_type === 1 ? (
                                                                <h4 className="product-title">Product Boxes</h4>
                                                            ) : item.box_type === 2 ? (
                                                                <h4 className="product-title">Mailer Boxes</h4>
                                                                
                                                            ) : item.box_type === 3 ? (
                                                                <h4 className="product-title">Shipping Boxes</h4>
                                                            ) : (
                                                                <div></div>
                                                            )}
                                                            <p className="product-desc">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )):''
                                        }

                                    </Slider>
                                    :
                                    <div className="product-grid">

                                        {
                                            data && data.length > 0 ?
                                            data.map((item, index) => (
                                                <div key={index} className="product-grid-inner" >
                                                    <Link to={`/product/${item.slug}`}>
                                                        <div className="img-box">
                                                            <LazyLoadImage src={'https://app.packiya.com'+item.description_image_url} alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="content-box">
                                                            {item.box_type === 1 ? (
                                                                <h4 className="product-title">Product Boxes</h4>
                                                            ) : item.box_type === 2 ? (
                                                                <h4 className="product-title">Mailer Boxes</h4>
                                                                
                                                            ) : item.box_type === 3 ? (
                                                                <h4 className="product-title">Shipping Boxes</h4>
                                                            ) : (
                                                                <div></div>
                                                            )}
                                                            <p className="product-desc">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )):''
                                        }
                                            
                                    </div>
                                }
                            </div>
                        </section>

                        <section className="choose-custom-box pt-100 pb-20">
                            <div className="container">
                                <h1 className="main-title">Our Top Selling Boxes</h1>

                                {isMobile
                                    ?
                                    <Slider className="grid-slider" {...settings_custom_boxes}>

                                        {
                                            selling && selling.length > 0 ?
                                            selling.map((item, index) => (
                                                <div key={index} className="product-grid-inner" >
                                                    <Link to={`/product/${item.slug}`}>
                                                        <div className="img-box">
                                                            <LazyLoadImage src={'https://app.packiya.com'+item.description_image_url} alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="content-box">
                                                            <h4 className="product-title">{item.product_name}</h4>
                                                            <p className="product-desc">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )):''
                                        }

                                        

                                    </Slider>
                                    :
                                    <div className="product-grid">

{
                                            selling && selling.length > 0 ?
                                            selling.map((item, index) => (
                                                <div key={index} className="product-grid-inner" >
                                                    <Link to={`/product/${item.slug}`}>
                                                        <div className="img-box">
                                                            <LazyLoadImage src={'https://app.packiya.com'+item.description_image_url} alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="content-box">
                                                            <h4 className="product-title">{item.product_display_name}</h4>
                                                            <p className="product-desc">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )):''
                                        }

                                        

                                    </div>
                                }
                            </div>
                        </section>

                        <section className="why-packia curved-bg">
                            <div className="container">
                                <h1 className="main-title">Why Packia?</h1>
                                <div className={`pt-5 ${isMobile ? 'grid-1-columns' : 'grid-4-columns'}`}>
                                    <div className="grid-inner">
                                        <h4 className="grid-title">Super Fast Ordering</h4>
                                        <div className="img-box">
                                            <LazyLoadImage src={DriveCycleImage} alt="" />
                                        </div>
                                        <p className="grid-desc">
                                            Experience lightning-fast order processing, streamlining your packaging needs effortlessly, ensuring swift and efficient service from selection to checkout.
                                        </p>
                                    </div>

                                    <div className="grid-inner">
                                        <h4 className="grid-title">Ultimate Customization</h4>
                                        <div className="img-box">
                                            <LazyLoadImage src={ShipBoxImage} alt="" />
                                        </div>
                                        <p className="grid-desc">
                                            Tailor every aspect of your box design to reflect your brand's uniqueness, offering a wide array of customization options to achieve your desired look and feel.
                                        </p>
                                    </div>

                                    <div className="grid-inner">
                                        <h4 className="grid-title">Fast Turnaround</h4>
                                        <div className="img-box">
                                            <LazyLoadImage src={BoxProcessingImage} alt="" />
                                        </div>
                                        <p className="grid-desc">
                                            Swift production and delivery timelines ensure your custom boxes are in your hands promptly, meeting your urgent demands without compromising quality.
                                        </p>
                                    </div>

                                    <div className="grid-inner">
                                        <h4 className="grid-title">Free Customized Design</h4>
                                        <div className="img-box">
                                            <LazyLoadImage src={BoxPackagesImage} alt="" />
                                        </div>
                                        <p className="grid-desc">
                                            Avail of our expert design support at no extra cost, collaborating to create stunning, personalized packaging that perfectly encapsulates your brand identity and vision.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </section>

                        <section className="our-process curved-bg-white">
                            <div className="container">
                                <h1 className="main-title">Our Process</h1>
                                <div className="process-img">
                                    <LazyLoadImage src={OurProcessImage} alt="" />
                                </div>
                            </div>
                        </section>


                        <div className="faq-section bg-light-gray" id="faq-section">
                        {faqs && faqs.length > 0 && (
                            <Faqs results={faqs}></Faqs>
                        )}
                        </div>        



                    </div>
                </main>
            </div>
        </div>

    );
}
export default Home;