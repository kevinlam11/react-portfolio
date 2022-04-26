import React, { useState } from "react";
import NavTabs from "./NavTabs";

import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }

    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              ICON
            </a>
            <span class="text-muted">&copy; 2021 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-muted" href="#">
                ICON
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                ICON
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                ICON
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}