import React, { useState, useEffect } from "react";
import Header2 from "../layouts/header-2";

function AboutUs() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        fetch("https://app.packiya.com/api/page?slug=about-us")
            .then(response => {
                return response.json()
            })
            .then(res => {
                setData(res.data);
            })
    }


    return (
        <div className="page-style">
            <Header2></Header2>
            <main className="main mt-4">
                <section className="small-banner">
                    <div className="container">
                        <h2 className="mb-0">About Us</h2>
                    </div>
                </section>
                <section className="container page-content my-5">
                    {
                        data?<div dangerouslySetInnerHTML={{ __html: data.content }} />:''
                    }
                </section>
            </main>
        </div >
    );
}
export default AboutUs;