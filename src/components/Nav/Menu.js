import { withRouter } from "next/router";
import css from "classnames";

const Menu = ({ router, showMenu, onToggleMenu }) => {
  const overlayClassNames = css("overlay", {
    "overlay--show": showMenu
  });

  const menuClassNames = css("menu", {
    "menu--show": showMenu
  });

  return (
    <div>
      {/* <div
        className={overlayClassNames}
        onClick={() => onToggleMenu(false)}
        style={{ zIndex: showMenu ? 0 : -1 }}
      />
      <div className={menuClassNames}>
        {menuItems.map(item => {
          const classNames = css("menu-item", {
            "menu-item--active":
              router.pathname === item.url ||
              (item.isActive && item.isActive(router.pathname))
          });

          return (
            <Link route={item.url} key={item.url}>
              <div className={classNames} onClick={() => onToggleMenu(false)}>
                {item.title}
              </div>
            </Link>
          );
        })}
      </div> */}
      <style jsx>{`
        .overlay {
          background: #000;
          bottom: 0;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          right: 0;
          transition: 0.5s;
        }

        .overlay--show {
          opacity: 0.3;
          z-index: 1000;
        }

        .menu {
          background: #fff;
          height: 100vh;
          position: absolute;
          right: -300px;
          top: 0;
          transition: 0.5s;
          width: 300px;
          z-index: 1001;
        }

        .menu--show {
          right: 0;
        }

        .menu-item {
          border-bottom: 1px solid #eee;
          color: #999;
          cursor: pointer;
          font-size: 20px;
          line-height: 1.4;
          padding: 15px 20px;
          text-transform: uppercase;
        }

        .menu-item--active {
          color: rgba(0, 0, 0, 0.84);
        }
      `}</style>
    </div>
  );
};

export default withRouter(Menu);
