import React from 'react'

function Room({room}) {
    return (
        <div className="row bs" style={{backgroundColor: '#222222'}}>
        <div className="inner_container row">
            <div className="col-md-4">
                <img src={room.imageurls[0]} className="small_img" alt="" />
            </div>
            <div className="col-md-7 rooms_details">
            <div className="room_details">
                <h1>{room.name}</h1>
                <h3>{room.address}</h3>
                <p><b>Max Count</b>: {room.maxcount}</p>
                <p><b>Phone Number</b>: {room.phonenumber}</p>
                <p><b>Type</b>: {room.type}</p>
            </div>

                <div className="bottom_price_view">
                <h4 className="price">{room.price}</h4>
                <div>
                    <button className="btn btn-primary">View Details</button>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Room
