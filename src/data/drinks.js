const drinks = [
  // tea
  {
    id: 1,
    name: { th: "ชาไทย", en: "Thai Tea", zh: "泰式红茶" },
    category: "tea",
    image: "/images/cha-thai.png",
    price: "35 ฿",
  },
  {
    id: 2,
    name: { th: "ชาเขียว", en: "Green Tea", zh: "绿茶" },
    category: "tea",
    image: "/images/cha-green.png",
    price: "35 ฿",
  },
  {
    id: 3,
    name: { th: "ชาไต้หวัน", en: "Taiwan Tea", zh: "台湾红茶" },
    category: "tea",
    image: "/images/cha-taiwan.png",
    price: "35 ฿",
  },
  {
    id: 4,
    name: { th: "ชาดำ", en: "Black Tea", zh: "红茶" },
    category: "tea",
    image: "/images/black-tea.png",
    price: "30 ฿",
  },
  {
    id: 5,
    name: { th: "ชามะนาว", en: "Lemon Tea", zh: "柠檬红茶" },
    category: "tea",
    image: "/images/cha-lemon.png",
    price: "35 ฿",
  },
  {
    id: 6,
    name: { th: "ชาน้ำผึ้งมะนาว", en: "Honey Lemon Tea", zh: "蜂蜜柠檬茶" },
    category: "tea",
    image: "/images/cha-honey-lemon.png",
    price: "40 ฿",
  },

  // coffee
  {
    id: 7,
    name: { th: "เอสเปรสโซ่", en: "Espresso", zh: "浓缩咖啡" },
    category: "coffee",
    image: "/images/espresso.png",
    price: "40 ฿",
  },
  {
    id: 8,
    name: { th: "อเมริกาโน่", en: "Americano", zh: "美式咖啡" },
    category: "coffee",
    image: "/images/americano.png",
    price: "40 ฿",
  },

  // fruits
  {
    id: 9,
    name: { th: "แตงโมปั่น", en: "Watermelon Smoothie", zh: "西瓜冰沙" },
    category: "fruits",
    image: "/images/watermelon-smoothie.png",
    price: "35 ฿",
  },
  {
    id: 10,
    name: { th: "น้ำมะพร้าวปั่นนมสด", en: "Coconut Smoothie with Milk", zh: "椰奶冰沙" },
    category: "fruits",
    image: "/images/coconut-milk-smoothie.png",
    price: "40 ฿",
  },
  {
    id: 11,
    name: { th: "มะพร้าวปั่นไม่นม", en: "Coconut Smoothie", zh: "椰子冰沙" },
    category: "fruits",
    image: "/images/coconut-smoothie.png",
    price: "35 ฿",
  },
  {
    id: 12,
    name: { th: "น้ำมะพร้าวสด", en: "Fresh Coconut Juice", zh: "鲜椰汁" },
    category: "fruits",
    image: "/images/fresh-coconut.png",
    price: "30 ฿",
  },
  {
    id: 13,
    name: { th: "น้ำส้มปั่น", en: "Orange Smoothie", zh: "橙子冰沙" },
    category: "fruits",
    image: "/images/orange-smoothie.png",
    price: "35 ฿",
  },
  {
    id: 14,
    name: { th: "น้ำส้มสด", en: "Fresh Orange Juice", zh: "鲜橙汁" },
    category: "fruits",
    image: "/images/fresh-orange.png",
    price: "30 ฿",
  },
  {
    id: 15,
    name: { th: "มะม่วงปั่นนมสด", en: "Mango Smoothie with Milk", zh: "芒果牛奶冰沙" },
    category: "fruits",
    image: "/images/mango-milk-smoothie.png",
    price: "40 ฿",
  },
  {
    id: 16,
    name: { th: "m-150 ปีโป้", en: "M-150 with Jelly", zh: "M-150果冻饮" },
    category: "fruits",
    image: "/images/m150-jelly.png",
    price: "30 ฿",
  },
  {
    id: 17,
    name: { th: "นมสดปั่นปีโป้", en: "Milk Smoothie with Jelly", zh: "果冻牛奶冰沙" },
    category: "fruits",
    image: "/images/milk-jelly-smoothie.png",
    price: "35 ฿",
  },

  // soda
  {
    id: 18,
    name: { th: "แดงโซดา", en: "Red Soda", zh: "红色苏打" },
    category: "soda",
    image: "/images/red-soda.png",
    price: "25 ฿",
  },
  {
    id: 19,
    name: { th: "น้ำผึ้งมะนาวโซดา", en: "Honey Lemon Soda", zh: "蜂蜜柠檬苏打" },
    category: "soda",
    image: "/images/honey-lemon-soda.png",
    price: "30 ฿",
  },
  {
    id: 20,
    name: { th: "น้ำมะนาวโซดา", en: "Lime Soda", zh: "青柠苏打" },
    category: "soda",
    image: "/images/lime-soda.png",
    price: "30 ฿",
  },
  {
    id: 21,
    name: { th: "น้ำบ๊วยโซดา", en: "Plum Soda", zh: "话梅苏打" },
    category: "soda",
    image: "/images/plum-soda.png",
    price: "30 ฿",
  },
  {
    id: 22,
    name: { th: "น้ำมะนาว", en: "Lime Juice", zh: "青柠汁" },
    category: "soda",
    image: "/images/lime-juice.png",
    price: "25 ฿",
  },
  {
    id: 23,
    name: { th: "น้ำผึ้งมะนาว", en: "Honey Lemon", zh: "蜂蜜柠檬" },
    category: "soda",
    image: "/images/honey-lemon.png",
    price: "30 ฿",
  },
];

export default drinks;
