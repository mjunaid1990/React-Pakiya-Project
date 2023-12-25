import React, { useState, useEffect } from "react";
// import bannerImage from './../assets/img/packia-banner.png';
// import mailerIconImage from './../assets/img/Mailer-Boxes.png';
// import productIconImage from './../assets/img/Product-Boxes.png';
// import ShippingIconImage from './../assets/img/Shipping-Boxes.png';

import CustomDimention from './../assets/img/custom-dimension.png';
import NoMinimum from './../assets/img/No-Minium.png';
import HighQuality from './../assets/img/Full-color-Printing.png';
import threeDDesign from './../assets/img/3d-design-tool.png';
import CustomerService from './../assets/img/customer-service.png';
import sustainAndRecycle from './../assets/img/Recyclable.png';
// import ReviewImg from './../assets/img/Review.png';
import Header2 from "../layouts/header-2";
// import ProductQuoteCalculate from "../partials/product-quote-calculate";
import { useParams } from 'react-router-dom';
// import BoxTypeProductSpecs from "../partials/box_type_product_specs";
// import BoxTypeMailerSpecs from "../partials/box_type_mailer_specs";
import Faqs from "../partials/faqs";
import Testimonials from "../partials/testimonials";
// import MailerQuoteCalculate from "../partials/mailer-quote-calculate";
// import ShippingQuoteCalculate from "../partials/shipping-quote-calculate";
// import BoxTypeShippingSpecs from "../partials/box_type_shipping_specs";
import ProductSpecs from "../partials/product_specs";
import QuoteForm from "../partials/quoteForm";
import TagManager from 'react-gtm-module';

