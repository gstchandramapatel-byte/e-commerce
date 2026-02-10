"use client";

import "./page.css";

export default function Home() {
  // 🔹 Static Product Data (DB se nahi aa raha)
  const products = [
    {
      id: 1,
      name: "Aashirvaad Atta",
      price: 349,
      quantity: "5 kg",
      image: "https://static.vecteezy.com/system/resources/thumbnails/050/595/124/small/red-plastic-shopping-basket-with-variety-of-grocery-products-front-view-isolate-on-transparency-background-png.png"
    },
    {
      id: 2,
      name: "Fortune Oil",
      price: 179,
      quantity: "1 L",
      image: "https://img.freepik.com/free-psd/full-grocery-cart-loaded-with-fresh-foods-products_9975-132236.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 3,
      name: "Potato",
      price: 45,
      quantity: "1 kg",
      image: "https://i.pinimg.com/474x/1e/67/2b/1e672b0d0caf2af8bcd96cccc0aa67a7.jpg"
    },
    {
      id: 4,
      name: "Tomato",
      price: 30,
      quantity: "1 kg",
      image: "https://www.shutterstock.com/image-photo/cartoon-artistic-image-plastic-grocery-260nw-2724862813.jpg"
    },
    {
      id: 5,
      name: "Tomato 02 ",
      price: 50,
      quantity: "1 kg",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjnyBSkV_72_19uM4MMu7dFhiQYWFrGVbYg&s"
    },
    {
      id: 6,
      name: "Tomato 07",
      price: 60,
      quantity: "2 kg",
      image: "https://static.tripzilla.ph/media/104614/conversions/korean-grocery-items-w1024.webp"
    },
    {
      id: 7,
      name: "Tomato 03",
      price: 90,
      quantity: "2.5 kg",
      image: "https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-shopping-and-buying-products-at-grocery-store-png-image_13091652.png"
    },
    {
      id: 8,
      name: "Tomato 04",
      price: 20,
      quantity: "0.5 kg",
      image: "https://www.shutterstock.com/image-photo/shopping-cart-full-fresh-groceries-260nw-2149145415.jpg"
    },
    {
      id: 9,
      name: "Tomato 05",
      price: 30,
      quantity: "1 kg",
      image: "https://static.vecteezy.com/system/resources/thumbnails/034/078/501/small/shopping-cart-full-of-product-in-grocery-store-generative-ai-photo.jpg"
    },
    {
      id: 10,
      name: "Tomato 07",
      price: 150,
      quantity: "5 kg",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLHfM-ztWOzoSqjRwNLvYAhkzqpoj1Fdn4Q&s"
    }
    // {
    //   id: 11,
    //   name: "Tomato 09",
    //   price: 180,
    //   quantity: "4.5 kg",
    //   image: "https://static.vecteezy.com/system/resources/thumbnails/034/078/501/small/shopping-cart-full-of-product-in-grocery-store-generative-ai-photo.jpg"
    // },
    // {
    //   id: 12,
    //   name: "Tomato 12",
    //   price: 200,
    //   quantity: "6 kg",
    //   image: "https://static.vecteezy.com/system/resources/thumbnails/034/078/501/small/shopping-cart-full-of-product-in-grocery-store-generative-ai-photo.jpg"
    // }
  ];

  return (
    <div className="container">
      <h1>Blinkit – Online Grocery Delivery</h1>
      <p className="tagline">Groceries delivered in minutes 🚀</p>

      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3 className="productname">{product.name}</h3>
            <p>{product.quantity}</p>
            <strong>₹{product.price}</strong>
            <button>Order Product</button>
          </div>
        ))}
      </div>

      
    </div>
  );
}
