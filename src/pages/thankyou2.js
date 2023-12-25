import React, {useEffect} from "react";
import Header2 from "../layouts/header-2";
import TagManager from 'react-gtm-module';
function ThankyouPage2() {
    useEffect(() => {
        // Trigger GTM event here based on the route change
        TagManager.dataLayer({
            dataLayer: {
              event: 'pageview',
              pagePath: window.location.pathname
            },
        });
      }, []);
    return (
        <div>
            <Header2></Header2>
            <div className="order-page">
                
                <main className="main">
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-12 col-12 mb-3">
                                


                                <div className="text-center" style={{marginTop: '120px'}}>
                                    <div className="shipping-heading mt-3">
                                        <h2>Thank You</h2>
                                    </div>
                                    <hr />
                                    <div id="myForm">
                                        <p>Your quote is submitted successfully. Thank You!</p>
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
export default ThankyouPage2;