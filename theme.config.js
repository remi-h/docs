export default {
  github: 'https://github.com/remi-h/docs',
  docsRepositoryBase: 'https://github.com/remi-h/docs/main',
  titleSuffix: ' â REMI',
  logo: (
    <>
      <span className="mr-2 font-extrabold md:inline">ð¸ðª</span>
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
      <meta property="description" content="æ¶æããã¹ã¦ã§ã¼ãã³çç«å·¥ç§å¤§å­¦ã¸äº¤æçå­¦ãæ¥å¸¸ãã¾ã¨ãã¦ããã" />
      <meta property="og:description" content="ã¹ã¦ã§ã¼ãã³ã«äº¤æçå­¦ä¸­ã®æ¶æçããã¹ã¦ã§ã¼ãã³ã®æ®ãããæè¡ãçå­¦ã«ã¤ãã¦ã¾ã¨ãã¦ãããµã¤ãã" />
      <meta property="og:title" content="REMI in Sweden" />
      <meta property="og:image" content="https://remiinsweden.vercel.app/og.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://remiinsweden.vercel.app/og.jpg" />
      <meta name="twitter:url" content="https://remiinsweden.vercel.app/" />
      <meta name="apple-mobile-web-app-title" content="Remið¸ðª" />
      <meta name="google-site-verification" content="cjQqQ-GBrTIMjkLSTYKUDTfGOp8vZzyiQXn7XBsK1nE" />
      <link rel="stylesheet" href="style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />

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
  search: false,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: false,
  footerText: <>MIT {new Date().getFullYear()} Â© REMI.</>,
  unstable_faviconGlyph: 'ð¸ðª',
}
