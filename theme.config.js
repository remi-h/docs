export default {
  github: 'https://github.com/remi-h/docs',
  docsRepositoryBase: 'https://github.com/remi-h/docs/main',
  titleSuffix: ' – Remi in Sweden',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">🇸🇪</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        REMI in SWEDEN
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="ja" />
      <meta name="description" content="慶應からスウェーデン王立工科大学へ交換留学。日常をまとめていく。" />
      <meta name="og:description" content="スウェーデンに交換留学中の慶應生が、スウェーデンの暮らしや旅行、留学についてまとめているサイト。" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:url" content="https://remiinsweden.vercel.app/" />
      <meta name="og:title" content="REMI in Sweden" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Remi🇸🇪" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: false,
  footerText: <>MIT {new Date().getFullYear()} © REMI.</>,
  unstable_faviconGlyph: '🇸🇪',
}
