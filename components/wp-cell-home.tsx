'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight, Check, ChevronDown, CircleHelp, Gamepad2, Headphones,
  Menu, Search, ShieldCheck, ShoppingBag, Smartphone, Sparkles, Wallet, X, Zap,
} from 'lucide-react'

const categories = [
  { name: 'Semua', icon: Sparkles },
  { name: 'Pulsa & Data', icon: Smartphone },
  { name: 'Game', icon: Gamepad2 },
  { name: 'Streaming', icon: Headphones },
  { name: 'Voucher', icon: ShoppingBag },
  { name: 'E-Wallet', icon: Wallet },
]

const products = [
  { name: 'Netflix Premium', category: 'Streaming', label: 'N', tone: 'bg-primary text-primary-foreground', price: 'Rp38.000', note: 'Mulai dari', tag: 'Terlaris' },
  { name: 'Mobile Legends', category: 'Game', label: 'ML', tone: 'bg-foreground text-background', price: 'Rp3.200', note: '5 Diamonds', tag: 'Instan' },
  { name: 'Telkomsel', category: 'Pulsa & Data', label: 'T', tone: 'bg-secondary text-foreground', price: 'Rp10.900', note: 'Pulsa 10.000', tag: 'Populer' },
  { name: 'Spotify Premium', category: 'Streaming', label: 'S', tone: 'bg-primary text-primary-foreground', price: 'Rp19.000', note: '1 Bulan', tag: 'Hemat' },
  { name: 'Free Fire', category: 'Game', label: 'FF', tone: 'bg-secondary text-foreground', price: 'Rp7.500', note: '70 Diamonds', tag: 'Instan' },
  { name: 'Google Play', category: 'Voucher', label: 'GP', tone: 'bg-foreground text-background', price: 'Rp52.000', note: 'Voucher 50K', tag: 'Resmi' },
  { name: 'DANA', category: 'E-Wallet', label: 'D', tone: 'bg-primary text-primary-foreground', price: 'Rp20.500', note: 'Saldo 20.000', tag: 'Cepat' },
  { name: 'Vidio Platinum', category: 'Streaming', label: 'V', tone: 'bg-secondary text-foreground', price: 'Rp29.000', note: '30 Hari', tag: 'Baru' },
]

const faqs = [
  ['Berapa lama pesanan diproses?', 'Mayoritas pesanan diproses otomatis dalam 1–3 menit setelah pembayaran terverifikasi. Pada mockup ini, alur transaksi belum terhubung ke sistem nyata.'],
  ['Apakah produk di WP Cell bergaransi?', 'Ya. Setiap produk memiliki kebijakan garansi yang ditampilkan sebelum checkout. Tim bantuan siap membantu jika produk bermasalah.'],
  ['Metode pembayaran apa yang tersedia?', 'Rancangan mendukung transfer bank, QRIS, e-wallet, dan virtual account. Integrasi pembayaran akan ditambahkan pada tahap backend.'],
  ['Bagaimana cara mengecek status pesanan?', 'Nantinya status dapat dilacak menggunakan nomor invoice pada halaman Cek Pesanan, tanpa harus masuk ke akun.'],
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label="WP Cell beranda">
          <span className="grid size-8 place-items-center rounded-md bg-primary font-mono text-xs font-bold text-primary-foreground">WP</span>
          <span className="font-semibold tracking-tight">WP Cell</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex" aria-label="Navigasi utama">
          <a className="transition-colors hover:text-foreground" href="#produk">Produk</a>
          <a className="transition-colors hover:text-foreground" href="#cara-kerja">Cara kerja</a>
          <a className="transition-colors hover:text-foreground" href="#jaminan">Jaminan</a>
          <a className="transition-colors hover:text-foreground" href="#faq">Bantuan</a>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <button className="rounded-md px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Cek pesanan</button>
          <button className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90">Masuk</button>
        </div>
        <button onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-md border border-border md:hidden" aria-label="Buka menu" aria-expanded={open}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && <nav className="flex flex-col gap-1 border-t border-border px-5 py-4 md:hidden" aria-label="Navigasi mobile">
        {['Produk', 'Cara kerja', 'Jaminan', 'Bantuan', 'Cek pesanan'].map((item) => <a key={item} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm hover:bg-secondary" href={item === 'Produk' ? '#produk' : item === 'Cara kerja' ? '#cara-kerja' : item === 'Jaminan' ? '#jaminan' : '#faq'}>{item}</a>)}
      </nav>}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-32">
        <div className="flex flex-col items-start gap-7">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" /> PROSES OTOMATIS 24/7
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] md:text-7xl">Semua kebutuhan digital, <span className="text-primary">selesai seketika.</span></h1>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">Top up game, isi pulsa, dan nikmati layanan premium dengan harga transparan. Cepat, aman, tanpa alur yang rumit.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#produk" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Lihat semua produk <ArrowRight size={16} /></a>
            <a href="#cara-kerja" className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary">Cara membeli</a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {['Pembayaran aman', 'Harga transparan', 'Bantuan responsif'].map((text) => <span className="flex items-center gap-2" key={text}><Check size={14} className="text-primary" />{text}</span>)}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-8 bg-primary/5 blur-3xl" />
          <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div><p className="text-sm font-medium">Quick top up</p><p className="mt-1 text-xs text-muted-foreground">Selesaikan dalam tiga langkah</p></div>
              <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[10px] text-primary">ONLINE</span>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <div className="grid grid-cols-3 gap-2">
                {['ML', 'FF', 'PUBG'].map((game, index) => <button key={game} className={`rounded-lg border p-4 text-left transition-colors ${index === 0 ? 'border-primary bg-primary/5' : 'border-border hover:bg-secondary'}`}><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span><p className="mt-3 text-sm font-semibold">{game}</p></button>)}
              </div>
              <label className="flex flex-col gap-2 text-xs text-muted-foreground">User ID
                <div className="flex h-11 items-center rounded-md border border-input bg-background px-3 font-mono text-sm text-foreground">12345678 <span className="ml-auto text-muted-foreground">(1234)</span></div>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button className="rounded-md border border-primary bg-primary/5 p-3 text-left"><span className="text-xs text-muted-foreground">86 Diamonds</span><p className="mt-1 text-sm font-semibold">Rp20.000</p></button>
                <button className="rounded-md border border-border p-3 text-left hover:bg-secondary"><span className="text-xs text-muted-foreground">172 Diamonds</span><p className="mt-1 text-sm font-semibold">Rp39.500</p></button>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-4"><div><p className="text-xs text-muted-foreground">Total pembayaran</p><p className="mt-1 text-lg font-semibold">Rp20.000</p></div><button className="rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background">Lanjutkan</button></div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-lg border border-border bg-background p-3 shadow-xl sm:flex"><span className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary"><Zap size={17} /></span><div><p className="text-xs font-medium">Pesanan berhasil</p><p className="font-mono text-[10px] text-muted-foreground">00:00:43</p></div></div>
        </div>
      </div>
    </section>
  )
}

