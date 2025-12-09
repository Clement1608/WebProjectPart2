# WebProjectPart2

# Tennis Legends – Fullstack Web Project (Frontend + Backend)

This project showcases the greatest tennis players in history through a fullstack web application.  
It includes:

- A **frontend** built with HTML, CSS, and Vue.js  
- A **backend** built with Node.js and Express  
- API-based navigation between players (Next / Previous)  
- Images served directly from the backend  
- Clean UI with responsive design  

---

## Project Structure

```
tennis-legends/
│
├── backend/
│   ├── data/
│   │   ├── players.js
│   │   └── images/
│   │       ├── player1.jpg
│   │       ├── player2.jpg
│   │       ├── player3.jpg
│   │       ├── player4.jpg
│   │       ├── player5.jpg
│   │       └── player6.jpg
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
└── frontend/
    ├── index.html
    ├── css/
    │   └── style.css
    └── data/
        └── images/
            └── Clément.jpg
```

---

## Installation & Launch Instructions

### 1 Clone the repository
```
git clone <repository-url>
```

---

## Backend Setup (Node.js + Express)

### 2 Install dependencies
```
cd backend
npm install
```

 `node_modules` is **not included** in the repository (this is normal).  
It will be automatically recreated by `npm install`.

### 3 Start the backend server
```
npm run dev
```
or:
```
npm start
```

The server starts on:  
--> http://localhost:3000

---

## API Endpoints

| Route | Description |
|-------|-------------|
| **GET /item** | Returns the current player |
| **GET /item/next** | Moves to the next player |
| **GET /item/prev** | Moves to the previous player |
| **GET /item/:id** | Returns player by index |
| **GET /images/...** | Serves player images |

API responses look like this:
```json
{
  "index": 0,
  "item": { "name": "...", "desc": "...", "img": "..." },
  "total": 6
}
```

---

## Frontend Setup (Vue.js + HTML/CSS)

### 4 Launch the frontend

No installation required.

Simply open:
```
frontend/index.html
```

➡ Double-click the file  
➡ The website opens directly in your browser  
➡ The frontend automatically communicates with the backend using `fetch()` requests

---

## How It Works

- The frontend uses **Vue.js 3** to display player data.  
- It communicates with the backend using HTTP requests (`fetch`).  
- The navigation buttons **Next** and **Previous** call the backend routes:  
  - `/item/next`  
  - `/item/prev`  
- Images such as `player1.jpg` are served from the backend through:
  ```
  backend/data/images/
  ```

This creates a dynamic, interactive application showcasing tennis legends.

---

## Important: node_modules

The folder **node_modules is intentionally excluded** from the repository.  
This is standard practice and is handled by `.gitignore`.

You simply regenerate it locally with:

```
npm install
```

---

## Author

**Clément Silva Le Barz**  
Computer Engineering Student at EFREI Paris  
Tennis enthusiast 🎾  

---

## Project Status

Fully functional — frontend and backend successfully connected.

