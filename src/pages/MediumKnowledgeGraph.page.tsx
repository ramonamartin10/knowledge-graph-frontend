import KnowledgeGraph from "../components/KnowledgeGraph.component";
import "./MediumKnowledgeGraph.page.css";

const MediumKnowledgeGraph = () => {
  return (
    <div>
      <div className="knowledge-graph-container">
        <KnowledgeGraph
          src="knowledge_graph_medium"
          title="Medium Knowledge Graph"
        />
      </div>
    </div>
  );
};

export default MediumKnowledgeGraph;
