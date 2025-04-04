const products = [
  {
    id: 1,
    title:
      "Lenovo 15.6-inch Laptop Model IdeaPad Slim 3 15IRH8-i7 13620H 16GB 512SSD",
    price: 32000000,
    img: "images/products/image01.png",
    description:
      "This Lenovo laptop with a powerful 13th Gen i7 processor and 16GB of RAM is suitable for both daily and heavy tasks. The 512GB SSD ensures fast performance.",
  },
  {
    id: 2,
    title:
      "Asus 14-inch Laptop Model VivoBook R465FA - Core i5 1135G7 8GB 256SSD",
    price: 27000000,
    img: "images/products/image02.png",
    description:
      "An affordable Asus laptop with an 11th Gen i5 processor, 8GB of RAM, and 256GB SSD, ideal for daily and light tasks.",
  },
  {
    id: 3,
    title: "Apple 13.3-inch Laptop Model MacBook Air 2020 M1 8GB 256SSD",
    price: 55000000,
    img: "images/products/image03.png",
    description:
      "MacBook Air with an M1 processor and 8GB of RAM, perfect for Apple professionals who seek speed and performance in a lightweight body.",
  },
  {
    id: 4,
    title: "HP 16-inch Laptop Model Envy x360 - Ryzen 7 5700U 16GB 512SSD",
    price: 47000000,
    img: "images/products/image04.png",
    description:
      "HP convertible laptop with a Ryzen 7 processor and 16GB of RAM, ideal for graphic and multimedia tasks. It features a 16-inch screen and excellent build quality.",
  },
  {
    id: 5,
    title: "Dell 15.6-inch Laptop Model G5 15 SE - Ryzen 5 4600H 8GB 512SSD",
    price: 36000000,
    img: "images/products/image05.png",
    description:
      "Dell gaming laptop with a Ryzen 5 processor and 8GB of RAM, suitable for gamers and professionals seeking powerful performance.",
  },
  {
    id: 6,
    title:
      "Acer 15.6-inch Laptop Model Nitro 5 AN515-45 - Ryzen 7 5800H 16GB 1TB SSD",
    price: 54000000,
    img: "images/products/image06.png",
    description:
      "A powerful gaming laptop from Acer with a Ryzen 7 processor and 16GB of RAM. It comes with a 1TB SSD, perfect for heavy games and fast performance.",
  },
  {
    id: 7,
    title:
      "Lenovo 14-inch Laptop Model ThinkPad X1 Carbon Gen 9 - Core i7 1165G7 16GB 1TB SSD",
    price: 62000000,
    img: "images/products/image07.png",
    description:
      "Professional and high-quality laptop from the ThinkPad series with an i7 processor and 16GB of RAM. Ideal for business and professional users seeking high build quality and security.",
  },
  {
    id: 8,
    title: "Dell 13.3-inch Laptop Model XPS 13 - Core i7 1185G7 16GB 512SSD",
    price: 71000000,
    img: "images/products/image08.png",
    description:
      "The Dell XPS laptop with beautiful design, an i7 processor, 16GB of RAM, and high-quality display, is an excellent choice for professional users and tech enthusiasts.",
  },
  {
    id: 9,
    title: "Asus 14-inch Laptop Model ZenBook 14 - Ryzen 5 5500U 8GB 512SSD",
    price: 38000000,
    img: "images/products/image09.png",
    description:
      "A lightweight and beautiful laptop from the ZenBook series with a Ryzen 5 processor and 8GB of RAM. Ideal for daily and light tasks with strong battery life.",
  },
  {
    id: 10,
    title:
      "MSI 15.6-inch Laptop Model GF63 Thin 11SC - Core i5 11400H 16GB 512SSD",
    price: 46000000,
    img: "images/products/image10.png",
    description:
      "Powerful MSI laptop with an 11th Gen i5 processor, 16GB of RAM, and a suitable graphics card. An excellent choice for gamers and professionals.",
  },
  {
    id: 11,
    title: "HP 15.6-inch Laptop Model Pavilion 15 - Core i5 1235U 8GB 512SSD",
    price: 34000000,
    img: "images/products/image11.png",
    description:
      "Affordable HP laptop with a 12th Gen i5 processor, 8GB of RAM, and 512GB SSD, perfect for daily and business tasks.",
  },
  {
    id: 12,
    title: "Apple 16-inch Laptop Model MacBook Pro 2021 M1 Pro 16GB 1TB SSD",
    price: 85000000,
    img: "images/products/image12.png",
    description:
      "MacBook Pro with an M1 Pro processor and 16GB of RAM, ideal for Apple professionals seeking exceptional performance for heavy and professional tasks.",
  },
];

const productImageElem = document.querySelector('.product-cover')
const productTitleElem = document.querySelector('.product-page-title')
const productDescElem = document.querySelector('.product-info')
const productPriceElem = document.querySelector('.product-price')






function showProduct() {
  let productId = new URLSearchParams(location.search).get('id') || "1";
  productId = +productId > products.length ? "1" : productId;

  let productData = products.find(product => product.id === +productId);


  productImageElem.src = productData.img;
  productTitleElem.textContent = productData.title;
  productDescElem.textContent = productData.description;
  productPriceElem.textContent = productData.price.toLocaleString();
}

