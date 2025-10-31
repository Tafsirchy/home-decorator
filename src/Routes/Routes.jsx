import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";

// named export
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("./furnitureData.json")
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <ErrorPage></ErrorPage>
  // }
]);

export default router;
