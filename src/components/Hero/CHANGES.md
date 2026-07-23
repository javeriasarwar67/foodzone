# Hero Orbit Animation — File Changes

Sab files `src/components/Hero/` ke andar jaati hain. Neeche har file
ke saamne likha hai ke wo **NAYI** hai, **MODIFY/REPLACE** honi hai,
ya **DELETE** karni hai.

## 🆕 NAYI FILES (add karein)

| File | Kaam |
|---|---|
| `dishesData.js` | 5 dishes ka data (naam, price, description, image) — sirf yahan edit karein agar dish add/change karni ho |
| `useDishRotation.js` | Custom hook — har 3.8 second baad `activeIndex` ko aage badhata hai, Previous/Next buttons ko bhi yahi control karta hai |
| `OrbitDishes.jsx` | Asal animation ka dil — 5 dishes ko orbit ke 5 slots (1 featured + 4 chhote) mein Framer Motion se position karta hai |
| `OrbitDishes.css` | Orbit stage, featured plate shadow, floating animation, rotating dashed ring, responsive scaling |

## ♻️ MODIFY / REPLACE (purani file ka content poora badal dein)

| File | Kya badla |
|---|---|
| `Hero.jsx` | Ab `useDishRotation` hook call karta hai aur `activeIndex`/`activeDish` ko HeroContent + HeroImage dono ko pass karta hai (isi se text aur image sync rehte hain) |
| `HeroContent.jsx` | Title/price/description ab active dish ke sath fade+slide animate hote hain (Framer Motion `AnimatePresence`); Previous/Next ab real buttons hain jo rotation control karte hain |
| `HeroImage.jsx` | Purana static `main-plate` + `ThumbCircle` hata kar naya `<OrbitDishes />` use karta hai |
| `DashedPath.jsx` | Purani S-curve ki jagah ab ek dashed **circle** hai jo continuously rotate hoti hai (orbit ring) |
| `Hero.css` | Purani `.thumb-1..4` / `.main-plate` / `.hero-food` classes hata di gayi (ab zaroorat nahi), `.hero-image` ka size fix kiya, Previous/Next buttons ki naya `.nav-link-btn` styling add ki |

## ❌ DELETE KAR DEIN

| File | Wajah |
|---|---|
| `ThumbCircle.jsx` | Ab use nahi ho raha — iski jagah `OrbitDishes.jsx` ne le li hai |

## ✅ Koi change nahi (waisi hi rehne dein)

- `QuantitySelector.jsx`

## Animation kaise kaam karti hai (short summary)

1. `useDishRotation` har 3.8s baad `activeIndex` ek number aage badhata hai
2. `OrbitDishes.jsx` har dish ki "slot distance" (active se kitni door) nikal kar uski target position, scale, opacity, z-index compute karta hai
3. Framer Motion ka `animate` prop automatically smooth spring transition karta hai jab bhi target values badalti hain — is se hi "expand + slide + shrink" wala effect banta hai
4. `HeroContent.jsx` same `activeIndex` se dish ka data leta hai aur text ko fade+slide se update karta hai — isi liye text aur image kabhi out-of-sync nahi hote
5. Dashed ring (`.orbit-ring-spin`) ek alag, hamesha chalne wali CSS animation hai — ye kabhi nahi rukti, chahe dishes ka swap ho ya na ho

## Chalane ka tareeqa
```
npm install
npm run dev
```
Koi naya npm package install karne ki zaroorat nahi — `framer-motion` aapke `package.json` mein already maujood hai.
