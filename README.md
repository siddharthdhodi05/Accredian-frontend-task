# 🎨 RefPay Frontend

Welcome to the **RefPay Frontend**! 🚀 This is the user interface for the RefPay referral system, built using **React + Vite**, styled with **Tailwind CSS**, and deployed on **Vercel**. 💻✨

---

## 📌 Features

✅ Beautiful, responsive UI 🎨<br>
✅ User-friendly referral form 📝<br>
✅ Backend API integration 🔗<br>
✅ Modern design with Tailwind CSS 💠<br>
✅ Seamless animations for a smooth experience 🎥<br>

---

## 🚀 Tech Stack

- **Frontend:** React (Vite) ⚡
- **Styling:** Tailwind CSS 🎨
- **State Management:** useState, useEffect 🌐
- **API Requests:** Axios 🔄
- **Deployment:** Vercel 🌍

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/refpay-frontend.git
cd refpay-frontend
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file and add the backend API URL:
```env
VITE_API_BASE_URL=http://localhost:5000/api  # Change to deployed backend URL later
```

### 4️⃣ Start the development server
```sh
npm run dev
```
Frontend will be live at: **http://localhost:5173** 🎉

---

## 📡 API Integration
The frontend communicates with the backend using Axios. Ensure that the **backend is running** before testing API requests.

Example API request:
```js
axios.post(`${import.meta.env.VITE_API_BASE_URL}/referral`, formData)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
```

---

## 📦 Build & Deploy

### ✅ Build for production
```sh
npm run build
```
This will create an optimized `dist/` folder.

### 🌍 Deploy to Vercel
```sh
vercel
```
Follow the CLI steps to deploy the project.

---

## 🤝 Contributing
Feel free to open issues and submit PRs! 💡👨‍💻

---

## 📜 License
MIT License © 2025 Siddharth Dhodi ✨
