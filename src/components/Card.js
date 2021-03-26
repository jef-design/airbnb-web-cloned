import React from 'react'

function Card(props) {
    return (
        <div className="col">
                    <div className="col_img">
                        <img src={props.guestrent} alt=""/>
                    </div>
                    <div className="rating">
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                    <div className="col_desc">
                        {props.message}{props.bookdesc}
                        <div className="book_price">
                        {props.bookprice}
                        </div>
                    </div>
                    <div className="guest_con">
                        <div className="guest_img">
                            <img src={props.guestpic} alt=""/>
                        </div>
                        <div className="guest_desc">{props.guestname} <br/> {props.country}</div>
                    </div>
                </div>
    )
}

export default Card
