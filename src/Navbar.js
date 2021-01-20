import React from "react";
const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img
                    alt="cart-icon"
                    style={styles.cartIcon}
                    src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1611112203~hmac=a98e81515e5bcc7a9b9cfcd731886622"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}

const styles = {
    cartIcon: {
        height: 32
    },
    nav: {
        height: 70,
        background: "#4267b2",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    cartIconContainer: {
        position: "relative"
    },
    cartCount: {
        background: "yellow",
        borderRadius: "50%",
        padding: "4px 8px",
        color: "blue"
    }
};

export default Navbar;