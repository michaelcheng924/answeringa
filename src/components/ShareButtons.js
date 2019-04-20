// import {
//   FacebookShareButton,
//   FacebookIcon,
//   TwitterShareButton,
//   TwitterIcon
// } from "react-share";

export default ({ shareUrl }) => {
  return (
    <div className="share-buttons">
      {/* <div className="share-button">
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon round size={32} />
        </FacebookShareButton>
      </div>
      <div className="share-button" style={{ marginLeft: 20 }}>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon round size={32} />
        </TwitterShareButton>
      </div> */}

      <style jsx>{`
        .share-buttons {
          margin-top: 20px;
        }

        .share-button {
          cursor: pointer;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};