import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SingleProduct() {
    
    

    const { slug } = useParams();
    const [data, setData] = useState([]);
    const [gallery, setGallery] = useState([]);

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);



    // The function you pass to useEffect will be called after the component renders.
    useEffect(() => {

        TagManager.dataLayer({
            dataLayer: {
              event: 'pageview',
              pagePath: window.location.pathname
            },
        });

        setNav1(slider1);
        setNav2(slider2);
        // Perform your side effect here, such as data fetching, API calls, or DOM manipulation.
        fetch('https://app.packiya.com/api/product-by-slug?slug=' + slug)
            .then(response => response.json())
            .then(res => {
                setData(res.data);
                setGallery(res.data.images);

            });
    }, [slug, slider1, slider2]);


    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    };

    const settingsThumbs = {
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        // centerPadding: '10px'
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
           {
               breakpoint: 480,
               settings: {
                centerMode: true,
                arrows: false,
                    slidesToShow: 2,
               }
           }
        ]
    };


    const scrollToDiv = (id) => {
        const targetDiv = document.getElementById(id);
        if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getCalc = (box) => {
        // if (box.box_type === 1) {
        //     return <ProductQuoteCalculate results={box}></ProductQuoteCalculate>
        // } else if (box.box_type === 2) {
        //     return <MailerQuoteCalculate results={box}></MailerQuoteCalculate>
        // } else if (box.box_type === 3) {
        //     return <ShippingQuoteCalculate results={box}></ShippingQuoteCalculate>
        // }
        return <QuoteForm results={box}></QuoteForm>
    };

    return (
        <div>
            <Header2></Header2>
            <div className="product-page pd-header">
                <main className="main mt-3">
                    <div className="container">
                        <div className="ptitle">
                            <h1>{data.product_name}</h1>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-6 mb-3">

                                {/* {data.box_type === 1 ? (
                                    <div className="review-small-box">
                                        
                                        <div className="d-flex align-items-center">
                                            <div className="icon">
                                                <img src={ReviewImg} alt="review" />
                                            </div>
                                            <div className="rev-info">
                                                6 Reveiws
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <i className="fa fa-check"></i>
                                                Get Artwork in Minutes
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>
                                                Printing on durable corrugated cardboard
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>
                                                Affordable for larger items
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>
                                                No MOQ required
                                            </li>
                                        </ul>
                                    </div>
                                ) : data.box_type === 2 ? (
                                    <div className="review-small-box">
                                        
                                        <div className="d-flex align-items-center">
                                            <div className="icon">
                                                <img src={ReviewImg} alt="review" />
                                            </div>
                                            <div className="rev-info">
                                                6 Reveiws
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <i className="fa fa-check"></i>
                                                Get Design in Minutes
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>
                                                Printed on Strong Corrugated Material
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>
                                                Assemble without tape or glue
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>
                                                No MOQ required
                                            </li>
                                        </ul>
                                    </div>

                                ) : data.box_type === 3 ? (
                                    <div className="review-small-box">
                                        
                                        <div className="d-flex align-items-center">
                                            <div className="icon">
                                                <img src={ReviewImg} alt="review" />
                                            </div>
                                            <div className="rev-info">
                                                6 Reveiws
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <i className="fa fa-check"></i>
                                                Decorative & Protective sleeve
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>
                                                Ideal for convenience products
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>
                                                For Branding of generice packaging
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>
                                                Aslo used to bundle multiple items
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div></div>
                                )} */}

                                <div className="imagebox-wrap">
                                    {gallery ?
                                        <div className="as-va">
                                            <Slider
                                                className="mainSlider"
                                                {...settingsMain}
                                                asNavFor={nav2}
                                                ref={slider => (setSlider1(slider))}
                                            >

                                                {gallery?.map((slide, index) =>

                                                    <div className="slick-slide" key={`main-${index}`}>
                                                        <LazyLoadImage className="slick-slide-image" src={'https://app.packiya.com' + slide} alt="" />
                                                    </div>

                                                )}

                                            </Slider>
                                            <div className="thumbnail-slider-wrap">
                                                <Slider
                                                    {...settingsThumbs}
                                                    asNavFor={nav1}
                                                    ref={slider => (setSlider2(slider))}>

                                                    {gallery?.map((slide, index) =>

                                                        <div className="slick-slide" key={`child-${index}`}>
                                                            <LazyLoadImage className="slick-slide-image" src={'https://app.packiya.com' + slide} alt="" />
                                                        </div>

                                                    )}

                                                </Slider>
                                            </div>
                                        </div>
                                        :
                                        ''
                                    }

                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* <div className="box-selection d-flex position-relative">
                                    <NavLink to="/product/mailer-boxes" className={`custombox ${data && data.box_type === 2 ? 'selected' : ''} `}>
                                        <img src={mailerIconImage} alt="" />
                                        <span>Mailer Boxes</span>
                                    </NavLink>
                                    <NavLink to="/product/product-boxes" className={`custombox ${data && data.box_type === 1 ? 'selected' : ''} `}>
                                        <img src={productIconImage} alt="" />
                                        <span>Product Boxes</span>
                                    </NavLink>
                                    <NavLink to="/product/shipping-boxes" className={`custombox ${data && data.box_type === 3 ? 'selected' : ''} `}>
                                        <img src={ShippingIconImage} alt="" />
                                        <span>Shipping Boxes</span>
                                    </NavLink>
                                </div>

                                <div className="bluebg mt-4">
                                    <h4>Customize & Check Prices</h4>
                                </div> */}

                                <div className="short-desc">{data.short_desc}</div>

                                <div className="row d-flex justify-content-between quote-banner mx-auto align-items-center">
                                    <div className="left-side">
                                        <h2>Get a Free Quote</h2>
                                    </div>
                                    <div className="right-side">
                                        <div className="bg-white"><a href="/#"><p className="mb-0">up to <span className="discount">20%</span><b>off</b></p></a></div>
                                    </div>
                                </div>

                                {getCalc(data)}

                            </div>
                        </div>

                        <div className="product-features-boxes">
                            <div className="feature-list">
                                <div className="feature-box">
                                    <div className="imgbox">
                                        <img src={CustomDimention} alt="" />
                                    </div>
                                    <p>Custom Dimention</p>
                                </div>
                                <div className="feature-box">
                                    <div className="imgbox">
                                        <img src={NoMinimum} alt="" />
                                    </div>
                                    <p>No Minimum</p>
                                </div>
                                <div className="feature-box">
                                    <div className="imgbox">
                                        <img src={HighQuality} alt="" />
                                    </div>
                                    <p>High Quality Full-Color Printing</p>
                                </div>
                                <div className="feature-box">
                                    <div className="imgbox">
                                        <img src={threeDDesign} alt="" />
                                    </div>
                                    <p>Free Custom Design</p>
                                </div>
                                <div className="feature-box">
                                    <div className="imgbox">
                                        <img src={CustomerService} alt="" />
                                    </div>
                                    <p>Super Responsive Customer Service</p>
                                </div>
                                <div className="feature-box">
                                    <div className="imgbox">
                                        <img src={sustainAndRecycle} alt="" />
                                    </div>
                                    <p>Sustainably Sourced And Recyclable</p>
                                </div>
                            </div>
                        </div>




                    </div>


                    <div className="overview-review-wrap">

                        <div className="container">
                            <div className="overview-review-switcher hrdivider text-center mb-3">
                                <button type="text" className="btn btn-packiya">Overview</button>
                                <button type="text" className="btn btn-dark ml-3" onClick={() => scrollToDiv('review-section')}>Review</button>
                            </div>

                            <div className="content-panel overview-content">
                                {/* <h2 className="text-center my-4" style={{ fontSize: '22px' }}>Size. Style. Material. It's all here, and more.</h2> */}
                                <div className="d-flex">
                                    <div className="img-side text-center">
                                        <img src={'https://app.packiya.com' + data.overview_image_url} alt="" className="img-fluid" />
                                    </div>
                                    <div className="content-side">
                                        <div dangerouslySetInnerHTML={{ __html: data.overview }} />
                                    </div>
                                </div>

                                {/* <h2 className="text-center my-5" style={{ fontSize: '22px' }}>Make Custom Product Boxes for Your Brand</h2> */}
                                <div className="d-flex">
                                    <div className="content-side">
                                        <div dangerouslySetInnerHTML={{ __html: data.description }} />
                                    </div>
                                    <div className="img-side text-center">
                                        <img src={'https://app.packiya.com' + data.description_image_url} alt="" className="img-fluid" />
                                    </div>

                                </div>

                            </div>

                        </div>





                    </div>



                    <div className="product-specs mt-4">
                        <div className="specs-header">
                            <div className="container">
                                <div className="tabs-wrap" id="nav-tab" role="tablist">
                                    <button className="btn btn-transparent active">Specification</button>
                                    <button className="btn btn-transparent" onClick={() => scrollToDiv('faq-section')} style={{ opacity: '0.5' }}>FAQ</button>
                                    <button className="btn btn-transparent" onClick={() => scrollToDiv('review-section')} style={{ opacity: '0.5' }}>Reviews</button>
                                </div>
                            </div>
                        </div>
                        <div className="container">

                            <div className="tab-content">

                                    <ProductSpecs></ProductSpecs>

                                {/* <div id="specification">
                                    {data.box_type === 1 ? (
                                        <BoxTypeProductSpecs></BoxTypeProductSpecs>
                                    ) : data.box_type === 2 ? (
                                        <BoxTypeMailerSpecs></BoxTypeMailerSpecs>

                                    ) : data.box_type === 3 ? (
                                        <BoxTypeShippingSpecs></BoxTypeShippingSpecs>
                                    ) : (
                                        <div></div>
                                    )}
                                </div> */}

                            </div>
                        </div>

                    </div>

                    <div className="faq-section bg-light-gray" id="faq-section">
                        {data.faqs && data.faqs.length > 0 && (
                            <Faqs results={data.faqs}></Faqs>
                        )}
                    </div>

                    <div className="review-section" id="review-section">
                        {data.reviews && data.reviews.length > 0 && (
                            <Testimonials results={data.reviews}></Testimonials>
                        )}
                    </div>


                </main>
            </div>
        </div>
    );
}
export default SingleProduct;