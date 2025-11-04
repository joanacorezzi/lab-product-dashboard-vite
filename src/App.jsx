//Create a basic App component that imports and renders the ProductList component.

import React, { useState } from "react";
import ProductList from "./components/ProductList";
import { Container } from "@mui/material";

//Define a list of product objects in your App component. Each product should have the following properties
function App() {
    const [products, setProducts] = useState([
{ id: 1, name: "Laptop", price:  '$999', inStock: true },
{ id: 2, name: "Phone", price: "$699", inStock: false },
{ id: 3, name: "Tablet", price: '$499', inStock: true },
    ]);

    //Remove a product by id
    const handleRemoveProduct = (id) => {
        setProducts((prevProducts) => 
        prevProducts.filter((product) => product.id !== id)
        );
    };
    return (
        <Container maxWidth='sm'>
           <h1>Product Dashboard</h1>
    <ProductList products={products}  onRemoveProduct={handleRemoveProduct}/> 
        </Container>
    );
        
};

export default App;