import { Html, Head, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'

export default function Document(): ReactElement {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
// pages/_document.js
// pages/_document.tsx
// import Document, {
//   Html,
//   Head,
//   Main,
//   NextScript,
//   DocumentContext,
//   DocumentInitialProps
// } from 'next/document'
// import { ServerStyleSheets } from '@material-ui/core/styles'
// import React from 'react'

// class MyDocument extends Document {
//   static async getInitialProps(
//     ctx: DocumentContext
//   ): Promise<DocumentInitialProps & { styles: React.ReactNode }> {
//     // Render app and page and get the context of the page with collected side effects.
//     const sheets = new ServerStyleSheets()
//     const originalRenderPage = ctx.renderPage

//     ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: App => props => sheets.collect(<App {...props} />)
//       })

//     const initialProps = await Document.getInitialProps(ctx)
//     return {
//       ...initialProps,
//       // Styles fragment is rendered after the app and page rendering finish.
//       styles: [
//         ...React.Children.toArray(initialProps.styles),
//         sheets.getStyleElement()
//       ]
//     }
//   }

//   render(): React.ReactElement {
//     return (
//           <Html lang="en">
//       <Head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//     )
//   }
// }

// export default MyDocument
