import "./KnowledgeGraph.component.css";

interface KnowledgeGraphProps {
  src: string;
  title: string;
}

const KnowledgeGraph = (knowledgeGraphProps: KnowledgeGraphProps) => {
  return (
    <div className="knowledge-graph-html-container">
      <iframe
        src={`${process.env.PUBLIC_URL}/interactive-knowledge-graphs/${knowledgeGraphProps.src}.html`}
        className="external-page-iframe"
        title={knowledgeGraphProps.title}
      ></iframe>
    </div>
  );
};

export default KnowledgeGraph;
