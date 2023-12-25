import React from "react";
import Header3 from "../layouts/header-3";

function ThankyouPage() {

    return (
        <div>
            <Header3></Header3>
            <div className="order-page">
                
                <main className="main">
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-12 col-12 mb-3">
                                <div className="prorgress-steps">
                                    <div className="step-row completed">
                                        <div className="stepline"></div>
                                        <div className="center-item">
                                            <div className="stepicon">
                                                <i className="fa fa-check"></i>
                                            </div>
                                            <div className="steptext">Shipping</div>
                                        </div>
                                    </div>
                                    <div className="step-row completed">
                                        <div className="stepline"></div>
                                        <div className="center-item">
                                            <div className="stepicon">2</div>
                                            <div className="steptext">Billing</div>
                                        </div>
                                    </div>
                                    <div className="step-row completed">
                                        <div className="stepline"></div>
                                        <div className="center-item">
                                            <div className="stepicon">3</div>
                                            <div className="steptext">Confirm</div>
                                        </div>
                                    </div>
                                </div>


                                <div className="text-center">
                                    <div className="shipping-heading mt-3">
                                        <h2>Thank You</h2>
                                    </div>
                                    <hr />
                                    <div id="myForm">
                                        <p>You have successfully made payment. Thank You!</p>
                                        <a href="/" className="btn btn-packiya mt-4">Go Home</a>
                                    </div>
                                </div>
                                
                                
                            </div>
                            
                        </div>
                    </div>
                </main>
            </div>
        </div>

    );
}
export default ThankyouPage;