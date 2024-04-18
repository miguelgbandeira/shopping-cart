import App from "./App";
const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "products",
    element: <ProductsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "checkout",
    element: <CheckoutPage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
