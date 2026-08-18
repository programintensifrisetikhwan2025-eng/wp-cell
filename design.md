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

## 11. Prinsip fondasi
1. **Hierarchy before decoration** — hierarki dibentuk melalui ukuran, kontras, whitespace, dan posisi sebelum memakai warna atau efek.
2. **One primary action** — setiap section atau panel hanya memiliki satu aksi berpenekanan tinggi.
3. **Dense but breathable** — informasi transaksi boleh padat, tetapi setiap kelompok harus dipisahkan oleh gap atau hairline yang konsisten.
4. **Quiet surfaces** — surface tidak bersaing dengan konten. Hindari gradient, glow, dan shadow dekoratif.
5. **Predictable interaction** — komponen dengan fungsi sama harus memiliki bentuk, posisi label, dan state yang sama.
6. **Token first** — dilarang menambahkan nilai warna, radius, shadow, atau spacing baru langsung di komponen tanpa memasukkannya ke sistem token.

## 12. Sistem spacing lengkap
Gunakan unit dasar 4px. Pilih token berdasarkan hubungan antar-elemen, bukan berdasarkan ruang yang kebetulan tersedia.

| Token | Nilai | Tailwind | Penggunaan |
|---|---:|---|---|
| `space-0` | 0px | `0` | Reset |
| `space-1` | 4px | `1` | Ikon dengan indikator kecil |
| `space-2` | 8px | `2` | Ikon–label, metadata rapat |
| `space-3` | 12px | `3` | Antar-control kecil, badge group |
| `space-4` | 16px | `4` | Padding mobile card, field group |
| `space-5` | 20px | `5` | Gutter mobile, card reguler |
| `space-6` | 24px | `6` | Antarblok di card, grid gap |
| `space-8` | 32px | `8` | Gutter desktop, subsection |
| `space-10` | 40px | `10` | Pemisah kelompok besar |
| `space-12` | 48px | `12` | Header section ke konten |
| `space-16` | 64px | `16` | Section compact |
| `space-20` | 80px | `20` | Section mobile standar |
| `space-24` | 96px | `24` | Section desktop compact |
| `space-28` | 112px | `28` | Section desktop standar |
| `space-32` | 128px | `32` | Hero/section dramatis |

### Aturan spacing
- Relasi paling dekat: ikon–teks `gap-2`; label–value `gap-1` atau `gap-2`.
- Item dalam satu kelompok: `gap-3` atau `gap-4`.
- Kelompok berbeda dalam satu card: `gap-5` atau `gap-6`.
- Card dalam grid: `gap-px` bila membentuk matrix hairline; selain itu `gap-4` mobile dan `gap-6` desktop.
- Heading section ke deskripsi: `gap-3`; header section ke konten: `gap-8` mobile dan `gap-12` desktop.
- Form field: label ke control `gap-2`; antar-field `gap-5`; tombol submit dari field terakhir `gap-6`.
- Jangan memakai margin individual untuk menyusun sibling. Parent wajib menggunakan `flex/grid` dan `gap-*`.
- Padding horizontal container tidak boleh digandakan oleh section dan child wrapper.
- Elemen yang sejajar dalam satu baris harus berbagi baseline atau `items-center`.

## 13. Layout dan container
### Container
- `container-sm`: maksimum 640px untuk form, FAQ copy, atau legal text.
- `container-md`: maksimum 960px untuk checkout dan content-focused page.
- `container-lg`: maksimum 1280px untuk homepage dan katalog.
- Gutter: 20px pada `<640px`, 24px pada `sm–md`, dan 32px mulai `lg`.
- Konten utama selalu berada di tengah; full-bleed hanya untuk background, border, atau ticker.

### Grid
- Gunakan 12 kolom desktop, 8 kolom tablet, dan 4 kolom mobile sebagai grid konseptual.
- Hero desktop: copy 7 kolom, panel 5 kolom.
- Katalog: 1 kolom mobile, 2 tablet, 3 laptop, maksimal 4 desktop.
- Hindari card yang span-nya berbeda kecuali ada alasan hierarki yang jelas.
- Minimum target sentuh 44×44px dan jarak antar-target minimum 8px.

### Breakpoint
- `sm` 640px: gutter dan form horizontal mulai diperbolehkan.
- `md` 768px: navigasi desktop, grid dua kolom.
- `lg` 1024px: hero split dan katalog tiga kolom.
- `xl` 1280px: katalog empat kolom dan spacing section penuh.

## 14. Aturan penggunaan card
Card dipakai hanya untuk mengelompokkan informasi atau aksi yang memiliki satu konteks. Jangan membungkus setiap section dalam card.

