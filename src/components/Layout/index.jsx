import Header from "../Header";
import Footer from "../Footer";

function Layout({ cartItemCount, onCartClick, children }) {
  // Accept children
  return (
    <>
      <Header cartItemCount={cartItemCount} onCartClick={onCartClick} />
      <main className="main-content">
        {children} {/* Render the children here */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
