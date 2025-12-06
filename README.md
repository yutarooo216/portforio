# My Portfolio

This is the source code for my personal portfolio site, built with:

- 🔧 React + TypeScript
- 🎨 Tailwind CSS
- 🐳 Docker
- 🧪 PostCSS & Autoprefixer

The portfolio is deployed on **GitHub Pages** and includes:
- A personal profile
- List of publications
- Web app demos (e.g. RNA 3D prediction tool)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Development with Docker

```bash
docker build -t my-portfolio .
docker run -p 3000:3000 my-portfolio
```

Or with Docker Compose:

```bash
docker compose up
```

### 3. Without Docker

```bash
npm install
npm start
```

---

## 🌍 Deployment

This project uses [gh-pages](https://www.npmjs.com/package/gh-pages) to deploy to GitHub Pages.

```bash
npm run deploy
```

The site is hosted at:  
📍 https://yutarooo216.github.io/portforio/

---

## 🧾 License

MIT License © Yutaro Ito