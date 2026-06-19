# Place brand images here

The old Odoo image URLs are behind authentication (they returned **403**), so
they couldn't be fetched automatically. Download each from the old site while
it's still online and save it here with the **exact filename** below — the code
already references these paths and the images appear automatically (until then,
a graceful monogram/placeholder shows instead, so nothing looks broken).

| Filename (save as)            | Source URL on the old site |
| ----------------------------- | --- |
| `louis.jpg`                   | `https://www.packetflow.be/web/image/2258-47aac618/IMG-20240102-WA0062.jpg` |
| `louis.webp`                  | `https://www.packetflow.be/web/image/3266-973340da/IMG-20240102-WA0062.webp` |
| `sector-horeca.webp`          | `https://www.packetflow.be/web/image/3267-3deb200e/b%26b.webp` |
| `sector-vrije-beroepen.webp`  | `https://www.packetflow.be/web/image/3265-372dc538/vrije%20beroepen.webp` |
| `og-image.png`                | `https://www.packetflow.be/web/image/1488-3f1f0d8b/LD_logo_big.png` |

Tip: when logged into the old site, right-click → "Save image as", or use
`curl -o louis.jpg "<url>"` from a browser session that has the cookie.

## Partner badges

Drop partner logos in `public/images/partners/` (edit the list in
`src/data/partners.ts`). Defaults expected:

| Filename | Partner |
| --- | --- |
| `partners/microsoft.svg` | Microsoft Cloud Partner |
| `partners/pax8.svg` | Pax8 |

Until a logo exists, a clean text badge with the partner name shows instead.
