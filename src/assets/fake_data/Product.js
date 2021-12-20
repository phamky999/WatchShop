const img_1 = require("../../assets/images/products/product_1.jpg").default;
const img_2 = require("../../assets/images/products/product_2.jpg").default;
const img_3 = require("../../assets/images/products/product_3.jpg").default;
const img_4 = require("../../assets/images/products/product_4.jpg").default;
const img_5 = require("../../assets/images/products/product_5.jpg").default;
const img_6 = require("../../assets/images/products/product_6.jpg").default;
const img_7 = require("../../assets/images/products/product_7.jpg").default;
const img_8 = require("../../assets/images/products/product_8.jpg").default;
const img_9 = require("../../assets/images/products/product_9.jpg").default;
const img_10 = require("../../assets/images/products/product_10_2.jpg").default;
const img_11 = require("../../assets/images/products/product_11.jpeg").default;
const img_12 = require("../../assets/images/products/product_12_1.jpg").default;
const img_13 = require("../../assets/images/products/product_13_1.jpg").default;
const img_14 = require("../../assets/images/products/product_1.jpg").default;
const img_15 = require("../../assets/images/products/product_15_2.jpg").default;
const img_16 = require("../../assets/images/products/product_16_1.jpg").default;
const img_17 = require("../../assets/images/products/product_17_1.png").default;
const img_18 = require("../../assets/images/products/product_18_1.jpg").default;
const img_19 = require("../../assets/images/products/product_19_1.jpg").default;
const img_20 = require("../../assets/images/products/product_20_1.png").default;
const img_21 = require("../../assets/images/products/product_21_1.jpg").default;
const img_22 = require("../../assets/images/products/product_22_1.jpg").default;
const img_23 = require("../../assets/images/products/product_23_1.jpg").default;

const img_icon_1 =
  require("../../assets/images/products/icons/lighting.png").default;
const img_icon_2 =
  require("../../assets/images/products/icons/audio.png").default;
const img_icon_3 =
  require("../../assets/images/products/icons/musical-note.png").default;

export const DUMY_PRICE_FILTER = [
  {
    id: 1,
    priceStart: 0,
    priceEnd: 200,
  },
  {
    id: 2,
    priceStart: 200,
    priceEnd: 500,
  },
  {
    id: 3,
    priceStart: 500,
    priceEnd: 1000,
  },
  {
    id: 4,
    priceStart: 1000,
    priceEnd: undefined,
  },
];
export const DUMY_CATEGORIES = [
  {
    id: 1,
    name: "Fire-Boltt Task",
  },
  {
    id: 2,
    name: "Flash Watch",
  },
  {
    id: 3,
    name: "Storm Smartwatch",
  },
  {
    id: 4,
    name: "Watch Enigma",
  },
];

export const DUMY_COLORS = [
  {
    id: 1,
    name: "DarkSlateGrey",
    color: "#2f4f4f",
  },
  {
    id: 2,
    name: "GoldenRod",
    color: "#daa520",
  },
  {
    id: 3,
    name: "LightBlue",
    color: "#add8e6",
  },
  {
    id: 4,
    name: "LightCoral",
    color: "#f08080",
  },
  {
    id: 5,
    name: "LightPink",
    color: "#ffb6c1",
  },
  {
    id: 6,
    name: "LightSalmon",
    color: "#ffa07a",
  },
  {
    id: 7,
    name: "LightSkyBlue",
    color: "#87cefa",
  },
  {
    id: 8,
    name: "LightSlateGray",
    color: "#778899",
  },
  {
    id: 9,
    name: "Linen",
    color: "#faf0e6",
  },
  {
    id: 10,
    name: "MediumAquaMarine",
    color: "#66cdaa",
  },
  {
    id: 11,
    name: "MintCream",
    color: "#f5fffa",
  },
  {
    id: 12,
    name: "OldLace",
    color: "#fdf5e6",
  },
  {
    id: 13,
    name: "PaleGoldenRod",
    color: "#eee8aa",
  },
  {
    id: 14,
    name: "PaleTurquoise",
    color: "#afeeee",
  },
  {
    id: 15,
    name: "PeachPuff",
    color: "#ffdab9",
  },
  {
    id: 16,
    name: "Silver",
    color: "#c0c0c0",
  },
  {
    id: 17,
    name: "SteelBlue",
    color: "#4682b4",
  },
  {
    id: 18,
    name: "Tan",
    color: "#d2b48c",
  },
];

