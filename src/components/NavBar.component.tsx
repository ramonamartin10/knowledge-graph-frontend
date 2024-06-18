import { useEffect, useState } from "react";
import page from "../types/page.types";
import "./NavBar.component.css";

const NavBar = () => {
  const [selectedPage, setSelectedPage] = useState<page>(
    page.SmallKnowledgeGraph,
  );

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/SmallKnowledgeGraph") {
      setSelectedPage(page.SmallKnowledgeGraph);
    } else if (path === "/MediumKnowledgeGraph") {
      setSelectedPage(page.MediumKnowledgeGraph);
    } else if (path === "/LargeKnowledgeGraph") {
      setSelectedPage(page.LargeKnowledgeGraph);
    }
  }, []);

  return (
    <div className="nav-bar">
      <div className="elements">
        <div className="items">
          <li>
            <a
              className={
                "item" +
                (selectedPage === page.SmallKnowledgeGraph ? "-selected" : "")
              }
              href="/SmallKnowledgeGraph"
            >
              Small Knowledge Graph
            </a>
          </li>

          <li>
            <a
              className={
                "item" +
                (selectedPage === page.MediumKnowledgeGraph ? "-selected" : "")
              }
              href="/MediumKnowledgeGraph"
            >
              Medium Knowledge Graph
            </a>
          </li>

          <li>
            <a
              className={
                "item" +
                (selectedPage === page.LargeKnowledgeGraph ? "-selected" : "")
              }
              href="/LargeKnowledgeGraph"
            >
              Large Knowledge Graph
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