### Anatomi wajib
1. **Card header** — eyebrow/badge opsional, title, description, dan action opsional.
2. **Card content** — informasi utama dengan hierarki yang jelas.
3. **Card footer** — harga, status, atau aksi final; tidak wajib jika tidak ada aksi.
4. Gunakan struktur `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, dan `CardFooter` bila memakai shadcn Card.

### Varian card
- **Catalog card:** surface datar, hairline border, radius maksimal 12px; seluruh card boleh clickable jika hanya punya satu tujuan.
- **Feature card:** ikon + heading + deskripsi; tidak boleh berisi statistik palsu atau dekorasi tanpa fungsi.
- **Transaction card:** penekanan tertinggi, dapat memakai shadow halus; total dan CTA selalu berada di footer.
- **Promo card:** accent hanya pada badge, copy, atau CTA—bukan gradient penuh.
- **Testimonial card:** quote, identitas, dan konteks pembelian; hindari rating/review fiktif tanpa label mockup.
- **Empty-state card:** gunakan komponen `Empty`, satu pesan, satu bantuan, maksimal satu CTA.

### Ukuran dan padding card
- Compact: `p-4`, untuk kategori, quick action, atau metadata.
- Default: `p-5` mobile dan `p-6` desktop.
- Spacious: `p-6` mobile dan `p-8` desktop, hanya untuk hero/transaction card.
- Header–content `gap-5`; content–footer `gap-6`.
- Card dengan footer ber-border menggunakan `pt-5` setelah separator, bukan border dekoratif tambahan.

### State card
- **Default:** `bg-card`, `border-border`.
- **Hover:** surface naik satu tingkat ke `secondary`; border sedikit lebih kontras. Transform maksimal `translateY(-1px)`.
- **Focus-visible:** ring primary 2px dengan offset yang kontras.
- **Selected:** border primary dan tint primary maksimal 8%; jangan mengubah layout.
- **Disabled:** opacity 50–60%, cursor disabled, seluruh aksi dinonaktifkan.
- **Loading:** gunakan `Skeleton` dengan dimensi yang mempertahankan layout.
- **Error:** gunakan token destructive pada pesan/status saja, bukan mewarnai seluruh card.

### Larangan card
- Jangan menumpuk card di dalam card, kecuali panel transaksi membutuhkan satu subpanel ringkasan dengan surface yang lebih rendah.
- Jangan memakai border kiri berwarna sebagai aksen generik.
- Jangan mencampur lebih dari dua radius dalam satu card.
- Jangan membuat seluruh card clickable jika di dalamnya terdapat beberapa link/button berbeda.
- Jangan menggunakan card untuk teks panjang yang lebih tepat menjadi section biasa.

## 15. Hierarki tipografi
| Style | Ukuran | Weight | Line-height | Penggunaan |
|---|---:|---:|---:|---|
| Display | 48–72px | 600 | 1.02 | Hero desktop |
| H1 | 40–56px | 600 | 1.05 | Judul halaman |
| H2 | 30–40px | 600 | 1.10 | Judul section |
| H3 | 20–24px | 600 | 1.25 | Judul card/kelompok |
| Body-lg | 18px | 400 | 1.55 | Lead paragraph |
| Body | 16px | 400 | 1.55 | Copy standar |
| Body-sm | 14px | 400/500 | 1.50 | Metadata dan bantuan |
| Label | 12px | 500/600 | 1.40 | Eyebrow, badge, field label |

- Heading memakai `text-balance`; body panjang memakai `text-pretty`.
- Panjang paragraf ideal 55–75 karakter per baris.
- Harga utama boleh monospace; simbol mata uang tidak boleh lebih dominan dari nominal.
- Jangan memakai uppercase pada kalimat panjang atau tombol utama.

## 16. Button dan action hierarchy
- **Primary:** satu per konteks; untuk langkah maju, beli, lanjut, atau bayar.
- **Secondary:** aksi pendukung seperti lihat detail atau ubah pilihan.
- **Outline:** aksi netral dengan emphasis rendah.
- **Ghost:** aksi utilitas dalam navbar, card, atau toolbar.
- **Destructive:** hanya untuk aksi yang menghapus/membatalkan secara permanen.
- Ukuran: small 36px, default 44px, large 48px. Icon-only minimum 44px untuk area sentuh.
- Label harus berupa kata kerja yang spesifik: “Pilih paket”, “Lanjut pembayaran”, bukan “Klik di sini”.
- Loading menggunakan `Spinner`, label tetap menjelaskan proses, dan button `disabled`.
- Jangan menempatkan dua primary button berdampingan.

## 17. Form dan input
- Semua form memakai `FieldGroup` + `Field` saat komponen tersedia.
- Tinggi input default 44px; textarea minimum 112px.
- Label selalu terlihat; placeholder bukan pengganti label.
- Helper text berada di bawah control dan ringkas.
- Error muncul dekat field, memakai `aria-invalid` dan bahasa yang memberi solusi.
- Input prefix/suffix memakai `InputGroup`, bukan absolute positioning manual.
- Antar-field `gap-5`; field terkait rapat dapat berada dalam grid dengan `gap-4`.
- Disabled, read-only, filled, error, dan success harus dapat dibedakan tanpa bergantung pada warna saja.

## 18. Navigasi
- Navbar desktop memiliki tinggi 64–72px dan maksimal satu CTA utama.
- Active item ditandai kontras teks atau indikator 2px; hindari filled pill untuk semua item.
- Mobile memakai Sheet/Drawer dengan title tersembunyi untuk aksesibilitas.
- Breadcrumb digunakan mulai kedalaman dua level.
- Tabs dipakai untuk berpindah view setara; filter kategori yang banyak harus horizontal-scroll di mobile.
- Sticky navigation tidak boleh menutupi anchor target; sediakan scroll offset.

## 19. Status, feedback, dan overlay
- Success menggunakan primary acid-lime; warning dan destructive hanya saat benar-benar semantik.
- Toast untuk feedback singkat, Alert untuk informasi yang harus tetap terlihat.
- Dialog untuk keputusan penting; Sheet untuk detail kontekstual; Drawer untuk alur mobile.
- Semua overlay wajib memiliki title, tombol close ber-label, focus trap, dan dapat ditutup dengan Escape jika aman.
- Loading di bawah 300ms tidak perlu indikator; di atasnya gunakan spinner/skeleton tanpa menggeser layout.
- Empty state menjelaskan apa yang kosong dan tindakan berikutnya.

## 20. Border, elevation, dan density
- Border default 1px hairline dengan token `border`.
- Separator digunakan untuk membagi kelompok, bukan untuk mengisi ruang kosong.
- Maksimal tiga level surface: background → card → secondary/overlay.
- Shadow default dihindari. Overlay/transaction card boleh memakai satu shadow lembut ber-opacity rendah.
- Density compact hanya untuk tabel/toolbar; storefront dan form memakai density default.

## 21. Iconography
- Stroke konsisten 1.5–2px dan satu library per produk.
- Ukuran 16px untuk inline, 20px untuk control, 24px untuk feature.
- Ikon tidak boleh menjadi satu-satunya penjelas untuk aksi yang tidak umum; tambahkan label atau tooltip.
- Ikon dalam Button menggunakan `data-icon` dan mengikuti sizing komponen.
- Logo brand pihak ketiga harus memakai aset resmi dan tidak dimodifikasi warnanya tanpa izin.

## 22. Content design
- Gunakan Bahasa Indonesia yang natural, singkat, dan konsisten.
- Format harga: `Rp19.000`, tanpa desimal untuk rupiah.
- Gunakan “Anda” untuk instruksi formal atau hilangkan subjek untuk UI ringkas.
- Nama kategori konsisten: “Pulsa & Data”, “Akun Premium”, “Voucher Game”, “E-wallet”.
- Jangan menampilkan urgensi palsu, stok palsu, countdown manipulatif, atau testimoni sebagai fakta pada mockup.
- Labeli data contoh dengan jelas bila berpotensi disangka sebagai data nyata.

## 23. Aksesibilitas detail
- Target WCAG 2.2 AA.
- Kontras teks normal minimum 4.5:1; teks besar 3:1; komponen UI 3:1.
- Semua interaksi dapat dijalankan dengan keyboard dan urutan tab mengikuti urutan visual.
- Focus-visible tidak boleh dihapus.
- Area sentuh minimum 44×44px.
- Ikon dekoratif memakai `aria-hidden`; gambar informatif memiliki alt yang spesifik.
- Motion mengikuti `prefers-reduced-motion`.
- Error tidak disampaikan hanya melalui warna; sertakan teks atau ikon dengan label.

## 24. Checklist implementasi
### Sebelum membuat komponen
- Tentukan tujuan, hierarchy, primary action, dan state yang dibutuhkan.
- Cari komponen shadcn yang tersedia sebelum membuat markup custom.
- Pastikan token yang dibutuhkan sudah tersedia.

### Sebelum merge
- Tidak ada warna hex/raw Tailwind color di komponen.
- Tidak ada `space-*`, arbitrary spacing, atau margin sibling yang dapat diganti `gap-*`.
- Card mengikuti anatomi, padding, radius, dan state yang ditetapkan.
- Desktop dan mobile telah diperiksa pada breakpoint utama.
- Focus, hover, disabled, loading, empty, dan error telah dipertimbangkan.
- Heading berurutan dan seluruh kontrol memiliki accessible name.
- Tidak ada overflow horizontal atau layout shift yang terlihat.
- Konten contoh tidak dipresentasikan sebagai data nyata.
