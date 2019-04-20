import ShareButtons from "./ShareButtons";

export default ({ title, subtitle, image, url, titleInImage }) => {
  return (
    <div className="title-section">
      <div className="title-info-container">
        <div className="title-info">
          <h1
            className="title-text"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className="subtitle"
            dangerouslySetInnerHTML={{
              __html: subtitle.replace("<p>", "").replace("</p>", "")
            }}
          />
          <div className="divider">...</div>
          <ShareButtons shareUrl={`https://bibleanswers.io${url}`} />
        </div>
      </div>
      <div
        className="cover-image-container"
        style={{
          backgroundImage: `url(${image ||
            "/static/images/header-placeholder.jpg"})`,
          backgroundPosition: "50% 50%"
        }}
      >
        {titleInImage ? <div className="title-in-image">{title}</div> : null}
      </div>
      <style jsx>{`
        .title-section {
          display: flex;
          margin: 0 65px;
        }

        .title-info-container {
          align-items: center;
          display: flex;
          width: calc(50% - 10px);
        }

        .title-info {
          margin-left: auto;
          max-width: 552px;
        }

        .title-text {
          font-size: 56px;
          font-weight: 500;
          line-height: 64px;
          margin: 0;
          margin-bottom: 16px;
        }

        .subtitle {
          color: rgba(0, 0, 0, 0.54);
          font-size: 23px;
          font-weight: 400;
          line-height: 28px;
          margin-bottom: 30px;
        }

        .divider {
          display: none;
        }

        .cover-image-container {
          align-items: center;
          background-size: cover;
          display: flex;
          height: 500px;
          margin-left: 20px;
          overflow: hidden;
          position: relative;
          width: calc(50% - 10px);
        }

        .title-in-image {
          color: #fff;
          font-family: Charter;
          font-size: 50px;
          left: 50%;
          position: absolute;
          text-align: center;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 75%;
        }

        @media screen and (max-width: 1199px) {
          .title-section {
            flex-direction: column;
            margin: 0;
          }

          .title-info-container {
            margin: 30px auto 0;
            max-width: 740px;
            width: calc(100% - 40px);
          }

          .title-info {
            margin-left: 0;
            max-width: none;
            padding: 0;
            width: 100%;
          }

          .title-text {
            font-size: 36px;
            font-weight: 500;
            line-height: 40px;
            margin-bottom: 8px;
          }

          .subtitle {
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 10px;
          }

          .divider {
            display: block;
            font-size: 35px;
            letter-spacing: 0.6em;
            text-align: center;
          }

          .cover-image-container {
            margin-left: 0;
            height: 400px;
            order: -1;
            width: 100%;
          }
        }

        @media screen (max-width: 767px) {
          .;
        }
      `}</style>
    </div>
  );
};
