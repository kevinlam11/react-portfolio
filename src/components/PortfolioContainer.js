import React, { useState } from "react";
import NavTabs from "./NavTabs";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
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
    <section>
      <div>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />

        <Container>
          {renderPage()}

          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mx-4 border-top">
            <div class="col-md-4 d-flex align-items-center"></div>

            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" href>
                Github
              </Button>
              <Button variant="primary" href>
                Indeed
              </Button>
            </ButtonGroup>
          </footer>
        </Container>
      </div>
    </section>
  );
}
