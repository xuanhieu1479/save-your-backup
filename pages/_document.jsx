/* eslint-disable react/no-danger */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { Stylesheet, resetIds } from "@fluentui/react";

const stylesheet = Stylesheet.getInstance();

const CustomDocument = (props) => {
  // eslint-disable-next-line react/prop-types
  const { serializedStylesheet } = props;

  return (
    <Html>
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.FabricConfig = window.FabricConfig || {};
              window.FabricConfig.serializedStylesheet = ${serializedStylesheet};
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

CustomDocument.getInitialProps = async (ctx) => {
  resetIds();
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    serializedStylesheet: stylesheet.serialize(),
  };
};

export default CustomDocument;
