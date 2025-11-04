import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Card, CardContent, Button } from '@mui/material';

//this component displays individual product details
function ProductCard({ product, onRemove }) {
  const { id, name, price, inStock } = product;
  
  //apply conditional styling based on product availability 
  const cardClassName = styles.card;
  const contentClassName = inStock ? '' : 'outOfStockClass';
 
  return (
    //use the fragments 
    <Card className={cardClassName}>
    <CardContent className={contentClassName}> 
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>{inStock ? 'In stock' : 'Out of stock'} </p>
      <Button 
      variant='contained'
      sx={{ marginTop: '8px'}} 
      onClick={() => onRemove(id)}   
      >
Remove
      </Button>
   </CardContent>
   </Card>
  );
}

export default ProductCard;