export const DUMY_MATERIALS = [
  {
    id: 1,
    name: "Chiffon",
  },
  {
    id: 2,
    name: "Cotton",
  },
  {
    id: 3,
    name: "Crep",
  },
  {
    id: 4,
    name: "Denim",
  },
  {
    id: 5,
    name: "Felt",
  },
  {
    id: 6,
    name: "Leather",
  },
  {
    id: 7,
    name: "Nylon",
  },
  {
    id: 8,
    name: "Velvet",
  },
  {
    id: 9,
    name: "Woolen",
  },
];
export const DUMY_SIZE = [
  {
    id: 1,
    name: "M",
  },
  {
    id: 2,
    name: "L",
  },
  {
    id: 3,
    name: "XL",
  },
  {
    id: 4,
    name: "XXL",
  },
];
export const DUMY_TAG = [
  {
    id: 1,
    name: "Dress",
  },
  {
    id: 2,
    name: "Shirt",
  },
  {
    id: 3,
    name: "T-Shirt",
  },
];
/*
{
              title: "Smartwatch - Bip U",
              path: "/products/1",
            },
            {
              title: "Smartwatch - Bip U Pro",
              path: "/products/2",
            },
            {
              title: "Smartwatch - GTR 2 LTE",
              path: "/products/3",
            },
            {
              title: "Smartwatch - GTR 2E",
              path: "/products/4",
            },
            {
              title: "Smartwatch - GTR 2 Mini",
              path: "/products/5",
            },
            {
              title: "Smartwatch - Pop",
              path: "/products/6",
            },
            {
              title: "Smartwatch - T-Rex Pro",
              path: "/products/7",
            },
            {
              title: "Smartwatch - Zepp E (Round)",
              path: "/products/8",
            },

*/
export const DUMY_PRODUCT = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    saleOf: "10%",
    quantity: 99,
    dateCreated: "08/21/2021",
    image: img_1,
    slideImg: [img_1, img_11, img_13, img_15, img_19],
    link: "/products/1",
    descript: `<h3>Product Descriptions</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
        <ul>
        <li>
        <div>
        <img alt="desc_icon" src=${img_icon_1} />
        </div>
        <div>
        <h6>Playtime 20+ Hours</h6>
        <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
        </div>
        </li>
        <li>
        <div>
        <img alt="desc_icon" src=${img_icon_2} />
        </div>
        <div>
        <h6>HD Noise Cancelling</h6>
        <p>Vivamus finibus vel mauris ut vehicula.</p>
        </div>
        </li>
        <li>
        <div>
        <img alt="desc_icon" src=${img_icon_3} />
        </div>
        <div>
        <h6>Dolby Atmos Sound</h6>
        <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
        </div>
        </li>
        </ul>`,
    categories: [1, 3, 4],
    colors: [1, 2, 3, 5, 7, 9, 12, 14, 17],
    materials: [2, 4, 6, 8],
    sizes: [1, 2, 3, 4],
    tags: [1, 2, 3],
  },
  {
    id: 2,
    name: "Bip U Pro",
    price: 100,
    saleOf: "10%",
    quantity: 99,
    dateCreated: "08/21/2021",
    image: img_2,
    slideImg: [img_2, img_12, img_22, img_23, img_16],
    link: "/products/2",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 2, 4],
    colors: [2, 4, 5, 6, 8, 10],
    materials: [1, 3, 7, 9],
    sizes: [1, 2, 3, 4],
    tags: [1, 2, 3],
  },
  {
    id: 3,
    name: "GTR 2 LTE",
    price: 150,
    saleOf: "15%",
    quantity: 5,
    dateCreated: "05/21/2021",
    image: img_3,
    slideImg: [img_3, img_17, img_18, img_20, img_21],
    link: "/products/3",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [2, 4],
    colors: [1, 2, 3, 4],
    materials: [7, 8, 9],
    sizes: [1],
    tags: [1],
  },
  {
    id: 4,
    name: "GTR 2 E",
    price: 500,
    saleOf: "5%",
    quantity: 99,
    dateCreated: "10/21/2021",
    image: img_4,
    slideImg: [img_4, img_13, img_14, img_18, img_19],
    link: "/products/4",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 2, 3, 4],
    colors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15],
    materials: [1, 2, 3, 7, 9],
    sizes: [1, 2, 3, 4],
    tags: [1, 2, 3],
  },
  {
    id: 5,
    name: "GTR 2 Mini",
    price: 250,
    saleOf: "0%",
    quantity: 50,
    dateCreated: "08/25/2021",
    image: img_5,
    slideImg: [img_5, img_16, img_17, img_12, img_11],
    link: "/products/5",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 2, 4],
    colors: [18, 17, 16, 15, 14, 10, 1],
    materials: [7, 9],
    sizes: [1, 2, 3],
    tags: [1],
  },
  {
    id: 6,
    name: "Pop",
    price: 400,
    saleOf: "0%",
    quantity: 20,
    dateCreated: "08/02/2021",
    image: img_6,
    slideImg: [img_6, img_10, img_11, img_21, img_20],
    link: "/products/6",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 2],
    colors: [6, 8, 10, 13, 14, 15, 16, 18],
    materials: [1, 2, 6],
    sizes: [2, 3, 4],
    tags: [3],
  },
  {
    id: 7,
    name: "T-Rex Pro",
    price: 777,
    saleOf: "30%",
    quantity: 99,
    dateCreated: "07/21/2021",
    image: img_7,
    slideImg: [img_7, img_14, img_21, img_11, img_18],
    link: "/products/7",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [2, 3],
    colors: [13, 2, 4, 5, 8, 11],
    materials: [1, 7, 9],
    sizes: [1, 2, 4],
    tags: [2, 3],
  },
  {
    id: 8,
    name: "Zepp E (Round)",
    price: 800,
    saleOf: "10%",
    quantity: 22,
    dateCreated: "06/20/2021",
    image: img_8,
    slideImg: [img_8, img_16, img_23, img_17, img_22],
    link: "/products/8",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 2, 4],
    colors: [2, 4, 5, 6, 8, 10, 15, 18, 14, 16],
    materials: [1, 9],
    sizes: [2, 3],
    tags: [2],
  },
  {
    id: 9,
    name: "Product 9",
    price: 90,
    saleOf: "40%",
    quantity: 99,
    dateCreated: "05/20/2021",
    image: img_9,
    slideImg: [img_9, img_18, img_22, img_21, img_15],
    link: "/products/9",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [4],
    colors: [1, 3, 2, 4, 5, 6, 8, 10, 15, 18, 14, 16],
    materials: [1, 4, 5, 9],
    sizes: [2, 1, 3],
    tags: [1, 2],
  },
  {
    id: 10,
    name: "Product 10",
    price: 900,
    saleOf: "15%",
    quantity: 50,
    dateCreated: "11/20/2021",
    image: img_10,
    slideImg: [img_10, img_20, img_22, img_21, img_15],
    link: "/products/10",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 4],
    colors: [1, 6, 8, 10, 15, 18, 14, 16],
    materials: [1, 5, 9],
    sizes: [2, 1, 3],
    tags: [2],
  },
  {
    id: 11,
    name: "Bip U",
    price: 450,
    saleOf: "25%",
    quantity: 50,
    dateCreated: "07/20/2021",
    image: img_1,
    slideImg: [img_1, img_16, img_18, img_23, img_13],
    link: "/products/11",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 2],
    colors: [18, 17, 15, 12, 11, 1, 5, 7, 9],
    materials: [6, 7, 8],
    sizes: [3],
    tags: [3],
  },
  {
    id: 12,
    name: "Product 12",
    price: 1200,
    saleOf: "5%",
    quantity: 99,
    dateCreated: "10/21/2021",
    image: img_5,
    slideImg: [img_5, img_11, img_13, img_15, img_19],
    link: "/products/12",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [4],
    colors: [1, 2, 17],
    materials: [7, 6],
    sizes: [1, 2, 3, 4],
    tags: [3],
  },
  {
    id: 13,
    name: "Product 13",
    price: 950,
    saleOf: "20%",
    quantity: 99,
    dateCreated: "08/30/2021",
    image: img_8,
    slideImg: [img_8, img_12, img_22, img_23, img_16],
    link: "/products/13",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [2, 4],
    colors: [2, 8, 10],
    materials: [1, 9],
    sizes: [1, 2, 3, 4],
    tags: [1],
  },
  {
    id: 14,
    name: "Product 14",
    price: 800,
    saleOf: "10%",
    quantity: 50,
    dateCreated: "09/02/2021",
    image: img_2,
    slideImg: [img_2, img_14, img_1, img_8, img_16],
    link: "/products/14",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [3],
    colors: [2, 4, 6, 8, 10, 11, 13, 15, 17],
    materials: [2, 4, 8, 9],
    sizes: [1, 2, 3, 4],
    tags: [1, 2, 3],
  },
  {
    id: 15,
    name: "Product 15",
    price: 220,
    saleOf: "0%",
    quantity: 50,
    dateCreated: "10/02/2021",
    image: img_3,
    slideImg: [img_3, img_8, img_13, img_23, img_16],
    link: "/products/15",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [2, 3],
    colors: [2, 4, 6, 8, 15, 17],
    materials: [4, 8, 9],
    sizes: [1, 3, 4],
    tags: [3],
  },
  {
    id: 16,
    name: "Product 16",
    price: 600,
    saleOf: "10%",
    quantity: 50,
    dateCreated: "07/02/2021",
    image: img_9,
    slideImg: [img_9, img_20, img_13, img_8, img_1],
    link: "/products/16",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [3],
    colors: [11, 13, 15, 17],
    materials: [2],
    sizes: [1, 2, 4],
    tags: [1, 3],
  },
  {
    id: 17,
    name: "Product 17",
    price: 777,
    saleOf: "30%",
    quantity: 99,
    dateCreated: "09/21/2021",
    image: img_10,
    slideImg: [img_10, img_14, img_21, img_11, img_18],
    link: "/products/17",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [2, 3],
    colors: [13, 2, 4, 5, 8, 11],
    materials: [1, 7, 9],
    sizes: [1, 2, 4],
    tags: [2, 3],
  },
  {
    id: 18,
    name: "Product 18",
    price: 800,
    saleOf: "10%",
    quantity: 22,
    dateCreated: "06/29/2021",
    image: img_6,
    slideImg: [img_6, img_16, img_23, img_17, img_22],
    link: "/products/18",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 2, 4],
    colors: [2, 4, 5, 6, 8, 10, 15, 18, 14, 16],
    materials: [1, 9],
    sizes: [2, 3],
    tags: [2],
  },
  {
    id: 19,
    name: "Product 19",
    price: 90,
    saleOf: "45%",
    quantity: 99,
    dateCreated: "05/25/2021",
    image: img_4,
    slideImg: [img_4, img_8, img_22, img_1, img_15],
    link: "/products/19",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [4],
    colors: [1, 3, 2, 4, 5, 6, 8, 10, 15, 18, 14, 16],
    materials: [1, 4, 5, 9],
    sizes: [2, 1, 3],
    tags: [1, 2],
  },
  {
    id: 20,
    name: "Product 20",
    price: 900,
    saleOf: "5%",
    quantity: 50,
    dateCreated: "10/20/2021",
    image: img_8,
    slideImg: [img_8, img_1, img_2, img_21, img_15],
    link: "/products/20",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 4],
    colors: [1, 6, 8, 10, 15, 18, 14, 16],
    materials: [1, 5, 9],
    sizes: [2, 1, 3],
    tags: [2],
  },
  {
    id: 21,
    name: "Product 21",
    price: 150,
    saleOf: "10%",
    quantity: 99,
    dateCreated: "08/21/2021",
    image: img_1,
    slideImg: [img_1, img_11, img_13, img_15, img_19],
    link: "/products/21",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 3, 4],
    colors: [1, 2, 3, 5, 7, 9, 12, 14, 17],
    materials: [2, 4, 6, 8],
    sizes: [1, 2, 3, 4],
    tags: [1, 2, 3],
  },
  {
    id: 22,
    name: "Product 22",
    price: 500,
    saleOf: "10%",
    quantity: 99,
    dateCreated: "08/21/2021",
    image: img_2,
    slideImg: [img_2, img_12, img_22, img_23, img_16],
    link: "/products/22",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 2, 4],
    colors: [2, 4, 5, 6, 8, 10],
    materials: [1, 3, 7, 9],
    sizes: [1, 2, 3, 4],
    tags: [1, 2, 3],
  },
  {
    id: 23,
    name: "Product 23",
    price: 1810,
    saleOf: "15%",
    quantity: 5,
    dateCreated: "05/21/2021",
    image: img_3,
    slideImg: [img_3, img_17, img_18, img_20, img_21],
    link: "/products/23",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [2, 4],
    colors: [1, 2, 3, 4],
    materials: [7, 8, 9],
    sizes: [1],
    tags: [1],
  },
  {
    id: 24,
    name: "Product 24",
    price: 5210,
    saleOf: "5%",
    quantity: 99,
    dateCreated: "10/21/2021",
    image: img_4,
    slideImg: [img_4, img_13, img_14, img_18, img_19],
    link: "/products/24",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 2, 3, 4],
    colors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15],
    materials: [1, 2, 3, 7, 9],
    sizes: [1, 2, 3, 4],
    tags: [1, 2, 3],
  },
  {
    id: 25,
    name: "Product 25",
    price: 220,
    saleOf: "0%",
    quantity: 50,
    dateCreated: "08/25/2021",
    image: img_5,
    slideImg: [img_5, img_16, img_17, img_12, img_11],
    link: "/products/25",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 2, 4],
    colors: [18, 17, 16, 15, 14, 10, 1],
    materials: [7, 9],
    sizes: [1, 2, 3],
    tags: [1],
  },
  {
    id: 26,
    name: "Product 26",
    price: 870,
    saleOf: "0%",
    quantity: 20,
    dateCreated: "25/11/2021",
    image: img_6,
    slideImg: [img_6, img_10, img_11, img_21, img_20],
    link: "/products/26",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1, 2],
    colors: [6, 8, 10, 13, 14, 15, 16, 18],
    materials: [1, 2, 6],
    sizes: [2, 3, 4],
    tags: [3],
  },
  {
    id: 27,
    name: "Product 27",
    price: 7772,
    saleOf: "30%",
    quantity: 99,
    dateCreated: "07/21/2021",
    image: img_7,
    slideImg: [img_7, img_14, img_21, img_11, img_18],
    link: "/products/27",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [2, 3],
    colors: [13, 2, 4, 5, 8, 11],
    materials: [1, 7, 9],
    sizes: [1, 2, 4],
    tags: [2, 3],
  },
  {
    id: 28,
    name: "Product 28",
    price: 800,
    saleOf: "10%",
    quantity: 22,
    dateCreated: "06/20/2021",
    image: img_8,
    slideImg: [img_8, img_16, img_23, img_17, img_22],
    link: "/products/28",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [2],
    colors: [2, 4, 5, 6, 8, 10, 15, 18, 14, 16],
    materials: [1, 9],
    sizes: [2, 3],
    tags: [2],
  },
  {
    id: 29,
    name: "Product 29",
    price: 50,
    saleOf: "10%",
    quantity: 99,
    dateCreated: "05/20/2021",
    image: img_9,
    slideImg: [img_9, img_18, img_22, img_21, img_15],
    link: "/products/29",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [3],
    colors: [1, 3, 2, 4, 5, 6, 8, 10, 15, 18, 14, 16],
    materials: [1, 4, 5, 9],
    sizes: [2, 1, 3],
    tags: [1, 2],
  },
  {
    id: 30,
    name: "Product 30",
    price: 1500,
    saleOf: "15%",
    quantity: 30,
    dateCreated: "11/20/2021",
    image: img_5,
    slideImg: [img_5, img_20, img_22, img_21, img_15],
    link: "/products/30",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [4],
    colors: [1, 6, 8, 10, 15, 18, 14, 16],
    materials: [1, 5, 9],
    sizes: [2, 1, 3],
    tags: [2],
  },
  {
    id: 31,
    name: "Product 31",
    price: 800,
    saleOf: "10%",
    quantity: 22,
    dateCreated: "06/20/2021",
    image: img_8,
    slideImg: [img_8, img_16, img_23, img_17, img_22],
    link: "/products/31",
    descript: `<h3>Product Descriptions</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    <ul>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_1} />
    </div>
    <div>
    <h6>Playtime 20+ Hours</h6>
    <p>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_2} />
    </div>
    <div>
    <h6>HD Noise Cancelling</h6>
    <p>Vivamus finibus vel mauris ut vehicula.</p>
    </div>
    </li>
    <li>
    <div>
    <img alt="desc_icon" src=${img_icon_3} />
    </div>
    <div>
    <h6>Dolby Atmos Sound</h6>
    <p>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
    </div>
    </li>
    </ul>`,
    categories: [1],
    colors: [2, 4, 5, 6, 8, 10, 15, 18, 14, 16],
    materials: [1, 9],
    sizes: [2, 3],
    tags: [2],
  },
];

/**
 * 
 * 
 *
 * categories: [1,3,4], 1 - 4 
 colors: [1,3,5,7,9,12,14],  1 - 18 
 materials: [2,4,6,8], 1- 9 
 sizes: [1,2,3,4], *1-4 *
 tags: [1,2,3], * 1-3*
 * 
 */
