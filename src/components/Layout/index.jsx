import Header from "../Header";
import Footer from "../Footer";

function Layout({ cartItemCount, onCartClick }) {
  return (
    <>
      <Header cartItemCount={cartItemCount} onCartClick={onCartClick} />
      <main className="main-content"></main>
      <Footer />
    </>
  );
}

export default Layout;
