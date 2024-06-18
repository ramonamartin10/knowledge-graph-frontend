import KnowledgeGraph from "../components/KnowledgeGraph.component";
import "./LargeKnowledgeGraph.page.css";

const LargeKnowledgeGraph = () => {
  return (
    <div>
      <div className="knowledge-graph-container">
        <KnowledgeGraph
          src="knowledge_graph_large"
          title="Large Knowledge Graph"
        />
      </div>
    </div>
  );
};

export default LargeKnowledgeGraph;
