import React, {useState} from "react";
import Header3 from "../layouts/header-3";
import { useNavigate } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import cardImage from './../assets/img/safe-payment-method.png';




const CheckoutForm = () => {
    const [isPaymentLoading, setPaymentLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const order_info = JSON.parse(sessionStorage.getItem('order'));
    const shipping_info = JSON.parse(sessionStorage.getItem('shipping'));
    const total_amount = sessionStorage.getItem('total_amount');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        setPaymentLoading(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const { id } = paymentMethod
                const formData = {
                    id: id,
                    amount: total_amount,
                    shipping_method: shipping_info.shipping_method,
                    order_info: order_info,
                    shipping_info: shipping_info
                }
                let res = await fetch("https://app.packiya.com/api/checkout", {
                    method: "POST",
                    body: JSON.stringify(formData),
                });

                let data = await res.json();
                if (data.success) {
                    console.log("Successful payment")
                    setPaymentLoading(false);
                    setSuccess(false);

                    setTimeout(()=>{
                        sessionStorage.removeItem('order');
                        sessionStorage.removeItem('shipping');
                        sessionStorage.removeItem('total_amount');

                        navigate("/thankyou");

                    },1000);

                }else {
                    setPaymentLoading(false);
                    setError(true);
                }

            } catch (error) {
                setPaymentLoading(false);
                setError(true);
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button className="btn btn-packiya mt-4" type="submit" disabled={isPaymentLoading}>
                {isPaymentLoading ? "Loading..." : "Pay Now"}
            </button>
            {
                success ?
                    <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
                        <strong>Conguratulation!</strong> You have made payment successfully!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    : ''
            }

            {
                error ?
                    <div className="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                        <strong>Sorry!</strong> Something went wrong please try again!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    : ''
            }

        </form>
    );
};

// const stripePromise = loadStripe('pk_live_51LwUPGH1UhgKhd3qsrPYVvmXcJQl2wrvg3oQoMrWRuVHE1GXmdK0bZx9FaedJn1G7uqsfEzJwEIFjky9MGGhF38W00luiNJ1Bi');
const stripePromise = loadStripe('pk_test_M0oqDuKsuy80UAfOVKAH9YXS00d94eJaX4');

function BillingPage() {

    const navigate = useNavigate();
    const order_info = JSON.parse(sessionStorage.getItem('order'));
    const shipping_info = JSON.parse(sessionStorage.getItem('shipping'));
    const total_amount = sessionStorage.getItem('total_amount');
    if(order_info === null || shipping_info === null) {
        navigate("/");
    }

    

    

    return (
        <div>
            <Header3></Header3>
            <div className="order-page">
                
                <main className="main">
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-8 col-12 mb-3">
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
                                    <div className="step-row">
                                        <div className="stepline"></div>
                                        <div className="center-item">
                                            <div className="stepicon">3</div>
                                            <div className="steptext">Confirm</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="shipping-heading mt-3">
                                    <h2>Shipping Information</h2>
                                </div>
                                <hr />

                                <div className="shipping-address-form-wrap p-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h4>Enter your payment details</h4>
                                        <div><img src={cardImage} alt="" /></div>
                                    </div>
                                    <hr />
                                    <Elements stripe={stripePromise}>
                                        <CheckoutForm />
                                    </Elements>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="order-summary">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h4 className="mb-0">Order Summary</h4>
                                        <div>Secure Checkout <i className="fa fa-lock"></i></div>
                                    </div>
                                    <hr />
                                    {order_info?
                                    <div className="d-flex align-items-center justify-content-between o-detail">
                                        <div className="left-side">
                                            {order_info.quantity +' x '+ order_info.box_detail.product_name }
                                        </div>
                                        <div className="right-side price">${order_info.total_price}</div>
                                    </div>
                                    :''
                                    }
                                    
                                    <hr />
                                    {order_info?
                                    <div className="d-flex align-items-center justify-content-between o-detail">
                                        <div className="left-side">
                                            Subtotal
                                        </div>
                                        <div className="right-side">${order_info.total_price}</div>
                                    </div>
                                    :''
                                    }
                                    {
                                        shipping_info?
                                        <div className="d-flex align-items-center justify-content-between o-detail">
                                            <div className="left-side">
                                                Shipping
                                            </div>
                                            <div className="right-side">${shipping_info.shipping_amount}</div>
                                        </div>
                                        :''
                                    }

                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between t-detail">
                                        <h5 className="mb-0">Order Total</h5>
                                        <div className="total-price">${parseFloat(total_amount).toFixed(2)}</div>
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
export default BillingPage;