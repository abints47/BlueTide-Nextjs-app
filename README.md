# 🌊 BlueTide

BlueTide is a travel and lifestyle blog built with **Next.js**, sharing stories from the shoreline — hidden beaches, slow mornings, and everyday rituals that make life feel a little more like a getaway. Blog content is authored in Markdown, and the site includes a working contact form backed by a real database.

## 🌐 Live Demo

👉 https://beach-bluetide.vercel.app/

## ✨ Features

- 📝 Blog powered by local Markdown files — add a post by dropping in a `.md` file, no code changes needed
- 🖼️ Cover images per post, rendered with `next/image`
- 🧭 Dynamic routing — every post gets its own page automatically (`/blog/[slug]`)
- 📬 Working contact form — submissions are saved to a real database
- ❓ FAQ accordion section
- 📱 Fully responsive, minimal design
- ⚡ Fast performance with Next.js static generation

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **gray-matter** + **remark** — Markdown parsing and rendering
- **Prisma ORM**
- **Neon** (serverless Postgres)
- **Vercel** (Deployment)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- A Neon (or other Postgres) database connection string

### Installation

Clone the repository:
```bash
git clone https://github.com/<your-username>/bluetide-nextjs-app.git
```

Navigate to the project directory:
```bash
cd bluetide-nextjs-app
```

Install dependencies:
```bash
npm install
```

Set up your environment variables — create a `.env` file at the project root:
```env
DATABASE_URL=your_postgres_connection_string
```

Push the database schema:
```bash
npx prisma db push
```

Start the development server:
```bash
npm run dev
```

Open your browser and visit:

http://localhost:3000

## 📂 Project Structure

bluetide-nextjs-app/
├── app/
│   ├── page.tsx              # Landing page
│   ├── blog/
│   │   ├── page.tsx          # Blog listing
│   │   ├── [slug]/page.tsx   # Individual post page
│   ├── about/page.tsx        # About page
│   ├── contact/page.tsx      # Contact form
│   ├── api/contact/route.ts  # API route — saves contact submissions
├── lib/
│   ├── posts.ts               # Markdown parsing logic
│   ├── prisma.ts               # Prisma client instance
├── posts/                      # Blog post content (.md files)
├── prisma/
│   └── schema.prisma           # Database schema
├── public/
│   └── images/                 # Post covers, hero images
└── README.md

## 🚀 Deployment

The project is deployed on **Vercel**, with a **Neon** Postgres database connected via the Vercel Storage integration.

**Live Website:**
https://beach-bluetide.vercel.app/

## 📸 Screenshots

> Add screenshots of your application here.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to fork the repository and submit a pull request.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ using Next.js.