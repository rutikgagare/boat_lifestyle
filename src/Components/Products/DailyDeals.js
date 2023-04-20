import React from 'react';
import Product from './Product';
import classes from './DailyDeals.module.css';

const itemList = [
    {
        id: "id1",
        name: "Airdopes 131",
        price: 999,
        category: "Airdopes",
        url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103"
    },
    {
        id: "id2",
        name: "Storm Call",
        price: 1999,
        category: "Smart Watches",
        url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-3_e934902f-345b-4cc4-80b9-9ef3d77a1f34_600x.png?v=1661272676"
    },
    {
        id: "id3",
        name: "boAt Rockerz 235 V2 ",
        price: 799,
        category: "Bluetooth",
        url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_600x.png?v=1625045114"
    },
    {
        id: "id4",
        name: "boAt Airdopes 115",
        price: 1099,
        category: "Airdopes",
        url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-main2_600x.png?v=1655368638"
    },
    {
        id: "id5",
        name: "boAt Rockerz 235 Pro",
        price: 999,
        category: "Bluetooth",
        url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2_53c3483e-38d0-4a88-a8e0-b75fe5b23584_600x.png?v=1648466727"
    }
];

function DailyDeals() {
    return (
        <div className={classes.dailyDeals}>
            <h2>Daily Deals</h2>
            <div className={classes.deals}>
                {
                    itemList.map((item) => {
                        return (<Product name={item.name} price={item.price} category={item.category} url={item.url}></Product>);
                    })
                }
            </div>
        </div>
    );
}

export default DailyDeals;