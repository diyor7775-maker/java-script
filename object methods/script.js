const pieShop = {
  shopName: "Grandma's Pies",
  city: "Austin",
  rating: 4.8,
  pie1_name: "Apple Crumble",
  pie1_price: 12,
  pie1_available: true,
  pie2_name: "Blueberry Classic",
  pie2_price: 14,
  pie2_available: false,
  pie3_name: "Pecan Delight",
  pie3_price: 15,
  pie3_available: true,
  pie4_name: "Cherry Bomb",
  pie4_price: 13,
  pie4_available: true,
  pie5_name: null,
  pie5_price: null,
  pie5_available: null,
  pie6_name: null,
  pie6_price: null,
  pie6_available: null,
};

let keyObj = Object.keys(pieShop);

let result = keyObj.filter((value) => value.includes("name") && pieShop[value] != null,
);

console.log(result);

let res =result.map((value) => pieShop[value]);

console.log(res);
