import React from "react";

const Orders = ({ recentOrders }) => {
    return (
        <div className="recent-orders">

            <h2>My Orders</h2>

            {recentOrders.map((order) => (

                <div
                    key={order.id}
                    className="order-card"
                >

                    <h3>{order.product}</h3>

                    <p>{order.price}</p>

                </div>

            ))}

        </div>
    );
};

export default Orders;