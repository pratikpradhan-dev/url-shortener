# 🔗 URL Shortener Web App

A simple and efficient URL shortener built using **Node.js, Express, MongoDB, and EJS**.
It allows users to convert long URLs into short, shareable links and track their usage.

---

## 🚀 Live Demo

👉 **[View Live App](https://url-shortener-6uy4.onrender.com)**

---

## 💻 GitHub Repository

👉 **[Source Code](https://github.com/pratikpradhan-dev/url-shortener)**

---

## ⚙️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **Templating Engine:** EJS
* **Deployment:** Render

---

## ✨ Features

* 🔗 Shorten long URLs instantly
* 📊 Track number of clicks per link
* 🔄 Redirect to original URL
* 📋 Display all shortened URLs
* ⚡ Fast and lightweight

---

## 📁 Project Structure

```
URL-SHORTENER/
│
├── models/
│   └── shortUrl.js
│
├── views/
│   └── index.ejs
│
├── server.js
├── package.json
└── package-lock.json
```

---

## 🧠 How It Works

1. User enters a long URL
2. Server stores it in MongoDB
3. Generates a short ID
4. When accessed, it redirects to the original URL
5. Click count is updated

---

## 🛠️ Installation (Local Setup)

```bash
git clone https://github.com/pratikpradhan-dev/url-shortener.git
cd url-shortener
npm install
```

### Run locally:

```bash
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file (optional for local):

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 🌐 Deployment

Deployed using **Render** with:

* Environment variables
* MongoDB Atlas cloud database

---

## 📌 Future Improvements

* 🔍 Search URLs
* 🗑️ Delete links
* 📈 Analytics dashboard
* 🎨 Better UI/UX
* 🔐 User authentication

---

## 👨‍💻 Author

**Pratik Pradhan**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share it!

---
