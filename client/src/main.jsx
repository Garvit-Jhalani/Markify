import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import AddBookmark from "./pages/AddBookmark.jsx";
import Contact from "./pages/ContactUs.jsx";
import Faqs from "./pages/Faqs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import TermsAndPolicies from "./pages/TermsAndPolicies.jsx";
import Support from "./pages/Support.jsx";
import Services from "./pages/Services.jsx";
import Products from "./pages/Products.jsx";
import News from "./pages/News.jsx";
import Blog from "./pages/Blog.jsx";
import Error from "./Error404/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addBookmark",
    element: <AddBookmark />,
  },
  {
    path: "/contactUs",
    element: <Contact />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/t&c",
    element: <TermsAndPolicies />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/Error",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-3fjgvbot14tdw8gc.us.auth0.com"
      clientId="53YkkZxuJkVeklgnUsA2BtJ60AF7OW0g"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
