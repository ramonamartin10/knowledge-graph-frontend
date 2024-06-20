import Graph from "../components/Graph.component";
import KnowledgeGraph from "../components/KnowledgeGraph.component";
import "./SmallKnowledgeGraph.page.css";
import trainLoss100Steps from "../assets/graphs-results/small/train-loss/small-graph-100-steps-ep_1.json";
import trainLoss250Steps from "../assets/graphs-results/small/train-loss/small-graph-250-steps-ep_1.json";
import trainLoss500Steps from "../assets/graphs-results/small/train-loss/small-graph-500-steps-ep_1.json";
import timeFps100Steps from "../assets/graphs-results/small/time-fps/small-graph-100-steps-ep_1.json";
import timeFps250Steps from "../assets/graphs-results/small/time-fps/small-graph-250-steps-ep_1.json";
import timeFps500Steps from "../assets/graphs-results/small/time-fps/small-graph-500-steps-ep_1.json";
import rolloutExplorationRate100Steps from "../assets/graphs-results/small/rollout-exploration-rate/small-graph-100-steps-ep_1.json";
import rolloutExplorationRate250Steps from "../assets/graphs-results/small/rollout-exploration-rate/small-graph-250-steps-ep_1.json";
import rolloutExplorationRate500Steps from "../assets/graphs-results/small/rollout-exploration-rate/small-graph-500-steps-ep_1.json";
import rolloutEpisodeRewardMean100Steps from "../assets/graphs-results/small/rollout-ep-rew-mean/small-graph-100-steps-ep_1.json";
import rolloutEpisodeRewardMean250Steps from "../assets/graphs-results/small/rollout-ep-rew-mean/small-graph-250-steps-ep_1.json";
import rolloutEpisodeRewardMean500Steps from "../assets/graphs-results/small/rollout-ep-rew-mean/small-graph-500-steps-ep_1.json";
import evaluationMeanReward100Steps from "../assets/graphs-results/small/eval-mean-reward/small-graph-100-steps-ep_1.json";
import evaluationMeanReward250Steps from "../assets/graphs-results/small/eval-mean-reward/small-graph-250-steps-ep_1.json";
import evaluationMeanReward500Steps from "../assets/graphs-results/small/eval-mean-reward/small-graph-500-steps-ep_1.json";
import ResultsTable from "../components/ResultsTable.component";
import results100Small from "../assets/offloading-results/small/results-100-small.json";
import results250Small from "../assets/offloading-results/small/results-250-small.json";
import results500Small from "../assets/offloading-results/small/results-500-small.json";

const SmallKnowledgeGraph = () => {
  return (
    <div className="small-knowledge-graph">
      <div className="small-knowledge-graph-container">
        <KnowledgeGraph
          src="knowledge_graph_small"
          title="Small Knowledge Graph"
        />
      </div>

      <div className="small-results">
        <h2 className="small-results-title">Learning: 100 steps/episode</h2>
        <div className="small-graphs">
          <Graph
            title="Rollout Episode Reward Mean"
            data={rolloutEpisodeRewardMean100Steps}
            xAxisName={"Step"}
            yAxisName={"Reward"}
            yAxisMin={-94}
            yAxisMax={-91.5}
          />
          <Graph
            title="Rollout Exploration Rate"
            data={rolloutExplorationRate100Steps}
            xAxisName={"Steps"}
            yAxisName={"Exploration Rate"}
            yAxisMin={0}
            yAxisMax={1}
          />
          <Graph
            title="Evaluation Mean Reward"
            data={evaluationMeanReward100Steps}
            xAxisName={"Step"}
            yAxisName={"Reward"}
            yAxisMin={-98}
            yAxisMax={-86}
          />
          <Graph
            title="Loss"
            data={trainLoss100Steps}
            xAxisName={"Step"}
            yAxisName={"Loss"}
            yAxisMin={0}
            yAxisMax={140}
          />
          <Graph
            title="Time fps"
            data={timeFps100Steps}
            xAxisName={"Step"}
            yAxisName={"FPS"}
            yAxisMin={45}
            yAxisMax={64}
          />
        </div>
        <div className="offloading-results">
          <ResultsTable data={results100Small} />
        </div>

        <h2 className="small-results-title">Learning: 250 steps/episode</h2>
        <div className="small-graphs">
          <Graph
            title="Rollout Episode Reward Mean"
            data={rolloutEpisodeRewardMean250Steps}
            xAxisName={"Step"}
            yAxisName={"Reward"}
            yAxisMin={-235}
            yAxisMax={-229}
          />
          <Graph
            title="Rollout Exploration Rate"
            data={rolloutExplorationRate250Steps}
            xAxisName={"Step"}
            yAxisName={"Exploration Rate"}
            yAxisMin={0}
            yAxisMax={1}
          />
          <Graph
            title="Evaluation Mean Reward"
            data={evaluationMeanReward250Steps}
            xAxisName={"Step"}
            yAxisName={"Reward"}
            yAxisMin={-239}
            yAxisMax={-224}
          />
          <Graph
            title="Loss"
            data={trainLoss250Steps}
            xAxisName={"Step"}
            yAxisName={"Loss"}
            yAxisMin={0}
            yAxisMax={140}
          />
          <Graph
            title="Time fps"
            data={timeFps250Steps}
            xAxisName={"Step"}
            yAxisName={"FPS"}
            yAxisMin={70}
            yAxisMax={88}
          />
        </div>
        <div className="offloading-results">
          <ResultsTable data={results250Small} />
        </div>

        <h2 className="small-results-title">Learning: 500 steps/episode</h2>
        <div className="small-graphs">
          <Graph
            title="Rollout Episode Reward Mean"
            data={rolloutEpisodeRewardMean500Steps}
            xAxisName={"Step"}
            yAxisName={"Reward"}
            yAxisMin={-467.5}
            yAxisMax={-464}
          />
          <Graph
            title="Rollout Exploration Rate"
            data={rolloutExplorationRate500Steps}
            xAxisName={"Step"}
            yAxisName={"Exploration Rate"}
            yAxisMin={0}
            yAxisMax={1}
          />
          <Graph
            title="Evaluation Mean Reward"
            data={evaluationMeanReward500Steps}
            xAxisName={"Step"}
            yAxisName={"Reward"}
            yAxisMin={-472}
            yAxisMax={-455}
          />
          <Graph
            title="Loss"
            data={trainLoss500Steps}
            xAxisName={"Step"}
            yAxisName={"loss"}
            yAxisMin={0}
            yAxisMax={190}
          />
          <Graph
            title="Time fps"
            data={timeFps500Steps}
            xAxisName={"Step"}
            yAxisName={"FPS"}
            yAxisMin={100}
            yAxisMax={107}
          />
        </div>
        <div className="offloading-results">
          <ResultsTable data={results500Small} />
        </div>
      </div>
    </div>
  );
};

export default SmallKnowledgeGraph;
