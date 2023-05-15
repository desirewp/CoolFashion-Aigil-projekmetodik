import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import NavigationTop from "../components/NavigationTop";
import Landing from "../views/Landpage"
import "./Mall.css";
import Admin from "../views/Admin/Admin";
import Contact from "../views/Contact/Contact";
import Error404 from "../views/Error404/Error404";
import ProductPage from "../views/Products/ProductPage"
import SingleProduct from "../views/Products/SingleProduct";
import Wishlist from "../views/Wishlist/Wishlist";

function Mall() {
  return (
    <section className="frame">
      <NavigationTop></NavigationTop>
      <div className="content-container">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/start' element={<Landing/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/products/:productTitle' element={<SingleProduct/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>

      </div>
      <Footer></Footer>
    </section>
  );
}

export default Mall;
