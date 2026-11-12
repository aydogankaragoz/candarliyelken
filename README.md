# Çandarlı Yelken: yeni web sitesi

Çandarlı Yelken ve Su Sporları Spor Kulübü için candarliyelken.org.tr’nin içeriğiyle sıfırdan tasarlanmış yeni site.

## Çalıştırma

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # statik çıktı: dist/
npm run preview
```

`dist/` klasörü herhangi bir statik barındırmaya (Netlify, Cloudflare Pages, GitHub Pages ya da mevcut sunucu) olduğu gibi yüklenebilir.

## Yapı

| Yol | İçerik |
| --- | --- |
| `src/data/site.ts` | Kulüp bilgileri, 2026 programları ve ücretleri, sporcu yolu, ADB adımları, haberler, belgeler |
| `src/data/gallery.ts` | 46 galeri fotoğrafının yılı ve açıklaması |
| `src/assets/` | Eski siteden indirilen fotoğraflar (derlemede AVIF/WebP’ye çevrilir) |
| `public/docs/` | Program broşürleri ve tüzük (PDF) |
| `src/components/SailCourse.astro` | Kaydırdıkça sayfa boyunca süzülen optimist ve bölüm şamandıraları |
| `src/components/Journey.astro` | Yaz okulundan yarış takımına giden, kaydırmaya bağlı rota |
| `src/components/Wind.astro` | Open-Meteo’dan anlık Çandarlı rüzgârı ve deniz sıcaklığı |

İçerik güncellemek için çoğunlukla yalnızca `src/data/site.ts` düzenlenir.

## Teknoloji

Astro 7 (statik, sıfıra yakın JS), CSS scroll-driven animations, View Transitions API, Popover API, `<dialog>`, `interpolate-size`, oklch renkleri, kendi sunucusundan yüklenen Fraunces ve Source Sans 3 değişken fontları. Tüm hareketler `prefers-reduced-motion` ayarına uyar.

## Yayınlama (GitHub Pages)

Site https://aydogankaragoz.github.io/candarliyelken/ adresinde yayında. Güncellemek için:

```sh
npm run deploy   # derler ve dist/ klasörünü gh-pages dalına gönderir
```