function Catalog() {
  const [active, setActive] = useState('Semua')
  const [query, setQuery] = useState('')
  const shown = useMemo(() => products.filter((p) => (active === 'Semua' || p.category === active) && p.name.toLowerCase().includes(query.toLowerCase())), [active, query])
  return (
    <section id="produk" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="flex flex-col gap-4 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
        <div><p className="section-label">KATALOG PILIHAN</p><h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">Mulai dari yang kamu butuhkan.</h2></div>
        <label className="flex h-11 w-full items-center gap-2 rounded-md border border-input bg-card px-3 md:w-72"><Search size={16} className="text-muted-foreground" /><span className="sr-only">Cari produk</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari produk digital..." className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" /></label>
      </div>
      <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter kategori">
        {categories.map(({ name, icon: Icon }) => <button key={name} role="tab" aria-selected={active === name} onClick={() => setActive(name)} className={`inline-flex shrink-0 items-center gap-2 rounded-md border px-3.5 py-2 text-sm transition-colors ${active === name ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-muted-foreground hover:text-foreground'}`}><Icon size={15} />{name}</button>)}
      </div>
      {shown.length > 0 ? <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((p) => <article key={p.name} className="group flex min-h-64 flex-col justify-between bg-card p-5 transition-colors hover:bg-secondary/70">
          <div className="flex items-start justify-between"><span className={`grid size-12 place-items-center rounded-lg font-mono text-sm font-bold ${p.tone}`}>{p.label}</span><span className="rounded-full border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">{p.tag}</span></div>
          <div className="mt-10"><p className="text-xs text-muted-foreground">{p.category}</p><h3 className="mt-1.5 text-lg font-semibold">{p.name}</h3><div className="mt-5 flex items-end justify-between"><div><p className="text-xs text-muted-foreground">{p.note}</p><p className="mt-1 font-mono text-sm font-semibold">{p.price}</p></div><button aria-label={`Pilih ${p.name}`} className="grid size-9 place-items-center rounded-md border border-border transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"><ArrowRight size={16} /></button></div></div>
        </article>)}
      </div> : <div className="mt-8 rounded-xl border border-dashed border-border py-16 text-center text-sm text-muted-foreground">Produk tidak ditemukan. Coba kata kunci lain.</div>}
    </section>
  )
}

