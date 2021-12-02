
const img_slider1 = require("../images/header/slider1.jpg").default;
const img_slider2 = require("../images/header/slider2.jpg").default;
const DUMY_MEGA_MENU = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/collections/all",
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
              path: "/products/t-shirt",
            },
            {
              title: "Smartwatch - Bip U Pro",
              path: "/products/short-dress",
            },
            {
              title: "Smartwatch - GTR 2 LTE",
              path: "/products/tutu-women",
            },
            {
              title: "Smartwatch - GTR 2E",
              path: "/products/print-backpack-with-adjustable",
            },
            {
              title: "Smartwatch - GTR 2 Mini",
              path: "/products/halt-shirt",
            },
            {
              title: "Smartwatch - Pop",
              path: "/products/straps-and-zip-closure",
            },
            {
              title: "Smartwatch - T-Rex Pro",
              path: "/products/ladies-dress",
            },
            {
              title: "Smartwatch - Zepp E (Round)",
              path: "/products/sennheiser-miniheadphones",
            },
          ],
        },
        {
          sub_title: "Flash Watch",
          sub_item: [
            {
              title: "Smartwatch - T-Rex Pro",
              path: "/products/ladies-dress",
            },
            {
              title: "Smartwatch - Zepp E (Round)",
              path: "/products/sennheiser-miniheadphones",
            },
            {
              title: "Smartwatch - Bip U Pro",
              path: "/products/short-dress",
            },
            {
              title: "Smartwatch - GTR 2E",
              path: "/products/print-backpack-with-adjustable",
            },
            {
              title: "Smartwatch - GTR 2 Mini",
              path: "/products/halt-shirt",
            },
            {
              title: "Smartwatch - Bip U",
              path: "/products/t-shirt",
            },
            {
              title: "Smartwatch - Pop",
              path: "/products/straps-and-zip-closure",
            },
            {
              title: "Smartwatch - GTR 2 LTE",
              path: "/products/tutu-women",
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
              title: "Faq",
              path: "/pages/faq",
            },
            {
              title: "Blog",
              path: "/blogs/news",
            },
            {
              title: "Payment Policy",
              path: "/pages/payment-policy",
            },
            {
              title: "Privacy Policy",
              path: "/pages/privacy-policy",
            },
            {
              title: "Return Policy",
              path: "/pages/return-policy",
            },
            {
              title: "Terms Conditions",
              path: "/pages/terms-conditions",
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