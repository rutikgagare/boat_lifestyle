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
    url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/headphone/5/n/s/-original-imagg8mrhpnw2hqd.jpeg?q=70'
  },
  {
    id: "id5",
    name: "boAt Airdopes 381 ",
    category: "Airdopes",
    price: 1299,
    url: 'https://rukminim1.flixcart.com/image/416/416/ksdjma80/headphone/w/c/f/airdopes-381-airdopes-383-boat-original-imag5ygavs8eryqw.jpeg?q=70'
  },
  {
    id: "id6",
    name: "boAt Bassheads 100",
    category: "Earphone",
    price: 399,
    url: 'https://rukminim1.flixcart.com/image/416/416/kqwobrk0/headphone/3/n/b/bassheads-100-boat-original-imag4tgdrpxfh3pk.jpeg?q=70'
  },
  {
    id: "id7",
    name: "boAt Airdopes 192",
    category: "Airdopes",
    price: 1899,
    url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/headphone/l/j/e/-original-imagnfufffaczakh.jpeg?q=70'
  },
  {
    id: "id8",
    name: "boAt Rockerz 510",
    category: "Headphone",
    price: 1599,
    url: 'https://rukminim1.flixcart.com/image/416/416/l3vxbbk0/headphone/w/q/e/-original-imagewuzhfbtygzw.jpeg?q=70'
  },
  {
    id: "id9",
    name: "boAt Rockerz 260",
    category: "Bluetooth",
    price: 1299,
    url: 'https://rukminim1.flixcart.com/image/416/416/l27wtjk0/headphone/d/i/b/-original-imagdm4a8wkxazjs.jpeg?q=70'
  },
  {
    id: "id10",
    name: "boAt BassHeads 220",
    category: "Earphone",
    price: 699,
    url: 'https://rukminim1.flixcart.com/image/416/416/kjiwfbk0-0/headphone/y/p/j/bassheads-220-super-extra-bass-boat-original-imafz2hsuhf9nwws.jpeg?q=70'
  },
  {
    id: "id11",
    name: "boAt Airdopes 131",
    category: "AirDopes",
    price: 1499,
    url: 'https://rukminim1.flixcart.com/image/416/416/kv9urgw0/headphone/z/k/d/airdopes-131-boat-original-imag87pw3zehzswb.jpeg?q=70'
  },
  {
    id: "id12",
    name: "Boat BassHeads 100",
    category: "EarPhone",
    price: 399,
    url: 'https://m.media-amazon.com/images/I/61l+14s5QVL._AC_SX466_.jpg'
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
