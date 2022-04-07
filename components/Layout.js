import Announcement from "./Announcement";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <html lang='en'>
     <div className="sticky top-0 z-50"> 
      <Header /></div>

      <main className="">{children}</main>

      <Footer />
    </html>
  );
};
export default Layout;