function InfoSections() {
  return <>
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl md:grid-cols-3">
        {[['12K+', 'Pesanan diproses'], ['1–3 mnt', 'Rata-rata pengiriman'], ['4.9/5', 'Kepuasan pelanggan']].map(([value, label]) => <div key={label} className="border-b border-border px-5 py-8 md:border-b-0 md:border-r md:px-8 last:border-0"><p className="font-mono text-2xl font-semibold text-primary">{value}</p><p className="mt-2 text-sm text-muted-foreground">{label}</p></div>)}
      </div>
    </section>
    <section id="cara-kerja" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div><p className="section-label">CARA KERJA</p><h2 className="mt-4 max-w-md text-balance text-3xl font-semibold tracking-tight md:text-4xl">Tiga langkah. Tanpa drama.</h2><p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">Alur transaksi dirancang agar jelas dari pilihan produk sampai pesanan diterima.</p></div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {[['01', 'Pilih produk', 'Temukan layanan digital dan nominal yang kamu butuhkan.'], ['02', 'Bayar aman', 'Pilih metode pembayaran yang paling nyaman.'], ['03', 'Terima instan', 'Produk dikirim otomatis setelah pembayaran terverifikasi.']].map(([n, title, desc]) => <div className="bg-card p-6" key={n}><span className="font-mono text-xs text-primary">{n}</span><h3 className="mt-10 font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p></div>)}
        </div>
      </div>
    </section>
    <section id="jaminan" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 border-b border-border px-5 py-16 lg:border-b-0 lg:border-r lg:px-8 lg:py-24"><div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary"><ShieldCheck size={24} /></div><div><p className="section-label">JAMINAN WP CELL</p><h2 className="mt-4 max-w-lg text-balance text-3xl font-semibold tracking-tight md:text-4xl">Transaksi yang terasa tenang.</h2><p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">Setiap tahap dirancang dengan status yang jelas, harga tanpa kejutan, dan bantuan manusia ketika kamu membutuhkannya.</p></div></div>
        <div className="grid sm:grid-cols-2">{[[Zap, 'Proses otomatis', 'Sistem berjalan sepanjang hari untuk memproses pesanan.'], [ShieldCheck, 'Pembayaran aman', 'Konfirmasi jelas sebelum kamu menyelesaikan pembayaran.'], [CircleHelp, 'Bantuan responsif', 'Tim bantuan hadir jika transaksi tidak berjalan semestinya.'], [Check, 'Harga transparan', 'Nominal akhir ditampilkan tanpa biaya tersembunyi.']].map(([Icon, title, desc], i) => { const Comp = Icon as typeof Zap; return <div key={String(title)} className={`p-7 ${i < 2 ? 'border-b border-border' : ''} ${i % 2 === 0 ? 'sm:border-r sm:border-border' : ''}`}><Comp size={20} className="text-primary"/><h3 className="mt-8 text-sm font-semibold">{String(title)}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{String(desc)}</p></div>})}</div>
      </div>
    </section>
  </>
}

function Faq() {
  const [open, setOpen] = useState(0)
  return <section id="faq" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="section-label">PERTANYAAN UMUM</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Ada yang ingin ditanyakan?</h2><p className="mt-4 text-sm text-muted-foreground">Hubungi bantuan jika jawabanmu belum ada di sini.</p></div><div className="border-t border-border">{faqs.map(([q, a], i) => <div className="border-b border-border" key={q}><button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-medium" aria-expanded={open === i}>{q}<ChevronDown size={17} className={`shrink-0 text-muted-foreground transition-transform ${open === i ? 'rotate-180' : ''}`} /></button>{open === i && <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground">{a}</p>}</div>)}</div></div></section>
}

export function WpCellHome() {
  return <main><Header /><Hero /><Catalog /><InfoSections /><Faq /><section className="px-5 pb-20 lg:px-8 lg:pb-28"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-xl border border-primary/30 bg-primary p-7 text-primary-foreground md:flex-row md:items-center md:p-10"><div><p className="font-mono text-xs opacity-70">SIAP MULAI?</p><h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight">Satu tempat untuk semua kebutuhan digitalmu.</h2></div><a href="#produk" className="inline-flex h-11 shrink-0 items-center gap-2 rounded-md bg-primary-foreground px-5 text-sm font-semibold text-primary">Jelajahi produk <ArrowRight size={16}/></a></div></section><footer className="border-t border-border bg-card"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-4 lg:px-8"><div className="md:col-span-2"><div className="flex items-center gap-2.5"><span className="grid size-8 place-items-center rounded-md bg-primary font-mono text-xs font-bold text-primary-foreground">WP</span><span className="font-semibold">WP Cell</span></div><p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">Marketplace produk digital cepat, jelas, dan dapat diandalkan.</p></div><div><p className="text-sm font-semibold">Produk</p><div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><a href="#produk">Pulsa & Data</a><a href="#produk">Top up Game</a><a href="#produk">Akun Premium</a></div></div><div><p className="text-sm font-semibold">Bantuan</p><div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><a href="#faq">FAQ</a><a href="#">Cek Pesanan</a><a href="#">Hubungi Kami</a></div></div></div><div className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between lg:px-8"><p>© 2026 WP Cell. Frontend mockup.</p><p>Dirancang untuk transaksi yang lebih sederhana.</p></div></div></footer></main>
}
