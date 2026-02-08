Furniture Landing Page

Website landing page furniture berbasis React JS dengan data diambil dari API dan tampilan mengikuti desain Figma yang diberikan.

Deskripsi Proyek

Project ini merupakan landing page untuk website furniture yang menampilkan beberapa section seperti Hero, About, Features, Products, Testimonials, Newsletter, dan Footer. Data produk dan testimonial diambil dari API.

Tujuan project:

Menampilkan data furniture dari API

Mengikuti desain Figma

Responsif untuk desktop dan mobile

Menerapkan validasi dan sanitasi input

Menggunakan struktur project yang rapi

Teknologi

React JS

Vite

Tailwind CSS

Axios

Custom Hooks

Struktur Folder
src/
 ├── api/
 ├── components/
 │    ├── layout/
 │    ├── sections/
 │    └── ui/
 ├── hooks/
 ├── pages/
 ├── utils/
 ├── styles/
 ├── App.jsx
 └── main.jsx

Fitur

Menampilkan produk dari API

Menampilkan testimonial dari API

Navigasi navbar ke setiap section

Desain responsif

Loader saat proses fetch data

Form newsletter dengan validasi email

Security Considerations

Validasi input email menggunakan regex

Sanitasi input untuk mencegah karakter berbahaya

Tidak menyimpan data sensitif di client

Tidak menggunakan dangerouslySetInnerHTML

SEO dan Aksesibilitas

Menggunakan semantic HTML

Struktur heading terorganisir

Meta tag pada index.html

Alt text pada gambar

Deployment

Project dideploy menggunakan Vercel.

Author

Nama: (isi nama kamu)
Batch: Front-End React Batch 3
