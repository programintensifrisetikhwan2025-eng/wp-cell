# WP Cell — Design Rules

## 1. Arah visual
WP Cell menggunakan bahasa visual **precision commerce** yang terinspirasi dari kedisiplinan produk Linear: gelap, tenang, cepat dibaca, dan dibangun di atas grid. Acid-lime hanya dipakai untuk aksi utama, status aktif, serta sinyal keberhasilan. Hindari warna kategori yang ramai, gradient dekoratif, efek kaca berlebihan, dan kartu yang terlalu membulat.

## 2. Palet warna
Gunakan token semantik, bukan warna langsung pada komponen.

| Token | Nilai | Fungsi |
|---|---|---|
| `background` | `#080A09` | Kanvas utama |
| `card` / `secondary` | `#0F1210` / `#171A17` | Surface dan hover |
| `foreground` | `#F2F5F0` | Teks utama |
| `muted-foreground` | `#90978E` | Teks pendukung |
| `primary` | `#B7F34B` | CTA, status aktif, fokus |
| `border` | putih 10% | Hairline separator |

Total sistem visual memakai 5 warna inti: midnight, graphite, off-white, muted gray, acid-lime. Status error boleh memakai token `destructive` hanya saat diperlukan.

## 3. Tipografi
- Keluarga utama: Geist Sans (`font-sans`).
- Data, nomor transaksi, label sistem: Geist Mono (`font-mono`).
- Heading: bobot 600, tracking rapat antara `-0.025em` sampai `-0.055em`, line-height 1.02–1.15.
- Body: minimum 14px, line-height 1.5–1.65.
- Eyebrow/section label: 11–12px, uppercase, monospace, tracking 0.14em, warna primary.
- Maksimal dua font family.

## 4. Grid dan spacing
- Content container: maksimum 1280px (`max-w-7xl`).
- Gutter: 20px mobile, 32px desktop.
- Section rhythm: 80px mobile, 112px desktop.
- Gunakan skala Tailwind standar dan `gap-*`; jangan memakai `space-*`.
- Flexbox adalah default. Grid digunakan untuk katalog dan layout dua dimensi.
- Hairline border menjadi alat utama untuk mengelompokkan informasi.

## 5. Radius dan surface
- Input/button: 6px (`rounded-md`).
- Logo/product mark: 8px (`rounded-lg`).
- Panel utama: 12px (`rounded-xl`).
- Tidak menggunakan pill kecuali badge/status kecil.
- Shadow hanya untuk panel transaksi yang benar-benar perlu terangkat; kartu katalog tetap datar.

## 6. Komponen
### Button
- Primary: acid-lime dengan teks midnight.
- Secondary: surface gelap dengan border hairline.
- Neutral high-emphasis: off-white dengan teks midnight.
- Tinggi kontrol utama 44px; focus ring harus terlihat.

### Product card
- Satu surface datar, dipisahkan gap 1px berwarna border.
- Memuat brand mark, kategori, nama, konteks harga, harga, badge, dan tombol arah.
- Hover mengubah surface sedikit dan menonjolkan tombol arah dengan primary.

### Input
- Surface background, border `input`, tinggi 44px.
- Placeholder memakai muted foreground.
- Tidak menghilangkan focus outline tanpa pengganti.

### Badge
- Monospace 10–12px.
- Border tipis atau tint primary 10%; tidak memakai banyak warna status.

## 7. Ikon dan imagery
- Gunakan ikon outline Lucide pada ukuran 14, 16, 20, atau 24px.
- Jangan gunakan emoji sebagai ikon.
- Product mark boleh berupa monogram tipografis untuk mockup; aset merek resmi baru ditambahkan setelah ada izin/aset final.
- Jangan menggunakan blob, orb, atau shape abstrak sebagai filler.

## 8. Motion
- Transisi 150–220ms untuk color, transform, dan accordion.
- Gerakan dipakai untuk memberi feedback, bukan dekorasi.
- Hormati `prefers-reduced-motion` dengan mematikan animation dan mengurangi transition.

## 9. Responsivitas
- Mobile-first.
- Navbar menjadi menu vertikal pada layar di bawah `md`.
- Filter kategori tetap satu baris dan dapat digeser horizontal.
- Katalog: 1 kolom mobile, 2 kolom tablet, 4 kolom desktop.
- Hero panel turun ke bawah copy pada tablet/mobile.
- Tidak boleh ada overflow horizontal di viewport.

## 10. Aksesibilitas dan konten
- Kontras teks memenuhi WCAG AA.
- Semua tombol ikon memiliki accessible name.
- Status selected/expanded memakai `aria-selected` / `aria-expanded`.
- Heading mengikuti urutan `h1 → h2 → h3`.
- Bahasa UI ringkas, aktif, dan transparan; hindari klaim absolut yang belum didukung sistem nyata.
- Mockup harus menandai bahwa transaksi, login, dan pembayaran belum aktif.
