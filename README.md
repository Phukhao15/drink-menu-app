# 🥤 Drink Menu App

เว็บแอปพลิเคชันแสดงเมนูเครื่องดื่ม สำหรับร้านเครื่องดื่มที่รองรับหลายภาษา (ไทย, อังกฤษ, จีน)

![App Screenshot](https://placeholder-image.com)

## ✨ คุณสมบัติ

- **รองรับหลายภาษา** - ไทย (TH), อังกฤษ (EN), จีน (ZH)
- **ค้นหาเครื่องดื่ม** - ค้นหาจากชื่อเครื่องดื่มในทุกภาษา
- **กรองตามหมวดหมู่** - แสดงเฉพาะเครื่องดื่มในหมวดหมู่ที่เลือก
- **UI สวยงาม** - ดีไซน์ที่ทันสมัยด้วย Tailwind CSS
- **อนิเมชั่นลื่นไหล** - ด้วย Framer Motion
- **Responsive Design** - แสดงผลได้ดีในทุกขนาดหน้าจอ

## 🛠️ เทคโนโลยีที่ใช้

- React.js
- Framer Motion
- Tailwind CSS

## 🚀 การติดตั้ง

1. Clone repository
- git clone https://github.com/yourusername/beverage-menu-app.git
- cd beverage-menu-app
```

2. ติดตั้ง dependencies
- npm install


3. รันโปรเจค
- npm run dev


4. เปิดเบราว์เซอร์ที่ http://localhost:3000

## 📁 โครงสร้างโปรเจค

```
beverage-menu-app/
├── public/
│   └── images/
│       └── drinks/ # รูปภาพเครื่องดื่ม
├── src/
│   ├── components/ # React Components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LocationSection.jsx
│   │   ├── MenuItem.jsx
│   │   └── Navbar.jsx
│   ├── data/ # ข้อมูล
│   │   ├── categoryLabels.js # ข้อความหมวดหมู่ในแต่ละภาษา
│   │   └── drinks.js # ข้อมูลเครื่องดื่มทั้งหมด
│   ├── App.jsx # หน้าหลักของแอป
│   └── main.jsx # Entry point
├── package.json
└── README.md
```

## 🌐 รูปแบบข้อมูล

### รูปแบบข้อมูลเครื่องดื่ม
```javascript
{
  id: "unique-id",
  name: {
    th: "ชื่อภาษาไทย",
    en: "English Name",
    zh: "中文名称"
  },
  category: "category-id",
  price: 59,
  image: "/images/drinks/drink-image.png"
}
```

### รูปแบบข้อมูลหมวดหมู่
```javascript
{
  all: {
    th: "ทั้งหมด",
    en: "All",
    zh: "全部"
  },
  coffee: {
    th: "กาแฟ",
    en: "Coffee",
    zh: "咖啡"
  },
  // หมวดหมู่อื่นๆ
}
```

## 📝 การปรับแต่ง

### เพิ่มเครื่องดื่มใหม่
เพิ่มข้อมูลในไฟล์ `src/data/drinks.js`:

```javascript
const drinks = [
  // เครื่องดื่มที่มีอยู่แล้ว
  {
    id: "new-drink",
    name: {
      th: "เครื่องดื่มใหม่",
      en: "New Drink",
      zh: "新饮料"
    },
    category: "category-id",
    price: 65,
    image: "/images/drinks/new-drink.png"
  }
];
```

### เพิ่มหมวดหมู่ใหม่
เพิ่มข้อมูลในไฟล์ `src/data/categoryLabels.js`:

```javascript
const categoryLabels = {
  // หมวดหมู่ที่มีอยู่แล้ว
  "new-category": {
    th: "หมวดหมู่ใหม่",
    en: "New Category",
    zh: "新类别"
  }
};
```

## 🧩 Components

- **Navbar**: แถบนำทางด้านบน มีตัวเลือกภาษา, ปุ่มกรองหมวดหมู่ และช่องค้นหา
- **MenuItem**: แสดงข้อมูลเครื่องดื่มแต่ละรายการ
- **LocationSection**: แสดงข้อมูลที่ตั้งร้าน
- **Footer**: ส่วนท้ายของเพจ
- **Header**: ส่วนหัวของเพจ

## 🔜 แผนพัฒนาในอนาคต

- [ ] เพิ่มภาษาอื่นๆ
- [ ] เพิ่มระบบตะกร้าสินค้า
- [ ] เพิ่มหน้าแสดงรายละเอียดเครื่องดื่ม
- [ ] เพิ่มระบบ dark mode
- [ ] เพิ่มระบบคอมเมนต์และรีวิว



