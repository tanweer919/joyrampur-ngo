import Document, { Html, Head, Main, NextScript } from "next/document";
import info from "../data/info.json";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta name="application-name" content="Joyrampur Society" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="JME" />
          <meta
            name="keywords"
            content="Joyrampur, Joyrampur Society, JOYRAMPUR MODERN EDUCATION AND CHARITABLE SOCIETY, Joyrampur Modern Education and Charitable Society, Joyrampur Modern Education, Utkarsh, ndlm, Projects, Education, Skill development"
          ></meta>
          <meta name="description" content={info.description} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#3366ff" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#3366ff" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:url" content={info.baseUrl} />
          <meta name="twitter:title" content={info.name} />
          <meta name="twitter:description" content={info.description} />
          <meta name="twitter:image" content="/logo.png" />
          <meta name="twitter:creator" content={info.twitter} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={info.name} />
          <meta property="og:description" content={info.description} />
          <meta property="og:site_name" content={info.name} />
          <meta property="og:url" content={info.baseUrl} />
          <meta property="og:image" content="/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
