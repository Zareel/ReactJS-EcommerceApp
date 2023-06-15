import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import { productsData } from "./api/api";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          path="/homepage"
          element={<Homepage />}
          loader={productsData}
        ></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
