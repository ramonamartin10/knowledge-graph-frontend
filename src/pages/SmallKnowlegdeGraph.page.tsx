import KnowledgeGraph from "../components/KnowledgeGraph.component";
import "./SmallKnowledgeGraph.page.css";

const SmallKnowledgeGraph = () => {
  return (
    <div className="small-knowledge-graph">
      <div className="knowledge-graph-container">
        <KnowledgeGraph
          src="knowledge_graph_small"
          title="Small Knowledge Graph"
        />
      </div>
    </div>
  );
};

export default SmallKnowledgeGraph;
