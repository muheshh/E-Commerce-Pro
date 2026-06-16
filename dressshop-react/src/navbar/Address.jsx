import React from "react";

const Address = ({ address }) => {
    return (
        <div className="saved-address">

            <h2>My Address</h2>

            <div className="address-card">

                <h3>{address.name}</h3>

                <p>{address.phone}</p>

                <p>{address.address}</p>

                <p>{address.city}</p>

                <p>{address.state}</p>

                <p>{address.pincode}</p>

            </div>

        </div>
    );
};

export default Address;