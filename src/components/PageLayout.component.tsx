import { Route, HashRouter as Router, Routes } from "react-router-dom";
import SmallKnowledgeGraph from "../pages/SmallKnowlegdeGraph.page";
import LargeKnowledgeGraph from "../pages/LargeKnowledgeGraph.page";
import MediumKnowledgeGraph from "../pages/MediumKnowledgeGraph.page";
import NavBar from "./NavBar.component";
import PageHeader from "./PageHeader.component";
import PageFooter from "./PageFooter.component";
import "./PageLayout.component.css";

const PageLayout = () => {
  const renderSelectedPage = () => {
    return (
      <Router basename="knowledge-graph-frontend">
        <Routes>
          <Route path="/SmallKnowledgeGraph" element={<SmallKnowledgeGraph />} />
          <Route
            path="/MediumKnowledgeGraph"
            element={<MediumKnowledgeGraph />}
          />
          <Route path="/LargeKnowledgeGraph" element={<LargeKnowledgeGraph />} />
        </Routes>
      </Router>
    );
  };

  return (
    <div className="layout">
      <div className="header">
        <PageHeader />
      </div>
      <div className="navigation">
        <NavBar />
      </div>
      <div className="page">{renderSelectedPage()}</div>
      <div className="footer">
        <PageFooter />
      </div>
    </div>
  );
};

export default PageLayout;
