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
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
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
        <Route index element={<Homepage />} loader={productsData}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
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
