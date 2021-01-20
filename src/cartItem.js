import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 1009,
            title: "Phone",
            qty: 1,
            img: ""
        }
    }
    render() {
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{
                        fontSize: 25
                    }}>{title}</div>
                    <div style={{
                        color: '#777'
                    }}>Rs. {price}</div>
                    <div style={{
                        color: '#777'
                    }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {buttons} */}
                        <img
                            alt=""
                            className="action-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1611104252~hmac=fa4e0e4ad3f532f143ba319a541f16ac"/>
                        <img
                            alt=""
                            className="action-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/659/659892.svg?token=exp=1611104324~hmac=1456beb7472a1cbbd1e917d364110c97"/>
                        <img
                            alt=""
                            className="action-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1611104361~hmac=7c1c941c4cd11adcd7eab851d134a4de"/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;