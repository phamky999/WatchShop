
const img_slider1 = require("../images/header/slider1.jpg").default;
const img_slider2 = require("../images/header/slider2.jpg").default;
const DUMY_MEGA_MENU = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products/all",
    },
    {
      title: "Collections",
      path: "/collections",
      subNav: [
        {
          sub_title: "Fire-Boltt Talk",
          sub_item: [
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
          ],
        },
        {
          sub_title: "Flash Watch",
          sub_item: [
            {
              title: "Smartwatch - T-Rex Pro",
              path: "/products/7",
            },
            {
              title: "Smartwatch - Zepp E (Round)",
              path: "/products/8",
            },
            {
              title: "Smartwatch - Bip U Pro",
              path: "/products/2",
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
              title: "Smartwatch - Bip U",
              path: "/products/1",
            },
            {
              title: "Smartwatch - Pop",
              path: "/products/6",
            },
            {
              title: "Smartwatch - GTR 2 LTE",
              path: "/products/3",
            },
          ],
        },
        {
          sub_title: undefined,
          sub_item: [
            {
              title: "banner_sale",
              image: img_slider1,
              path: "/collections/sales",
            },
          ],
        },
        {
          sub_title: undefined,
          sub_item: [
            {
              title: "banner_collections",
              image: img_slider2,
              path: "/collections/collections-1",
            },
          ],
        },
      ],
    },
    {
      title: "Pages",
      path: "/pages/about-us",
      subNav: [
        {
          sub_title: "",
          sub_item: [
            {
              title: "About Us",
              path: "/pages/about-us",
            },
            {
              title: "Contact",
              path: "/pages/contact",
            },
            {
              title: "Faq & Policy",
              path: "/pages/faq-policy",
            },
            {
              title: "Search",
              path: "/search",
            },
            {
              title: "Page 404",
              path: "/404",
            },
          ],
        },
      ],
    },
    {
      title: "Contact Us",
      path: "/pages/contact",
    },
  ];

export default DUMY_MEGA_MENU;