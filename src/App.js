import './App.css';
import React, { useState } from 'react';
import Nav from './Components/Home/Nav';
import ProductSection from './Components/Products/ProductSection';
import Cart from './Components/Carts/Cart';
import CartProvider from './store/CartProvider';

const itemList = [
  {
    id: "id1",
    name: "Airdopes 115",
    category: "Airdopes",
    price: 1099,
    url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-main1_1875x.png?v=1655368638'
  },
  {
    id: "id2",
    name: "boAt Rockerz 410",
    category: "Headphone",
    price: 1599,
    url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-410-black_1875x.png?v=1613457276'
  },
  {
    id: "id3",
    name: "boAt Rockerz 450 Pro",
    category: "Headphone",
    price: 1500,
    url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img3_600x.png?v=1616562632'
  },
  {
    id: "id4",
    name: "boAt Airdopes 161",
    category: "Headphone",
    price: 1099,
    url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_fa1c6ec3-93b7-443e-ae82-d5eeb34258f8_600x.png?v=1641206192'
  },
  {
    id: "id5",
    name: "boAt Airdopes 381 ",
    category: "Airdopes",
    price: 1299,
    url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3c53a1e3-bffe-4c6d-b102-cc409c1bfe71_600x.png?v=1625045117'
  },
  {
    id: "id6",
    name: "boAt Bassheads 100",
    category: "Earphone",
    price: 399,
    url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bassheads-100-make-in-india-orange_1875x.png?v=1613743116'
  },
  {
    id: "id7",
    name: "boAt Airdopes 383 ",
    category: "Airdopes",
    price: 1899,
    url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-383-black_600x.png?v=1613457326'
  },
  {
    id: "id8",
    name: "boAt Rockerz 510",
    category: "Headphone",
    price: 1599,
    url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5d5377dc-d3dd-48ba-8ec9-2a1630146d8d_600x.png?v=1625045983'
  },
  {
    id: "id9",
    name: "boAt Rockerz 260",
    category: "Bluetooth",
    price: 1299,
    url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_e0d541c5-72de-4f54-a19b-1c324082742a_600x.png?v=1654195093'
  },
  {
    id: "id10",
    name: "boAt BassHeads 220",
    category: "Earphone",
    price: 699,
    url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Orange_05fdf488-bd1f-437e-8d13-dc428e957628_2188x.png?v=1660654083'
  },
  {
    id: "id11",
    name: "boAt Airdopes 131",
    category: "AirDopes",
    price: 1499,
    url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Red_d8ee4785-21ae-4fee-943e-d5c571131ae8_1300x.png?v=1660654082'
  },
  {
    id: "id12",
    name: "Boat BassHeads 100",
    category: "EarPhone",
    price: 399,
    url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c3d0fbbd-9479-4351-bf04-91136da2ae91_600x.png?v=1656750183'
  }
];

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const closeCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider className="App">
        <Nav showCart={showCartHandler}></Nav>
        <ProductSection items={itemList}></ProductSection>
        {showCart && <Cart onClose={closeCartHandler}></Cart>}
    </CartProvider>

  );
}

export default App;
