import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import HeaderCat from "../layouts/header-cat";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TagManager from 'react-gtm-module';
import ReactPaginate from 'react-paginate';
import Faqs from "../partials/faqs";
import { isMobile } from 'react-device-detect';



function Categories() {
    const { slug } = useParams();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cat, setCat] = useState([]);
    const [page, setPage] = useState(false);
    const [pageCount, setPageCount] = useState(null);
    const [faqs, setFaqs] = useState(null);
    const [isCat, setCatToggle] = useState(false);
    useEffect(()=>{

        TagManager.dataLayer({
            dataLayer: {
              event: 'pageview',
              pagePath: window.location.pathname
            },
        });

        fetch('https://app.packiya.com/api/categories-list?slug=' + slug + '&page='+ page + '&q=')
        .then(response => response.json())
        .then(res => {
            setCategories(res.data.categories);
            setProducts(res.data.products);
            setPageCount(res.data.pageCount);
            setCat(res.data.category);
            setFaqs(res.data.faqs);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        });
    },[slug, page])

    const handlePageClick = (event) => {
        setPage(event.selected + 1);
    };

    const toggleCat = () => {
        setCatToggle(!isCat);
    }



    return (
        <>
            <HeaderCat></HeaderCat>
            <div className="main mt-3">
                <main className="category-page">
                    <div>
                        <section className="list-packaging-items">
                            <div className="container">
                                {
                                    isMobile?
                                    <div className="cat-list-mobile btn btn-primary mb-3" onClick={toggleCat}>View Categories</div>
                                    :''
                                }
                                <div className="row list-items-detail mx-0">
                                    <div className="col-md-3 right-list-items">

                                        

                                        <div className={`accordion ${isMobile && !isCat?'d-none':''} `} id="accordionExample">
                                        {
                                            categories.map((category)=>{
                                                    return <div className="accordion-item" key={category.id}>
                                                        <h2 className="accordion-header">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                                data-bs-target={`#collapse-${category.id}`} aria-expanded="false" aria-controls="collapseOne">
                                                                {category.name}
                                                            </button>
                                                        </h2>
                                                        {
                                                            category.items && category.items.length > 0 ?
                                                            category.items.map((item)=>{
                                                                return <div id={`collapse-${category.id}`} className="accordion-collapse collapse show"
                                                                    data-bs-parent="#accordionExample" key={item.slug}>
                                                                    <div className="accordion-body">
                                                                        <ul className="accordian-detail">
                                                                            <li><Link to={'/categories/'+item.slug}>{item.name}</Link></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            })
                                                            :
                                                            
                                                            ''
                                                        }
                                                        
                                                    </div>
                                                })
                                            }

                                        </div>
                                        
                                    </div>
                                    <div className="col-md-9 left-list-items">
                                        <h1 className="title"> CUSTOM PACKAGING BOXES</h1>
                                        <div className="list">
                                            {
                                                products && products.length > 0 ?
                                                products.map((product)=>{
                                                    return <div className="list-items" key={product.id}>
                                                                <div className="card h-100">
                
                                                                    <div className="card-img">
                                                                        <Link to={'/product/'+product.slug}>
                                                                            <LazyLoadImage className="card-img-top" src={'https://app.packiya.com' + product.description_image_url} alt="" />
                                                                        </Link>
                                                                    </div>
                                                                    
                                                                    <div className="card-body text-center">
                                                                        <h5 className="card-title">{product.product_display_name}</h5>
                                                                        <Link to={'/product/'+product.slug} className="btn btn-primary btn-round">View Product</Link>
                                                                    </div>
                
                                                                </div>
                                                            </div>
                                                })
                                                :
                                                <p>No products found!</p>
                                            }
                                            
                                        </div>

                                        <div className="pagination-wrap mt-5">
                                        <ReactPaginate
                                            breakLabel="..."
                                            nextLabel=">"
                                            onPageChange={handlePageClick}
                                            pageRangeDisplayed={5}
                                            pageCount={pageCount}
                                            previousLabel="<"
                                            renderOnZeroPageCount={null}
                                            containerClassName="pagination"
                                            pageClassName="page-item"
                                            pageLinkClassName="page-link"
                                            activeClassName="active"
                                            previousClassName="page-link"
                                            nextClassName="page-link"
                                        />    
                                        </div>    

                                        {
                                            cat?
                                            <div className="list-custom-package">
                                                <h2 className="title">{cat.name}</h2>
                                                <div dangerouslySetInnerHTML={{ __html: cat.description }} />
                                            </div>
                                            :''
                                        }    
                                        
                                        
                                        <div className="faq-section bg-light-gray" id="faq-section">
                                            {faqs && faqs.length > 0 && (
                                                <Faqs results={faqs}></Faqs>
                                            )}
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>

    );
}
export default Categories;