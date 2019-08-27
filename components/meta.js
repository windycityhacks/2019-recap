import Head from 'next/head'

export default ({
  title = 'Windy City Hacks – Chicago’s high school hackathon',
  description = 'June 22-23, 2019, 160 hackers came together for Chicago\'s high school hackathon.',
  image = 'https://windyhacks.com/card_1.png',
  url = 'https://windyhacks.com'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Windy City Hacks" />
    <meta name="twitter:site" content="@windyhacks" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="theme-color" content="#007a87" />
    <link
      rel="shortcut icon"
      href="https://windyhacks.com/favicon.ico"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://windyhacks.com/flag-bright.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://windyhacks.com/flag-bright.png"
    />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#fff" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="apple-mobile-web-app-title" content="@windyhacks/site" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'windyhacks',
        url: 'https://windyhacks.com.com',
        logo: 'https://windyhacks.com/flag-bright.png',
        sameAs: [
          'https://twitter.com/windyhacks',
          'https://www.instagram.com/windycityhacks',
          'https://www.facebook.com/windyhacks'
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'team@windyhacks.com',
            contactType: 'customer support',
            url: 'https://windyhacks.com'
          }
        ]
      })}}
    />
  </Head>
)

