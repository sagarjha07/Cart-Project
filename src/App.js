import React from "react";
import Cart from "./cart";
import Navbar from "./Navbar";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 9999,
                    title: "Phone",
                    qty: 1,
                    img: "",
                    id: 1
                }, {
                    price: 2500,
                    title: "Watch",
                    qty: 1,
                    img: "",
                    id: 2
                }, {
                    price: 50000,
                    title: "Laptop",
                    qty: 1,
                    img: "",
                    id: 3
                }
            ]
        }

    }

    handleIncreaseQty = (product) => {
        const {products} = this.state;
        const indexOfProduct = products.indexOf(product);
        products[indexOfProduct].qty += 1;
        this.setState({products: products});
    }

    handleDecreaseQty = (product) => {
        const {products} = this.state;
        const indexOfProduct = products.indexOf(product);
        if (products[indexOfProduct].qty === 0) 
            return;
        products[indexOfProduct].qty -= 1;
        this.setState({products: products});
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;
        const items = products.filter((item) => {
            return item.id !== id;
        }); //this filter function will return an array whose id is not not equal to argument id
        this.setState({products: items});
    }

    getCartCount=()=>{
      const {products}=this.state;
      let count=0;
      products.forEach((product)=>{
        count+=product.qty;
      });
      return count;
    }

    render() {
      const {products}=this.state;
        return (
            <div className="App">
                <Navbar count={this.getCartCount()} />
                <h1>CART</h1>
                <Cart
                  products={products}
                    onIncrease={this.handleIncreaseQty}
                    onDecrease={this.handleDecreaseQty}
                    onDelete={this.handleDeleteProduct}/>
            </div>
        );
    }
}

export default App;
