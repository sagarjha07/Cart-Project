import React from "react";

const CartItem = (props) => {
    const {price, title, qty, id,img} = props.product;
    const {product, onIncrease, onDecrease, onDelete} = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img alt="" style={styles.image} src={img} />
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
                        src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1611104252~hmac=fa4e0e4ad3f532f143ba319a541f16ac"
                        onClick={() => onIncrease(product)}/>
                    <img
                        alt=""
                        className="action-icons"
                        src="https://www.flaticon.com/svg/vstatic/svg/659/659892.svg?token=exp=1611104324~hmac=1456beb7472a1cbbd1e917d364110c97"
                        onClick={() => onDecrease(product)}/>
                    <img
                        alt=""
                        className="action-icons"
                        src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1611104361~hmac=7c1c941c4cd11adcd7eab851d134a4de"
                        onClick={() => onDelete(id)}/>
                </div>
            </div>
        </div>
    );
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

// increaseQuantity = () => {     // ---->setstate form 1-->this form uses
// shallow merging     //both form uses batching concept but in form 2 if we
// call functions thrice value got incremented by 3     //whereas in form 1
// value got incremented by one only     // this.setState({     //
// qty:this.state.qty+1     // });     //setState do not perform batching when
// we use ajax and promises     //since using AJAX or Promises make call
// synchronous     // if previous state required ----->setstate form     //
// 2-->this form also uses shallow merging     this.setState((prevState) => {
//   return {             qty: prevState.qty + 1         }     },()=>{  //use
// this call back to get state updated accordingly         //sice set state is
// asynchronous         console.log(this.state);     });     //setState call is
// asyncronous } decreaseQuantity = () => {     if (this.state.qty === 0)
//  return;     this.setState({         qty: this.state.qty - 1 }); }