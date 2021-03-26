import React from 'react'


function Hero() {
    
    return (
        <section className="hero_section">
            <div className="hero_container">
                <div className="hero_wrap">
                <div className="form_container">
                    <div className="form_title">
                        <h1>Find places to stay in Philippines on Airbnb</h1>
                        <p>Discover entire homes and private rooms perfect for any trip</p>
                    </div>
                    <form action="">
                        <div className="input_wrap">
                            <div className="input_con">
                                <label htmlFor="">LOCATION</label>
                                <input type="text" placeholder="Philippines"/>
                            </div>
                        </div>
                        <div className="input_wrap">
                            <div className="input_con">
                                <label htmlFor="">CHECK IN</label>
                                <input placeholder="Add Date" type="text"  id="date"/>
                            </div>
                            <div className="input_con">
                                <label htmlFor="">CHECK OUT</label>
                                <input placeholder="Add Date" type="text"  id="date"/>
                            </div>
                        </div>
                        <div className="input_wrap">
                            <div className="input_con">
                                <label htmlFor="">ADULTS</label>
                                <select>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className="input_con">
                                <label htmlFor="">CHILDREN</label>
                                <select>
                                    <option value="">0</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            
                        </div>
                        <div className="btnsearch_con">
                                <button className="btnsearch">Search</button>
                            </div>
                    </form>
                    
                </div>
                <div className="hero_discount">
                        <p>Earn up to P26,967/month hosting your place in Nueva Ecija</p>
                        <div className="become_host">
                            <p>Become a host</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
