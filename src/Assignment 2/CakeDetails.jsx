import React from "react";
import './CakeDetails.css';
import BestBirthday from '../ImagesforWeb/BestBirthday.jpg'
import customcake from '../ImagesforWeb/download (1).jpeg'
import fruitcake from '../ImagesforWeb/applecake.jpg';
import redvelvet from '../ImagesforWeb/redvelvet.jpg'
import vanillacake from '../ImagesforWeb/vanillac.jpg'
import carrotcake from '../ImagesforWeb/carrotcakes.jpeg'
import tiramisu from '../ImagesforWeb/tiramisu.jpg'
import strawberry from '../ImagesforWeb/strawberrycake.jpg'
import lemon from '../ImagesforWeb/lemon-cake-11.webp'
import peanut from '../ImagesforWeb/bdayc2.jpg'

// Expanded list of cakes
const cakes = [
  {
    name: "Chocolate Fudge Cake",
    image: BestBirthday,
    description: "Rich and moist chocolate cake topped with a creamy fudge icing.",
    price: "$25.99",
    rating: 4.8,
    reviews: 120,
  },
  {
    name: "Red Velvet Cake",
    image: redvelvet,
    description: "A classic red velvet cake with smooth cream cheese frosting.",
    price: "$29.99",
    rating: 4.9,
    reviews: 150,
  },
  {
    name: "Vanilla Buttercream Cake",
    image: vanillacake,
    description: "Light and fluffy vanilla cake layered with rich buttercream.",
    price: "$22.99",
    rating: 4.7,
    reviews: 200,
  },
  {
    name: "Carrot Cake",
    image: carrotcake,
    description: "Moist carrot cake with hints of cinnamon, covered in cream cheese frosting.",
    price: "$26.99",
    rating: 4.6,
    reviews: 180,
  },
  {
    name: "Lemon Meringue Cake",
    image: lemon,
    description: "Tangy lemon cake with fluffy meringue topping, perfect for citrus lovers.",
    price: "$28.99",
    rating: 4.7,
    reviews: 95,
  },
  {
    name: "Strawberry Shortcake",
    image: strawberry,
    description: "Layers of light sponge cake with fresh strawberries and whipped cream.",
    price: "$24.99",
    rating: 4.8,
    reviews: 110,
  },
  {
    name: "Peanut Butter Chocolate Cake",
    image: peanut,
    description: "A decadent chocolate cake with peanut butter frosting and a chocolate ganache.",
    price: "$32.99",
    rating: 4.9,
    reviews: 145,
  },
  {
    name: "Tiramisu Cake",
    image: tiramisu,
    description: "Coffee-flavored cake with mascarpone cream, inspired by the classic Italian dessert.",
    price: "$30.99",
    rating: 4.8,
    reviews: 200,
  },
];

const CakeDetails = () => {
  return (
    <div className="cake-details-page">
      <h1>Premium Cakes Collection</h1>
      <div className="cakes-list">
        {cakes.map((cake, index) => (
          <div className="cake-card" key={index}>
            <img src={cake.image} alt={cake.name} className="cake-image" />
            <h2>{cake.name}</h2>
            <p className="cake-description">{cake.description}</p>
            <div className="cake-price">
              <span>{cake.price}</span>
            </div>
            <div className="cake-rating">
              <span>Rating: {cake.rating} ({cake.reviews} reviews)</span>
            </div>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeDetails;

