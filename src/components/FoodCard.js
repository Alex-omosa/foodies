import React from 'react';

function FoodCard({ food }) {
  console.log(food);
  return <div>{food.name}</div>;
}

export default FoodCard;
