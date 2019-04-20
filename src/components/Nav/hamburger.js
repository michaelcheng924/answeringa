import { useEffect } from "react";

const Hamburger = ({}) => {
  useEffect(() => {
    const ham = document.querySelector(".menu-container");
    const menuTop = document.querySelector(".menu-top");
    const menuMiddle = document.querySelector(".menu-middle");
    const menuBottom = document.querySelector(".menu-bottom");

    ham.addEventListener("click", () => {
      menuTop.classList.toggle("menu-top-click");
      menuMiddle.classList.toggle("menu-middle-click");
      menuBottom.classList.toggle("menu-bottom-click");
    });
  });

  return (
    <div className="menu-container d-flex">
      <div className="menu">
        <span className="menu-global menu-top" />
        <span className="menu-global menu-middle" />
        <span className="menu-global menu-bottom" />
      </div>

      <style jsx>{`
        .menu-container {
          align-items: center;
          background: #c62828;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          width: 65px;
        }

        .menu {
          padding-left: 1.25em;
          position: relative;
          width: 10px;
          height: 20px;
        }
        .menu-global {
          backface-visibility: hidden;
          position: absolute;
          left: 0;
          border-top: 3px solid #fff;
          width: 100%;
          transition: 0.55s;
        }
        .menu-top {
          top: 0;
        }
        .menu-middle {
          top: 9px;
        }
        .menu-bottom {
          top: 18px;
        }
        .menu-top-click {
          backface-visibility: hidden;
          top: 7.5px;
          transform: rotate(50deg);
          transition: 0.55s 0.5s;
        }
        .menu-middle-click {
          opacity: 0;
        }
        .menu-bottom-click {
          backface-visibility: hidden;
          top: 7.5px;
          transform: rotate(-410deg);
          transition: 0.55s 0.5s;
        }

        @media (max-width: 768px) {
          .menu-container {
            width: 40px;
          }

          .menu {
            width: 1px;
            height: 17px;
          }

          .menu-middle {
            top: 6px;
          }
          .menu-bottom {
            top: 12px;
          }

          .menu-top-click {
            top: 6px;
          }

          .menu-bottom-click {
            top: 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hamburger;
