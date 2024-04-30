import HomePage from "../HomePage/HomePage";
import PortFolio from "../PortfolioPage/PortFolio";
import AboutPage from "../AboutPage/AboutPage";
import BooksPage from "../BooksPage/BooksPage";
import ClientAlbums from "../ClientAlbumsPage/ClientAlbums";
import ContactPage from "../ContactPage/ContactPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function MainRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <HomePage />
        </>
      ),
    },
    {
      path: "/portfolio",
      element: (
        <>
          <PortFolio />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <AboutPage />
        </>
      ),
    },
    {
      path: "/books",
      element: (
        <>
          <BooksPage />
        </>
      ),
    },
    {
      path: "/client-albums",
      element: (
        <>
          <ClientAlbums />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <ContactPage />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default MainRouter;
