# 🎉 Event Management System  
A full-stack Node.js based event management platform with authentication for Students, Developers, and Judges.

---

## 🚀 Features
- ✅ User authentication (Student, Developer, Judge)
- ✅ Event creation & participation
- ✅ Judge evaluation panels
- ✅ Admin/dashboard panels
- ✅ Secure routes using JWT + Middleware
- ✅ Organized MVC folder structure (Model–View–Controller)
- ✅ EJS-based templating
- ✅ File upload support

---

# 📌 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

Move into the project folder:

```bash
cd event-management-system
```

---

# 📌 2. Install Dependencies

```bash
npm install
```

---

# 📌 3. Environment Setup

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# 📌 4. Project Folder Structure

```
EVENT MANAGEMENT SYSTEM
 ├── node_modules
 ├── public
 ├── src
 │   ├── config
 │   ├── controllers
 │   ├── middlewares
 │   ├── models
 │   ├── routes
 │   ├── services
 │   ├── utils
 │   └── views
 │       ├── auth
 │       ├── developer
 │       ├── judge
 │       ├── layouts
 │       ├── student
 │       ├── index.ejs
 │       └── error.ejs
 ├── uploads
 ├── .env
 ├── .gitignore
 ├── package.json
 ├── package-lock.json
 ├── README.md
 └── server.js
```

---

# 📌 5. Start the Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

# ✅ **Git Usage Guide (Complete Step-by-Step)**

---

# 📌 6. Configure Git (one-time setup)

```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

---

# 📌 7. Clone a Repository

```bash
git clone <repo-url>
```

---

# 📌 8. Check Repo Status

```bash
git status
```

---

# 📌 9. Add Files Before Commit

Add everything:

```bash
git add .
```

Add a specific file:

```bash
git add src/controllers/eventController.js
```

---

# 📌 10. Commit Changes

```bash
git commit -m "Your commit message"
```

✅ Recommended commit message prefixes:
- `feat:` new feature  
- `fix:` bug fix  
- `docs:` documentation update  
- `refactor:` code restructuring  
- `update:` small improvements  

Example:
```bash
git commit -m "feat: added judge dashboard route"
```

---

# 📌 11. Push Code to GitHub

```bash
git push
```

If first push:

```bash
git push -u origin main
```

---

# 📌 12. Pull Latest Code

```bash
git pull
```

Pull specific branch:

```bash
git pull origin dev
```

---

# 📌 13. Create a New Branch

```bash
git switch -c feature-login
```

OR:

```bash
git checkout -b feature-login
```

---

# 📌 14. Switch Between Branches

```bash
git switch main
```

OR old method:

```bash
git checkout main
```

---

# 📌 15. Push New Branch to GitHub

```bash
git push -u origin feature-login
```

---

# 📌 16. Merge Branch Into Main

Switch to main:

```bash
git switch main
```

Merge:

```bash
git merge feature-login
```

Push updates:

```bash
git push
```

---

# 📌 17. Delete a Branch

Delete local:

```bash
git branch -d feature-login
```

Delete remote:

```bash
git push origin --delete feature-login
```


