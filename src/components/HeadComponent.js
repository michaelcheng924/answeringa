import Head from "next/head";

const HeadComponent = ({ image, showMenu, title, subtitle, url }) => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        <meta charSet="utf-8" />

        <link rel="icon" type="image/png" href="/static/favicon.png" />

        <title>
          {title.indexOf("Answering Abortion") !== -1
            ? title
            : `${title} | Answering Abortion`}
        </title>

        <meta name="description" content={subtitle} />

        <link rel="canonical" href={`https://answeringabortion.com${url}`} />

        <meta
          property="og:url"
          content={`https://answeringabortion.com${url}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:image" content={image} />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-138650935-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-138650935-1');`,
          }}
        />
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: "Bebas Neue";
          src: url("/static/fonts/bebas-neue-bold.ttf");
          font-weight: bold;
        }

        @font-face {
          font-family: "Proxima Nova";
          src: url("/static/fonts/proxima-nova-regular.ttf");
        }

        @font-face {
          font-family: "Proxima Nova";
          src: url("/static/fonts/proxima-nova-light.otf");
          font-weight: 100;
        }

        @font-face {
          font-family: "Proxima Nova";
          src: url("/static/fonts/proxima-nova-bold.otf");
          font-weight: bold;
        }

        @font-face {
          font-family: "Proxima Nova";
          src: url("/static/fonts/proxima-nova-semibold.otf");
          font-weight: 500;
        }

        html,
        body {
          overflow-x: hidden;
        }

        .bebas {
          font-family: "Bebas Neue", "Helvetica Neue", sans-serif;
          font-weight: bold;
        }

        body {
          background: #fff;
          color: rgba(0, 0, 0, 0.84);
          font-family: "Proxima Nova", sans-serif;
          font-size: 21px;
          letter-spacing: -0.003em;
          line-height: 1.58;
          height: 100%;
          margin: 0;
          position: relative;
          ${showMenu ? "overflow-y: hidden;" : ""};
        }

        h1 {
          font-size: 42px;
          font-weight: 500;
          line-height: 1.25;
          margin: 0;
        }

        h2 {
          clear:both;
          font-size: 34px;
          font-weight: 500;
          letter-spacing: -0.015em;
          line-height: 1.15;
          margin: 0;
          margin-top: 56px;
        }

        h3 {
          clear:both;
          font-size: 26px;
          font-weight: 500;
          letter-spacing: -0.012em;
          line-height: 1.22;
          margin: 0;
          margin-top: 30px;
        }

        .paragraph {
          display: block;
          font-family: "Charter", serif;
        }

        h4,
        p,
        .paragraph,
        ol,
        ul,
        blockquote,
        .image {
          font-weight: 400;
          font-size: 21px;
          letter-spacing: -0.003em;
          line-height: 1.58;
          margin: 0;
          margin-top: 29px;
        }

        h4 {
          font-weight: 600;
        }

        h1 + p,
        h2 + h3,
        h2 + h4,
        h2 + p,
        h2 + ol,
        h2 + ul,
        h2 + blockquote,
        h3 + h4,
        h3 + p,
        h3 + ol,
        h3 + ul,
        h3 + blockquote,
        h4 + p,
        h4 + ol,
        h4 + ul,
        h4 + blockquote {
          margin-top: 8px;
        }

        h2:first-child {
          margin-top: 0;
        }

        ol,
        ul {
          padding: 0 40px;
        }

        li {
          margin-bottom: 10px;
        }

        li:last-child {
          margin-bottom: 0;
        }

        blockquote {
          border-left: 3px solid rgba(0, 0, 0, 0.84);
          font-style: italic;
          left: -20px;
          padding-left: 20px;
          position: relative;
        }

        table {
          border-spacing: 0;
          margin: 30px 10px 0;
        }

        thead {
          background: #c62828;
          color: #fff;
          font-weight: bold;
        }

        th,
        td {
          padding: 10px 20px;
          white-space: nowrap;
        }

        tr:nth-child(even) {
          background: #ffebee;
        }

        .first {
          margin-top: 8px;
        }

        .nomargin {
          margin-top: 0;
        }

        .bold {
          font-weight: bold;
        }

        .indent {
          margin-left: 30px;
        }

        .italic {
          font-style: italic;
        }

        .margin-top-default {
          margin-top: 29px;
        }

        a,
        .link {
          color: #689f38;
          cursor: pointer;
          text-decoration: none;
        }

        a:not([href]) {
          color: rgba(0, 0, 0, 0.84);
        }

        .gray {
          color: #757575;
        }

        .center {
          text-align: center;
        }

        .p-20 {
          padding: 20px;
        }

        .px-20 {
          padding-left: 20px;
          padding-right: 20px;
        }

        .py-20 {
          padding-bottom: 20px;
          padding-top: 20px;
        }

        .d-flex {
          align-items: center;
          display: flex;
        }

        .flex-wrap {
          flex-wrap: wrap;
        }

        .justify-content-center {
          justify-content: center;
        }

        .pn-light {
          font-weight: 100;
        }

        .superscript {
          font-size: 14px;
          position: relative;
          top: -6px;
        }

        @media (max-width: 767px) {
          h1 {
            font-size: 34px;
          }

          h2 {
            font-size: 30px;
            margin-top: 28px;
          }

          h2:first-child {
            margin-top: 28px;
          }

          h3 {
            font-size: 24px;
            margin-top: 22px;
          }

          body {
            font-size: 18px;
            letter-spacing: -0.004em;
          }

          p,
          ol,
          ul,
          blockquote {
            font-size: 18px;
            letter-spacing: -0.004em;
            margin-top: 21px;
          }

          .margin-top-default {
            margin-top: 21px;
          }

          .scripture-verse {
            font-size: 14px;
            top: -3px;
          }
        }

        .TextField > div,
        .TextField > div > div,
        .TextField > div > div > div {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default HeadComponent;
