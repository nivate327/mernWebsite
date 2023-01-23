import React from 'react';
import { Placearr } from './Placearr';

const Homep1 = () => {
    return (
        <>
            <div className="services container">
                <h2> Services </h2>
                <p>services provide in below part lot things availble in service part like what services we provide to client like that. <br />
                    and that can play important role in our website.
                </p>

                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card mycard">
                            <div className="serviceIcon">
                                <div className="inside">
                                    <i class="fa-solid fa-cart-shopping sIcon"></i>
                                    <p>ECOM</p>
                                </div>
                            </div>
                            <p>hi hello everyone this is our <br /> responsive e-commarce website <br /> this is very powerful</p>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card mycard">
                            <div className="serviceIcon s2">
                                <div className="inside in2">
                                    <i class="fa-solid fa-laptop sIcon"></i>
                                    <p>WEBSITE</p>
                                </div>
                            </div>
                            <p>hi hello everyone this is our <br /> responsive e-commarce website <br /> this is very powerful</p>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card mycard">
                            <div className="serviceIcon s3">
                                <div className="inside in3">
                                    <i class="fa-brands fa-android sIcon"></i>
                                    <p>APPS</p>
                                </div>
                            </div>
                            <p>hi hello everyone this is our <br /> responsive e-commarce website <br /> this is very powerful</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="weather">
                <div className="overlay">

                </div>

                <div className="dataWeather container">
                    <h2 className='free1'>I am available for freelancing</h2>
                    <p class="mb-3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed aut harum inventore tempore, <br /> quae veniam, voluptatum aperiam aspernatur quod id, animi obcaecati!</p>
                    <a href="/contact.html" class="btn hero-btn hire">VIEW DETAILS</a>
                </div>
            </div>

            

        </>
    )
}

export default Homep1
