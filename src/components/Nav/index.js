import SVG from "react-inlinesvg";
import { FiSearch } from "react-icons/fi";

import Hamburger from "./Hamburger";
import Menu from "./Menu";

const Nav = ({ showMenu, onToggleMenu }) => {
  return (
    <div>
      <nav className="box-shadow">
        <div
          className="d-flex"
          style={{
            height: `100%`
          }}
        >
          <Hamburger />
          <SVG className="hand-icon" src="/static/images/baby-hand.svg" />
          <div className="app-name bebas">Answering Abortion</div>
        </div>
        {/* <div>
          <div className="d-flex pn-light link">
            <FiSearch size={18} />
            <div
              style={{
                marginLeft: 4
              }}
            >
              SEARCH
            </div>
          </div>
        </div> */}
      </nav>

      <Menu showMenu={showMenu} onToggleMenu={onToggleMenu} />

      <style jsx>{`
        nav {
          align-items: center;
          display: flex;
          height: 65px;
          justify-content: space-between;
          padding-right: 20px;
        }

        .box-shadow {
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
        }

        .app-name {
          color: #c62828;
          font-size: 50px;
          margin-left: 8px;
          position: relative;
          top: 5px;
        }

        @media (max-width: 768px) {
          nav {
            height: 40px;
          }

          .app-name {
            font-size: 25px;
            margin-left: 3px;
            top: 2px;
          }
        }
      `}</style>

      <style jsx global>{`
        .hand-icon {
          height: 35px;
          margin-left: 20px;
          transform: rotate(-25deg);
          width: 35px;
        }

        .hand-icon path {
          fill: #c62828;
        }

        @media (max-width: 768px) {
          .hand-icon {
            height: 20px;
            margin-left: 10px;
            width: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;
