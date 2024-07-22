import Header from "../header/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <h1>hello</h1>
    </>
  );
};

export default Layout;
