import { Link } from "../../routes";

export default () => (
  <div className="footer">
    <span>© 2019 Answering Abortion</span>
    {` | `}
    <span>
      <a href="/static/sitemap.xml">sitemap</a>
    </span>
    {` | `}
    <span>
      <Link route="/privacy-policy">
        <a>Privacy Policy</a>
      </Link>
    </span>
    {` | `}
    <span>
      <Link route="/terms-of-service">
        <a>Terms of Service</a>
      </Link>
    </span>
    <style jsx>{`
      .footer {
        background: #353433;
        color: #fff;
        padding: 10px 20px;
        text-align: center;
      }

      a {
        color: #fff;
        cursor: pointer;
      }
    `}</style>
  </div>
);
