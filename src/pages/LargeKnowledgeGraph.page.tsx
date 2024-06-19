import KnowledgeGraph from "../components/KnowledgeGraph.component";
import "./LargeKnowledgeGraph.page.css";
import Graph from "../components/Graph.component";
import trainLoss100Steps from "../assets/graphs-results/large/train-loss/large-graph-100-steps-ep_1.json";
import trainLoss250Steps from "../assets/graphs-results/large/train-loss/large-graph-250-steps-ep_1.json";
import trainLoss500Steps from "../assets/graphs-results/large/train-loss/large-graph-500-steps-ep_1.json";
import timeFps100Steps from "../assets/graphs-results/large/time-fps/large-graph-100-steps-ep_1.json";
import timeFps250Steps from "../assets/graphs-results/large/time-fps/large-graph-250-steps-ep_1.json";
import timeFps500Steps from "../assets/graphs-results/large/time-fps/large-graph-500-steps-ep_1.json";
import rolloutExplorationRate100Steps from "../assets/graphs-results/large/rollout-exploration-rate/large-graph-100-steps-ep_1.json";
import rolloutExplorationRate250Steps from "../assets/graphs-results/large/rollout-exploration-rate/large-graph-250-steps-ep_1.json";
import rolloutExplorationRate500Steps from "../assets/graphs-results/large/rollout-exploration-rate/large-graph-500-steps-ep_1.json";
import rolloutEpisodeRewardMean100Steps from "../assets/graphs-results/large/rollout-ep-rew-mean/large-graph-100-steps-ep_1.json";
import rolloutEpisodeRewardMean250Steps from "../assets/graphs-results/large/rollout-ep-rew-mean/large-graph-250-steps-ep_1.json";
import rolloutEpisodeRewardMean500Steps from "../assets/graphs-results/large/rollout-ep-rew-mean/large-graph-500-steps-ep_1.json";
import evaluationMeanReward100Steps from "../assets/graphs-results/large/eval-mean-reward/large-graph-100-steps-ep_1.json";
import evaluationMeanReward250Steps from "../assets/graphs-results/large/eval-mean-reward/large-graph-250-steps-ep_1.json";
import evaluationMeanReward500Steps from "../assets/graphs-results/large/eval-mean-reward/large-graph-500-steps-ep_1.json";

const LargeKnowledgeGraph = () => {
  return (
    <div className="large-knowledge-graph">
      <div className="knowledge-graph-container">
        <KnowledgeGraph
          src="knowledge_graph_large"
          title="Large Knowledge Graph"
        />
      </div>
      <div className="results">
        <h2 className="results-title">Training 100 steps</h2>
        <div className="graphs">
          <Graph
            title="Rollout Episode Reward Mean"
            data={rolloutEpisodeRewardMean100Steps}
            xAxisName={"Step"}
            yAxisName={"Reward"}
            yAxisMin={-93.5}
            yAxisMax={-91}
          />
          <Graph
            title="Rollout Exploration Rate"
            data={rolloutExplorationRate100Steps}
            xAxisName={"Step"}
            yAxisName={"Exploration Rate"}
            yAxisMin={0}
            yAxisMax={1}
          />
          <Graph
            title="Evaluation Mean Reward"
            data={evaluationMeanReward100Steps}
            xAxisName={"Step"}
            yAxisName={"Reward"}
            yAxisMin={-97}
            yAxisMax={-86}
          />
          <Graph
            title="Loss"
            data={trainLoss100Steps}
            xAxisName={"Step"}
            yAxisName={"Loss"}
            yAxisMin={0}
            yAxisMax={230}
          />
          <Graph
            title="Time fps"
            data={timeFps100Steps}
            xAxisName={"Step"}
            yAxisName={"FPS"}
            yAxisMin={8}
            yAxisMax={12}
          />
        </div>
        <div className="offloading-results"></div>

        <h2 className="results-title">Training 250 steps</h2>
        <div className="graphs">
          <Graph
            title="Rollout Episode Reward Mean"
            data={rolloutEpisodeRewardMean250Steps}
            xAxisName={"Step"}
            yAxisName={"Reward"}
            yAxisMin={-234}
            yAxisMax={-228}
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
            yAxisMin={-238}
            yAxisMax={-220}
          />
          <Graph
            title="Loss"
            data={trainLoss250Steps}
            xAxisName={"Step"}
            yAxisName={"Loss"}
            yAxisMin={0}
            yAxisMax={230}
          />
          <Graph
            title="Time fps"
            data={timeFps250Steps}
            xAxisName={"Step"}
            yAxisName={"FPS"}
            yAxisMin={12}
            yAxisMax={16}
          />
        </div>
        <div className="offloading-results"></div>

        <h2 className="results-title">Training 500 steps</h2>
        <div className="graphs">
          <Graph
            title="Rollout Episode Reward Mean"
            data={rolloutEpisodeRewardMean500Steps}
            xAxisName={"Step"}
            yAxisName={"Reward"}
            yAxisMin={-464}
            yAxisMax={-457}
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
            yAxisMin={-470}
            yAxisMax={-446}
          />
          <Graph
            title="Loss"
            data={trainLoss500Steps}
            xAxisName={"Step"}
            yAxisName={"loss"}
            yAxisMin={0}
            yAxisMax={280}
          />
          <Graph
            title="Time fps"
            data={timeFps500Steps}
            xAxisName={"Step"}
            yAxisName={"FPS"}
            yAxisMin={15}
            yAxisMax={20}
          />
        </div>
        <div className="offloading-results"></div>
      </div>
    </div>
  );
};

export default LargeKnowledgeGraph;
