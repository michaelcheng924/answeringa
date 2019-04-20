import css from "classnames";

export default ({ children, className, style }) => {
  const classNames = css("container", {
    [className]: className
  });

  return (
    <div className={classNames} style={style}>
      {children}

      <style jsx>{`
        .container {
          margin: 0 auto;
          max-width: 740px;
          padding: 20px;
          position: relative;
        }

        .below-nav {
          margin-top: 65px;
        }
      `}</style>
    </div>
  );
};
