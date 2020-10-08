const data = [
  {
    id: "1",
    name: "Desktop-1",
    price: 10.99,
    img: "https://i.ibb.co/0FRtC8Y/pexels-bich-tran-1714341.jpg",
    category: "desktop",
  },
  {
    id: "2",
    name: "Desktop-2",
    price: 100,
    img: "https://i.ibb.co/R4TCGc3/pexels-cristian-benavides-2049411.jpg",
    category: "desktop",
  },
  {
    id: "3",
    name: "Desktop-3",
    price: 100,
    img: "https://i.ibb.co/0FRtC8Y/pexels-bich-tran-1714341.jpg",
    category: "desktop",
  },
  {
    id: "4",
    name: "Desktop-4",
    price: 70.5,
    img: "https://i.ibb.co/R4TCGc3/pexels-cristian-benavides-2049411.jpg",
    category: "desktop",
  },
  {
    id: "5",
    name: "Desktop-5",
    price: 300,
    img: "https://i.ibb.co/f4bWgMH/pexels-tranmautritam-326501.jpg",
    category: "desktop",
  },
  {
    id: "6",
    name: "Laptop-1",
    price: 350,
    img: "https://i.ibb.co/vmCZK6G/pexels-life-of-pix-7974.jpg",
    category: "laptop",
  },
  {
    id: "7",
    name: "Laptop-2",
    price: 200.75,
    img: "https://i.ibb.co/f2RR4bc/pexels-lisa-fotios-811587.jpg",
    category: "laptop",
  },
  {
    id: "8",
    name: "Laptop-3",
    price: 20,
    img: "https://i.ibb.co/vmCZK6G/pexels-life-of-pix-7974.jpg",
    category: "laptop",
  },
  {
    id: "9",
    name: "Laptop-4",
    price: 19.25,
    img: "https://i.ibb.co/f4bWgMH/pexels-tranmautritam-326501.jpg",
    category: "laptop",
  },
  {
    id: "10",
    name: "Laptop-5",
    price: 19.25,
    img: "https://i.ibb.co/0FRtC8Y/pexels-bich-tran-1714341.jpg",
    category: "laptop",
  },
  {
    id: "11",
    name: "Monitor-1",
    price: 19.25,
    img: "https://i.ibb.co/R4TCGc3/pexels-cristian-benavides-2049411.jpg",
    category: "monitor",
  },
  {
    id: "12",
    name: "Monitor-2",
    price: 19.25,
    img: "https://i.ibb.co/0FRtC8Y/pexels-bich-tran-1714341.jpg",
    category: "monitor",
  },
  {
    id: "13",
    name: "Monitor-3",
    price: 19.25,
    img: "https://i.ibb.co/R4TCGc3/pexels-cristian-benavides-2049411.jpg",
    category: "monitor",
  },
  {
    id: "14",
    name: "Monitor-4",
    price: 19.25,
    img: "https://i.ibb.co/0FRtC8Y/pexels-bich-tran-1714341.jpg",
    category: "monitor",
  },
  {
    id: "15",
    name: "Monitor-5",
    price: 19.25,
    img: "https://i.ibb.co/VN4sHqr/pexels-karol-d-400678.jpg",
    category: "monitor",
  },
  {
    id: "16",
    name: "UPS-1",
    price: 13.0,
    img: "https://i.ibb.co/K67Hty5/pexels-alessandro-oliverio-1472443.jpg",
    category: "ups",
  },
  {
    id: "17",
    name: "UPS-2",
    price: 13.0,
    img: "https://i.ibb.co/LpmGHPN/pexels-pixabay-159220.jpg",
    category: "ups",
  },
  {
    id: "18",
    name: "UPS-3",
    price: 13.0,
    img: "https://i.ibb.co/M626WbK/pexels-2399840.jpg",
    category: "ups",
  },
  {
    id: "19",
    name: "UPS-4",
    price: 13.0,
    img: "https://i.ibb.co/K67Hty5/pexels-alessandro-oliverio-1472443.jpg",
    category: "ups",
  },
  {
    id: "20",
    name: "UPS-1",
    price: 13.0,
    img: "https://i.ibb.co/LpmGHPN/pexels-pixabay-159220.jpg",
    category: "ups",
  },
  {
    id: "21",
    name: "UPS-6",
    price: 13.0,
    img: "https://i.ibb.co/LpmGHPN/pexels-pixabay-159220.jpg",
    category: "ups",
  },
  {
    id: "22",
    name: "Office-equipment-1",
    price: 13.0,
    img: "https://i.ibb.co/FY0wKTN/pexels-bruno-cantu-ria-774448.jpg",
    category: "office-eq",
  },
  {
    id: "23",
    name: "Office-equipment-2",
    price: 13.0,
    img: "https://i.ibb.co/xDWTptg/pexels-mushroom-4485456.jpg",
    category: "office-eq",
  },
  {
    id: "24",
    name: "Office-equipment-3",
    price: 13.0,
    img: "https://i.ibb.co/FY0wKTN/pexels-bruno-cantu-ria-774448.jpg",
    category: "office-eq",
  },
  {
    id: "25",
    name: "Office-equipment-4",
    price: 13.0,
    img: "https://i.ibb.co/R7sWsbq/pexels-dominika-roseclay-3839648.jpg",
    category: "office-eq",
  },
  {
    id: "26",
    name: "Camera-1",
    price: 145.0,
    img: "https://i.ibb.co/gwR2Vxv/pexels-matt-hardy-2179205.jpg",
    category: "camera",
  },
  {
    id: "27",
    name: "Camera-2",
    price: 136.0,
    img: "https://i.ibb.co/hW8grXD/pexels-pixabay-50690.jpg",
    category: "camera",
  },
  {
    id: "28",
    name: "Camera-3",
    price: 130.0,
    img: "https://i.ibb.co/qJnH2Qx/pexels-stanislav-kondratiev-2909225.jpg",
    category: "camera",
  },
  {
    id: "29",
    name: "Camera-4",
    price: 153.0,
    img: "https://i.ibb.co/gwR2Vxv/pexels-matt-hardy-2179205.jpg",
    category: "camera",
  },
  {
    id: "30",
    name: "Camera-5",
    price: 185.0,
    img: "https://i.ibb.co/QbLDfwh/pexels-pixabay-371924.jpg",
    category: "camera",
  },
  {
    id: "31",
    name: "Gaming-1",
    price: 185.0,
    img: "https://i.ibb.co/QbLDfwh/pexels-pixabay-371924.jpg",
    category: "gaming",
  },
  {
    id: "32",
    name: "Gaming-2",
    price: 185.0,
    img: "https://i.ibb.co/jMnkfNL/pexels-pixabay-275033.jpg",
    category: "gaming",
  },
  {
    id: "33",
    name: "Gaming-3",
    price: 185.0,
    img: "https://i.ibb.co/VN4sHqr/pexels-karol-d-400678.jpg",
    category: "gaming",
  },
  {
    id: "34",
    name: "Gaming-4",
    price: 185.0,
    img: "https://i.ibb.co/QbLDfwh/pexels-pixabay-371924.jpg",
    category: "gaming",
  },
  {
    id: "35",
    name: "Gaming-5",
    price: 185.0,
    img: "https://i.ibb.co/K67Hty5/pexels-alessandro-oliverio-1472443.jpg",
    category: "gaming",
  },
];
export default data;



