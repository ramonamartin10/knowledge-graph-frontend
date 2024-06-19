import KnowledgeGraph from "../components/KnowledgeGraph.component";
import "./MediumKnowledgeGraph.page.css";
import Graph from "../components/Graph.component";
import trainLoss100Steps from "../assets/graphs-results/medium/train-loss/medium-graph-100-steps-ep_1.json";
import trainLoss250Steps from "../assets/graphs-results/medium/train-loss/medium-graph-250-steps-ep_1.json";
import trainLoss500Steps from "../assets/graphs-results/medium/train-loss/medium-graph-500-steps-ep_1.json";
import timeFps100Steps from "../assets/graphs-results/medium/time-fps/medium-graph-100-steps-ep_1.json";
import timeFps250Steps from "../assets/graphs-results/medium/time-fps/medium-graph-250-steps-ep_1.json";
import timeFps500Steps from "../assets/graphs-results/medium/time-fps/medium-graph-500-steps-ep_1.json";
import rolloutExplorationRate100Steps from "../assets/graphs-results/medium/rollout-exploration-rate/medium-graph-100-steps-ep_1.json";
import rolloutExplorationRate250Steps from "../assets/graphs-results/medium/rollout-exploration-rate/medium-graph-250-steps-ep_1.json";
import rolloutExplorationRate500Steps from "../assets/graphs-results/medium/rollout-exploration-rate/medium-graph-500-steps-ep_1.json";
import rolloutEpisodeRewardMean100Steps from "../assets/graphs-results/medium/rollout-ep-rew-mean/medium-graph-100-steps-ep_1.json";
import rolloutEpisodeRewardMean250Steps from "../assets/graphs-results/medium/rollout-ep-rew-mean/medium-graph-250-steps-ep_1.json";
import rolloutEpisodeRewardMean500Steps from "../assets/graphs-results/medium/rollout-ep-rew-mean/medium-graph-500-steps-ep_1.json";
import evaluationMeanReward100Steps from "../assets/graphs-results/medium/eval-mean-reward/medium-graph-100-steps-ep_1.json";
import evaluationMeanReward250Steps from "../assets/graphs-results/medium/eval-mean-reward/medium-graph-250-steps-ep_1.json";
import evaluationMeanReward500Steps from "../assets/graphs-results/medium/eval-mean-reward/medium-graph-500-steps-ep_1.json";

const MediumKnowledgeGraph = () => {
  return (
    <div className="medium-knowledge-graph">
      <div className="knowledge-graph-container">
        <KnowledgeGraph
          src="knowledge_graph_medium"
          title="Medium Knowledge Graph"
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
            yAxisMin={-95.5}
            yAxisMax={-93}
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
            yAxisMin={-99}
            yAxisMax={-88}
          />
          <Graph
            title="Loss"
            data={trainLoss100Steps}
            xAxisName={"Step"}
            yAxisName={"Loss"}
            yAxisMin={0}
            yAxisMax={240}
          />
          <Graph
            title="Time fps"
            data={timeFps100Steps}
            xAxisName={"Step"}
            yAxisName={"FPS"}
            yAxisMin={25}
            yAxisMax={30}
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
            yAxisMin={-238}
            yAxisMax={-233}
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
            yAxisMin={-242}
            yAxisMax={-226}
          />
          <Graph
            title="Loss"
            data={trainLoss250Steps}
            xAxisName={"Step"}
            yAxisName={"Loss"}
            yAxisMin={0}
            yAxisMax={260}
          />
          <Graph
            title="Time fps"
            data={timeFps250Steps}
            xAxisName={"Step"}
            yAxisName={"FPS"}
            yAxisMin={39}
            yAxisMax={51}
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
            yAxisMin={-473}
            yAxisMax={-467}
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
            yAxisMin={-476}
            yAxisMax={-458}
          />
          <Graph
            title="Loss"
            data={trainLoss500Steps}
            xAxisName={"Step"}
            yAxisName={"loss"}
            yAxisMin={0}
            yAxisMax={240}
          />
          <Graph
            title="Time fps"
            data={timeFps500Steps}
            xAxisName={"Step"}
            yAxisName={"FPS"}
            yAxisMin={52}
            yAxisMax={63}
          />
        </div>
        <div className="offloading-results"></div>
      </div>
    </div>
  );
};

export default MediumKnowledgeGraph;
