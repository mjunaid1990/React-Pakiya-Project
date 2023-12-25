import React, {useState} from "react";
import Header3 from "../layouts/header-3";
import { useNavigate } from "react-router-dom";

function ShippingPage() {

    const navigate = useNavigate();
    const order_info = JSON.parse(sessionStorage.getItem('order'));
    if(order_info === null) {
        navigate("/");
    }

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        address: '',
        address_2: '',
        city: '',
        state: '',
        country: '',
        postal_code: '',
        phone: '',
        email: '',
        shipping_method: '',
        shipping_amount: null
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        country: '',
        postal_code: '',
        phone: ''
    });

    const [total_amount, setTotalAmount] = useState(order_info.total_price);
    const [shipping, setShipping] = useState(null);
    const [isPaymentLoading, setPaymentLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let formErrors = {};


        // If there are errors, set the state with error messages
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            // console.log('Form submitted:', formData);
            setPaymentLoading(true);
            sessionStorage.setItem('shipping', JSON.stringify(formData));
            sessionStorage.setItem('total_amount', JSON.stringify(total_amount));
            setTimeout(()=>{
                navigate("/billing-details");
            },2000);
        }
    };

    const handleShippingMethod = (m, shiAmount) => {
        formData.shipping_method = m;
        setShipping(shiAmount);
        formData.shipping_amount = shiAmount;
        setTotalAmount(parseFloat(order_info.total_price) + parseFloat(shiAmount))
    }

    const floatLabel = event => {
        const child = document.getElementById(event.currentTarget.id);
        child.parentElement.classList.add('active');
        child.parentElement.querySelector('.form-control').focus();
    }

    const floatLabelUnset = event => {
        const items = document.querySelectorAll('.shipping-form .form-control');
        items.forEach(function(item, index) {
        // Do something with each element
            if(item.value.trim() === '') {
                item.parentElement.classList.remove('active');
            }else {
                item.parentElement.classList.add('active');
            }
        });
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
                                    <div className="step-row">
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
                                        <h4>Enter your shipping address</h4>
                                        <div>* Required</div>
                                    </div>
                                    <hr />
                                    <form method="post" className="shipping-form" onSubmit={handleSubmit}>
                                        <div className={`form-group float-label-input ${errors.name !== ''?'has-error':''} `}>
                                            <input type="text" name="name" className="form-control" onMouseLeave={floatLabelUnset} onBlur={floatLabelUnset}  onChange={handleChange} required />
                                            <label id="name" className="control-label" onClick={floatLabel}>Name *</label>
                                        </div>

                                        <div className="form-group float-label-input">
                                            <input type="text" name="email" className="form-control"  onChange={handleChange} onBlur={floatLabelUnset} onMouseLeave={floatLabelUnset} />
                                            <label id="email" className="control-label" onClick={floatLabel}>Email *</label>
                                        </div>

                                        <div className="form-group float-label-input">
                                            <input type="text" name="company" className="form-control"  onChange={handleChange} onBlur={floatLabelUnset} onMouseLeave={floatLabelUnset} />
                                            <label id="company" className="control-label" onClick={floatLabel}>Company</label>
                                        </div>

                                        <div className={`form-group float-label-input ${errors.address !== ''?'has-error':''} `}>
                                            <input type="text" name="address" className="form-control"  onChange={handleChange} onBlur={floatLabelUnset} onMouseLeave={floatLabelUnset} required />
                                            <label id="address" className="control-label" onClick={floatLabel}>Street Address *</label>
                                        </div>

                                        <div className="form-group float-label-input">
                                            <input type="text" name="address_2" className="form-control" onChange={handleChange} onBlur={floatLabelUnset} onMouseLeave={floatLabelUnset} />
                                            <label id="address_2" className="control-label" onClick={floatLabel}>Apt / Unit / Suit No.</label>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className={`form-group float-label-input ${errors.city !== ''?'has-error':''} `}>
                                                    <input type="text" name="city" className="form-control" onChange={handleChange} onBlur={floatLabelUnset} onMouseLeave={floatLabelUnset} required />
                                                    <label id="city" className="control-label" onClick={floatLabel}>City *</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group float-label-input">
                                                    <input type="text" name="state" className="form-control" onChange={handleChange} onBlur={floatLabelUnset} onMouseLeave={floatLabelUnset} />
                                                    <label id="state" className="control-label" onClick={floatLabel}>State</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`form-group float-label-input ${errors.postal_code !== ''?'has-error':''} `}>
                                            <input type="text" name="postal_code" className="form-control" onChange={handleChange} onBlur={floatLabelUnset} onMouseLeave={floatLabelUnset} required />
                                            <label id="postal_code" className="control-label" onClick={floatLabel}>Postal Code *</label>
                                        </div>

                                        <div className={`form-group float-label-input ${errors.country !== ''?'has-error':''} `}>
                                            <input type="text" name="country" className="form-control" onChange={handleChange} onBlur={floatLabelUnset} onMouseLeave={floatLabelUnset} required />
                                            <label id="country" className="control-label" onClick={floatLabel}>Country *</label>
                                        </div>

                                        <div className={`form-group float-label-input ${errors.phone !== ''?'has-error':''} `}>
                                            <input type="text" name="phone" className="form-control" onChange={handleChange} onBlur={floatLabelUnset} onMouseLeave={floatLabelUnset} required />
                                            <label id="phone" className="control-label" onClick={floatLabel}>Phone *</label>
                                        </div>
                                        <p className="font-normal" style={{color: '#888'}}>*We may use your phone number to contact you regarding any issue with your order.</p>

                                        <br />
                                        <br />

                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>Select Shipping Method</h4>
                                        </div>
                                        <hr />
                                        <ul className="shipping-method">
                                            
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" value="5" type="radio" name="flexRadioDefault" onClick={()=>handleShippingMethod('4', order_info.weightList[0])} id="flexRadioDefault1" defaultChecked={false} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        4 day transit
                                                        <span>${order_info.weightList[0]}</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" value="5" type="radio" name="flexRadioDefault" onClick={()=>handleShippingMethod('2', order_info.weightList[1])} id="flexRadioDefault2" defaultChecked={false} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        2 day transit
                                                        <span>${order_info.weightList[1]}</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" value="5" type="radio" name="flexRadioDefault" onClick={()=>handleShippingMethod('1', order_info.weightList[2])} id="flexRadioDefault3" defaultChecked={false} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                        1 day transit
                                                        <span>${order_info.weightList[2]}</span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                        
                                        <div className="form-group text-center">
                                            <button type="submit" className="btn btn-packiya py-2 px-5">
                                                {isPaymentLoading ? "Loading..." : "Proceed to checkout"}
                                            </button>
                                        </div>

                                    </form>
                                </div>


                            </div>
                            <div className="col-md-4 col-12">
                                <div className="order-summary">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h4 className="mb-0">Order Summary</h4>
                                        <div>Secure Checkout <i className="fa fa-lock"></i></div>
                                    </div>
                                    <hr />

                                    <div className="d-flex align-items-center justify-content-between o-detail">
                                        <div className="left-side">
                                            {order_info.quantity +' x '+ order_info.box_detail.product_name }
                                        </div>
                                        <div className="right-side price">${order_info.total_price}</div>
                                    </div>
                                    <hr />

                                    <div className="d-flex align-items-center justify-content-between o-detail">
                                        <div className="left-side">
                                            Subtotal
                                        </div>
                                        <div className="right-side">${order_info.total_price}</div>
                                    </div>
                                    {
                                        shipping?
                                        <div className="d-flex align-items-center justify-content-between o-detail">
                                            <div className="left-side">
                                                Shipping
                                            </div>
                                            <div className="right-side">${shipping}</div>
                                        </div>
                                        :''
                                    }
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between t-detail">
                                        <h5 className="mb-0">Order Total</h5>
                                        <div className="total-price">${total_amount}</div>
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
export default ShippingPage;