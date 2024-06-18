import React from "react";
import page from "../types/page.types";
import "./NavBar.component.css";

interface NavBarProps {
  onPageSelect: (selectedPage: page) => void;
  selectedPage: page;
}

const NavBar: React.FC<NavBarProps> = ({ onPageSelect, selectedPage }) => {
  return (
    <div className="nav-bar">
      <div className="elements">
        <div className="items">
          <li>
            <button
              className={`item${selectedPage === page.SmallKnowledgeGraph ? "-selected" : ""}`}
              onClick={() => onPageSelect(page.SmallKnowledgeGraph)}
            >
              Small Knowledge Graph
            </button>
          </li>
          <li>
            <button
              className={`item${selectedPage === page.MediumKnowledgeGraph ? "-selected" : ""}`}
              onClick={() => onPageSelect(page.MediumKnowledgeGraph)}
            >
              Medium Knowledge Graph
            </button>
          </li>
          <li>
            <button
              className={`item${selectedPage === page.LargeKnowledgeGraph ? "-selected" : ""}`}
              onClick={() => onPageSelect(page.LargeKnowledgeGraph)}
            >
              Large Knowledge Graph
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
