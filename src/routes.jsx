import App from "./App";
import ProductsPage from "../src/components/pages/ProductsPage";
import CheckoutPage from "../src/components/pages/CheckoutPage";
import HeroPage from "../src/components/pages/HeroPage";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeroPage />,
        //errorElement: <ErrorPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
        //errorElement: <ErrorPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
        //errorElement: <ErrorPage />,
      },
    ],
  },
];

export default routes;
