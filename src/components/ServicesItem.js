import React from 'react'

function ServicesItem(props) {
    return (
        <div className="services_con">
            <div className="services_img">
                <i class={props.srvcimage}></i>
            </div>
            <div className="services_decs">
                <h3>{props.srvctitle}</h3>
                <p>{props.srvcdesc}</p>
            </div>

        </div>
    )
}

export default ServicesItem
