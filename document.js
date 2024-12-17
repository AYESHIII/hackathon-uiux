// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Avion LTD</title>
        </Head>
        <body>
          <Main />
          <NextScript />
 
      {windowWidth < 550 ? <Smallheader /> : <Header />} 
        </body>
      </Html>
    );
  }
}
