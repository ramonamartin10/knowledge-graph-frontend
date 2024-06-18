import SmallKnowledgeGraph from "../pages/SmallKnowlegdeGraph.page";
import LargeKnowledgeGraph from "../pages/LargeKnowledgeGraph.page";
import MediumKnowledgeGraph from "../pages/MediumKnowledgeGraph.page";
import NavBar from "./NavBar.component";
import PageHeader from "./PageHeader.component";
import PageFooter from "./PageFooter.component";
import "./PageLayout.component.css";
import page from "../types/page.types";
import { useState } from "react";

const PageLayout = () => {
  const [selectedPage, setSelectedPage] = useState<page>(
    page.SmallKnowledgeGraph
  );

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case page.SmallKnowledgeGraph:
        return <SmallKnowledgeGraph />;
      case page.MediumKnowledgeGraph:
        return <MediumKnowledgeGraph />;
      case page.LargeKnowledgeGraph:
        return <LargeKnowledgeGraph />;
      default:
        return <div>Select a page from the navigation bar</div>;
    }
  };

  return (
    <div className="layout">
      <div className="header">
        <PageHeader />
      </div>
      <div className="navigation">
        <NavBar selectedPage={selectedPage} onPageSelect={setSelectedPage} />
      </div>
      <div className="page">{renderSelectedPage()}</div>
      <div className="footer">
        <PageFooter />
      </div>
    </div>
  );
};

export default PageLayout;
