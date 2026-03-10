# 🏕️ Summer Camping Guide

A responsive camping guide built with React and Tailwind CSS. Covers everything from essential gear to wildlife safety — with a clean UI and smooth user experience.

**Live site:** [xaida02-camping-guide.netlify.app](https://xaida02-camping-guide.netlify.app)

---

## ✨ Features

- 🌙 **Dark mode** — toggle between light and green-dark themes
- 🎞️ **Entrance animations** — staggered fade-in on page load and scroll-triggered transitions per section
- 🖼️ **Optimized images** — all assets converted to WebP for faster load times
- 🔗 **Deep linking** — each section has its own URL hash (e.g. `/# gear`), shareable and browser-history aware
- 📱 **Responsive** — mobile menu with full section navigation
- ⏳ **Skeleton loaders** — placeholder animations while images load
- 📊 **Reading progress bar** — fixed indicator at the top of the page
- 🔍 **Section search** — filter navigation sections from the dropdown

---

## 🛠️ Stack

| Tool            | Use                       |
| --------------- | ------------------------- |
| React 18        | UI components and routing |
| Tailwind CSS 3  | Utility-first styling     |
| React Router v6 | Page navigation           |
| React Icons     | Icon library              |

---

## 🚀 Run locally

```bash
git clone https://github.com/Xaida02/camping-guide.git
cd camping-guide
npm install
npm start
```

---

## 📁 Structure

```
src/
├── components/     # Navbar, SectionCamp, SectionInfo, Footer, Title, ScrollTop
├── pages/          # Home, About, Error
└── consts/         # Navigation links and site data
```

---

## 👤 Author

Made by **Tobías** — frontend developer.
[github.com/Xaida02](https://github.com/Xaida02)
