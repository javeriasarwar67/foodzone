# Foodie 🍽️ — Food Ordering Website

A responsive food ordering / restaurant website built with **React** and **Vite** as a university assignment project. It showcases a modern landing page, smooth in-page navigation, and a dedicated Contact Us page built with React Router.

## Features

- **Responsive landing page** with a rotating hero showcase, food categories, popular dishes grid, about section, chef spotlight, testimonials, and a newsletter signup
- **Smooth-scroll navigation** — Navbar links (Home, Categories, Menu, About) scroll to the matching section on the same page
- **Contact Us page** — a separate route (`/contact`) with a hero banner, contact info cards (Phone, WhatsApp, Email, Shop address), an embedded Google Map, and a working contact form
- **Persistent Navbar** — stays fixed at the top and looks/behaves identically across every page (Home and Contact Us), since it's rendered once at the app level, outside the page routes
- **Expandable search bar** in the navbar
- **CSS variables (theme colors)** — all brand colors (`--primary`, `--secondary`, `--dark`, etc.) are defined once in `src/index.css`, so the whole site's color scheme can be changed from a single place

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool & dev server
- [React Router](https://reactrouter.com/) — client-side routing (`/` and `/contact`)
- [React Icons](https://react-icons.github.io/react-icons/) — icon set
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Swiper](https://swiperjs.com/) — carousel/slider

