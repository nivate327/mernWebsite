import React from 'react'
import { Placearr } from './Placearr'

const Latestwork = () => {
    return (
        <>
            <div className="latest">
                <div className="overlay">

                </div>


                <div className="container lat">
                    <h3>Latest Work</h3>

                    <div className="row issue">

                        {Placearr.map((val, index) => {
                            return (
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 issue">
                                    <div className="project">
                                        <div className="icons" style={{background:'#EAFDFC'}}>
                                            <i className={`fa-solid ${val.icon}`}></i>
                                        </div>
                                        <p className="text">{val.text}</p>
                                        <p className="des">{val.about}</p>

                                        <div className="visit">
                                            <a href={val.link}> visit </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Latestwork
