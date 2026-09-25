import React from "react";
import { ArrowLeft, ChevronUp, MessageSquare } from "lucide-react";


const RoadmapView = () => {
  return (
    <div>
      <div>
        <div>
          <button>
            <ArrowLeft />
            go back
          </button>
          <div>
            <h1>RoadMap</h1>
          </div>
        </div>
        <button>+ add feedback</button>
      </div>
      <div>
        <div>
          <h2>Category Name % length</h2>
          <p>Category Name</p>
          <div>
            <div>
              <div>
                <div></div>
                <span>category name</span>
              </div>
            </div>
            <h3>Item title</h3>
            <p>Item Descriptio</p>
            <span>Item category</span>
            <div>
              <button>
                <ChevronUp />
                <span>Itme votes</span>
              </button>
              <div>
                <MessageSquare />
                <span>Item Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapView;
