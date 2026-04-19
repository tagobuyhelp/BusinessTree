# 🌿 Business Tree — Brand Fonts & Colors Guideline

## 🎨 Color System

### 🌳 Primary Colors (Core Identity)

| Name                      | Hex       | Usage                         |
| ------------------------- | --------- | ----------------------------- |
| Forest Green (Primary)    | `#0F3D2E` | Headers, Navbar, Key Sections |
| Growth Green (Secondary)  | `#2E7D32` | Cards, Icons, Highlights      |
| Leaf Green (Accent / CTA) | `#4CAF50` | Buttons, Links, CTA           |


### 🍃 Supporting Colors

| Name          | Hex       | Usage                          |
| ------------- | --------- | ------------------------------ |
| Mint Light    | `#A5D6A7` | Hover states, soft backgrounds |
| Soft Green BG | `#E8F5E9` | Section backgrounds            |


### ⚪ Neutral Colors (Balance & Readability)

| Name           | Hex       | Usage              |
| -------------- | --------- | ------------------ |
| Background     | `#F8FAFC` | Main background    |
| Surface        | `#FFFFFF` | Cards, containers  |
| Border         | `#E5E7EB` | Dividers, outlines |
| Text Primary   | `#1B1B1B` | Main text          |
| Text Secondary | `#6B7280` | Subtext            |



### 🎯 CTA & State Colors

| State    | Color     |
| -------- | --------- |
| Default  | `#4CAF50` |
| Hover    | `#43A047` |
| Active   | `#2E7D32` |
| Disabled | `#A5D6A7` |



### ⚠️ Semantic Colors

| Type    | Color     |
| ------- | --------- |
| Success | `#22C55E` |
| Warning | `#F59E0B` |
| Error   | `#EF4444` |
| Info    | `#0284C7` |


## 🎨 Color Usage Rules

* **60%** → Neutral (background, whitespace)
* **30%** → Primary/Secondary greens
* **10%** → Accent (CTA only)

### ✅ Do:

* Use dark green for authority sections
* Use bright green only for actions
* Maintain contrast for accessibility (WCAG AA+)

### ❌ Don’t:

* Overuse bright green
* Mix too many shades randomly
* Use neon green tones



# 🔤 Typography System

## 🧠 Font Pairing Strategy

| Type     | Font                        | Purpose            |
| -------- | --------------------------- | ------------------ |
| Headings | Playfair Display / Garamond | Premium, authority |
| Body     | Inter / Open Sans           | Clean, readable UI |



## 🔠 Font Scale

| Element    | Size    | Weight    |
| ---------- | ------- | --------- |
| H1         | 48–56px | Bold      |
| H2         | 36–40px | Semi-Bold |
| H3         | 28–32px | Semi-Bold |
| H4         | 22–24px | Medium    |
| Body Large | 18px    | Regular   |
| Body       | 16px    | Regular   |
| Small      | 14px    | Regular   |
| Label      | 12–13px | Medium    |



## 📏 Line Height & Spacing

* Headings: `1.2 – 1.3`
* Body: `1.5 – 1.7`
* Paragraph spacing: `16px – 24px`



## 🔡 Typography Usage Rules

### Headings

* Use serif font for strong brand presence
* Keep concise and impactful

### Body Text

* Use sans-serif for readability
* Max width: **680px**

### UI Labels

* Uppercase (optional)
* Slight letter spacing (`0.5px`)



## 🎯 Font Hierarchy Example


H1 → World’s Fastest Growing Digital Agency
H2 → Our Services
H3 → SEO Optimization
Body → We help businesses scale globally...




## ⚠️ Typography Do’s & Don’ts

### ✅ Do:

* Maintain consistent hierarchy
* Use spacing for readability
* Keep contrast high

### ❌ Don’t:

* Use more than 2 font families
* Overuse bold
* Use decorative fonts in UI



# 🎯 Accessibility Guidelines (WCAG)

* Minimum contrast ratio: **4.5:1**
* Avoid green text on light green backgrounds
* Use font size ≥ 16px for body text
* Ensure CTA buttons are clearly visible



# 💻 Tailwind Config (Optional)

```js
theme: {
  extend: {
    colors: {
      primary: '#0F3D2E',
      secondary: '#2E7D32',
      accent: '#4CAF50',
      mint: '#A5D6A7',
      bg: '#F8FAFC',
      textPrimary: '#1B1B1B',
    },
    fontFamily: {
      heading: ['Playfair Display', 'serif'],
      body: ['Inter', 'sans-serif'],
    }
  }
}


# 🔥 Brand Feel Summary

* 🌿 Nature-inspired but **corporate**
* 📈 Growth-focused, not eco-only
* 🧠 Clean, modern, data-driven
* 💼 Premium, not playful


