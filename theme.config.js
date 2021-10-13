export default {
  github: 'https://github.com/remi-h/docs',
  docsRepositoryBase: 'https://github.com/remi-h/docs/main',
  titleSuffix: ' – REMI',
  logo: (
    <>
      <span className="mr-2 font-extrabold md:inline">🇸🇪</span>
      <span className="text-gray-600 font-normal md:inline">
        REMI in Stockholm
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="ja" />
      <meta property="description" content="慶應からスウェーデン王立工科大学へ交換留学。日常をまとめていく。" />
      <meta property="og:description" content="スウェーデンに交換留学中の慶應生が、スウェーデンの暮らしや旅行、留学についてまとめているサイト。" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content="https://remiinsweden.vercel.app/og.jpg" />
      <meta property="twitter:url" content="https://remiinsweden.vercel.app/" />
      <meta property="og:title" content="REMI in Sweden" />
      <meta property="og:image" content="https://remiinsweden.vercel.app/og.jpg" />
      <meta name="apple-mobile-web-app-title" content="Remi🇸🇪" />
      <link rel="stylesheet" href="style.css" />
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
