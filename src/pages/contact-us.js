import React, { useState, useEffect } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Header2 from "../layouts/header-2";
import TagManager from 'react-gtm-module';

function ContactUs() {

    const [inputs, setInputs] = useState({});
    const [phone, setPhone] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errMessage, setErrMessage] = useState('');

    // const currency = sessionStorage.getItem('currency');

    useEffect(() => {
        // Trigger GTM event here based on the route change
        TagManager.dataLayer({
            dataLayer: {
              event: 'pageview',
              pagePath: window.location.pathname
            },
        });
        
      }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            name: inputs.name,
            phone: phone,
            email: inputs.email,
            message: inputs.message
        }
        setSubmitting(true);
        try {
            let res = await fetch("https://app.packiya.com/api/save-contact-form", {
                method: "POST",
                body: JSON.stringify(formData),
            });
            let data = await res.json();
            if (data.success) {
                setSubmitting(false)
                setInputs({ name: '', email: '', message: '' })
                setSuccessMessage('<div id="success-message" class="alert alert-success alert-dismissible fade show" role="alert"> We have received your request and will be in touch with you soon. Thank you for considering OlaGee® for your needs.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
            } else {
                setErrMessage('<div id="err-message" class="alert alert-danger alert-dismissible fade show" role="alert"> Something went wrong!<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
            }


        } catch (err) {
            setErrMessage('<div id="err-message" class="alert alert-danger alert-dismissible fade show" role="alert"> Something went wrong!<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
            setSubmitting(false)
        }

    }

    return (
        <div className="page-style">
            <Header2></Header2>
            <main className="main mt-4">
                <section className="small-banner">
                    <div className="container">
                        <h2 className="mb-0">Contact Us</h2>
                    </div>
                </section>
                <section className="container form-padding">
                    <div className="form-detail">
                        <h1>

                            Get in touch with us
                            <div></div>

                        </h1>
                        <p className="py-4">
                        Have questions about your custom boxes or need tailored packaging solutions? Reach out to us for expert assistance and personalized service. Your satisfaction is our priority.
                        </p>

                    </div>
                    <div className="row py-4">
                        <div className="col-12 col-md-8 col-lg-8 mb-md-0 mb-4">
                            <div className="form-border">
                                <form onSubmit={handleSubmit}>

                                    <div className="row py-1">
                                        <div className="col-lg-6">
                                            <div className="form-group input-group">
                                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                                                <input type="text" value={inputs.name || ""} onChange={handleChange} name="name" placeholder="Your Name" className="form-control " required />
                                            </div>
                                            <div className="form-group input-group">
                                                <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                                <input type="text" value={inputs.email || ""} onChange={handleChange} name="email" placeholder="Your Email" className="form-control" required />
                                            </div>
                                            <div className="form-group mb-0">
                                                <PhoneInput
                                                    placeholder="Enter phone number"
                                                    defaultCountry="GB"
                                                    international={true}
                                                    value={phone}
                                                    onChange={setPhone} required />
                                            </div>
                                            
                                        </div>

                                        <div className="col-lg-6 ">
                                            <textarea className="form-control " placeholder="Message" name="message" id="exampleFormControlTextarea1" rows="5" onChange={handleChange} value={inputs.message || ""}></textarea>
                                        </div>
                                        <div className="col-lg-12 pt-4">
                                            {submitting
                                                ?
                                                <button type="button" className="w-100 fw-bold btn btn-primary btn-lg btn-block" disabled="true">Submitting...</button>
                                                :
                                                <button type="submit" className=" w-100 fw-bold btn btn-primary btn-lg btn-block" >Submit Now</button>
                                            }


                                        </div>

                                        {successMessage ? <div dangerouslySetInnerHTML={{ __html: successMessage }}></div> : ''}
                                        {errMessage ? <div dangerouslySetInnerHTML={{ __html: errMessage }}></div> : ''}

                                    </div>
                                </form>
                            </div>

                        </div>


                        <div className="col-12 col-md-4 col-lg-4 py-1 d-flex flex-column">
                            <div className="flex-1">
                                <div className=" w-100 btn-group h-100 ">
                                    <a href="/#" className="btn btn-contact d-flex align-items-center">
                                        <i className="fa fa-message"></i>
                                        <div className="d-flex flex-column">
                                            <div className="live-chat">Live Chat</div>
                                            <div className="live-chat-info">Live Chat to avail more discount</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className=" w-100 btn-group h-100 ">
                                    <a href="tel:+447451276400" className="btn btn-contact d-flex align-items-center">
                                        <i className="fa fa-phone"></i>
                                        <div className="d-flex flex-column">
                                            <div className="live-chat">Contact Number</div>
                                            <div className="live-chat-info">+44 7451 276400</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className=" w-100 btn-group h-100">
                                    <a href="mailto:info@packiya.com" className="btn btn-contact d-flex align-items-center">
                                        <i className="fa fa-envelope"></i>
                                        <div className="d-flex flex-column">
                                            <div className="live-chat">Email Address</div>
                                            <div className="live-chat-info">info@packiya.com</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </main>
        </div >
    );
}
export default ContactUs;