import React from 'react';
import Category from './Category';
import classes from './ShopByCategory.module.css';

const categoryList = [
    {
        id: "id1",
        name: "True Wireless Earbuds",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615"
    },
    {
        id: "id2",
        name: "Neckbands",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_small.png?v=1674126581"
    },
    {
        id: "id3",
        name: "Smart Watches",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Smartwatch_96457e1e-dfc6-4818-b6f1-a9a7130d018c_small.png?v=1674127383"
    },
    {
        id: "id4",
        name: "Wireless Headphones",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_6c017fdd-66fd-4d00-a1c9-5fd3f8536ee1_small.png?v=1674041615"
    },
    {
        id: "id5",
        name: "Wireless Speakers",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_1321db16-d197-40bd-be00-d165868168eb_small.png?v=1674126200"
    },
    {
        id: "id6",
        name: "Wired Headphones",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/bassheads-Wired-Headphones_0877b292-85ab-42ed-a055-26e1c246be73_small.png?v=1674041616"
    },
    {
        id: "id7",
        name: "Wired Headphones",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Basshead_small.png?v=1674041616"
    },
    {
        id: "id8",
        name: "Soundbars",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/aavante-bar_small.png?v=1674041615"
    },
    {
        name: "Gaming Headphones",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortals_dbb4a363-0799-44e3-8b67-a275b092c501_small.png?v=1674041615"
    },
    {
        name: "Party Speakers",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/sound_bar_4f111a6a-2482-41c8-87f2-db7e0ee19e69_small.webp?v=1674041615"
    },
    {
        name: "Trimmers",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit_3b8fc3eb-52d6-4519-824f-22873770f747_small.png?v=1674041616"
    },
    {
        name: "Chargers",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Charger_small.png?v=1674041615"
    },
    {
        name: "Power banks",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/powerbank_small.png?v=1674126228"
    },
    {
        name: "Cables",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/cables_cd468fe0-9b41-4eef-b686-0785c6478534_small.png?v=1674041615"
    },
    {
        name: "Car Accesories",
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Car-accessories_07e4e533-2b59-4597-aa3f-110552541f0f_small.png?v=1674041615"
    },
]

const ShopByCategory = () => {
    return (
        <div className={classes.ShopByCategory}>
            <h2>Shop By Category</h2>

            <div className={classes.categories}>
                {
                    categoryList.map((item) => {
                        return (
                            <Category name={item.name} url={item.url}></Category>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShopByCategory