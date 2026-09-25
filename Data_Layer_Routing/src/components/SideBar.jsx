import React from "react";
import { ArrowLeft, ChevronUp, MessageSquare } from "lucide-react";

const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

const SideBar = ({
  filtereCategory,
  setfiltereCategory,
  roadmapCounts,
  openRoadMap,
  openAdd,
}) => {
  return (
    <div>
      <div>
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </div>
      <div>
        <div>
          {categories.map((cat) => (
            <button onClick={() => setfiltereCategory(cat)}>{cat}</button>
          ))}
        </div>
      </div>

      <div>
        <div>
          <h2>View</h2>
          <h2>Roadmap</h2>
          <button onClick={openRoadMap}>view</button>
        </div>
      </div>
      <div>
        <div>
          <div>
            <span>planned</span>
          </div>
          <span>{roadmapCounts.planned}</span>
        </div>
        <div>
          <div>
            <span>In progress</span>
          </div>
          <span>{roadmapCounts.inProgress}</span>
        </div>
        <div>
          <div>
            <span>Live</span>
          </div>
          <span> {roadmapCounts.live}</span>
        </div>
        <div>
          <button onClick={openRoadMap}>+ Add</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
