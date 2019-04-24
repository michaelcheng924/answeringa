import HeadComponent from "./HeadComponent";
import Nav from "./Nav";
import Footer from "./Footer";

export default ({ children, headData, boxShadow = true, noNav }) => {
  return (
    <div>
      <HeadComponent {...headData} />
      <Nav />

      <div className="content">{children}</div>

      <Footer />
    </div>
  );
};
