import { ArrowLeft, ChevronUp, MessageSquare } from "lucide-react";
import React from "react";

const DetailsView = () => {
  return (
    <div>
      <div>
        <button>
          <ArrowLeft />
          Go back
        </button>
        <button>Edit Feedback</button>
      </div>
      <div>
        <div>
          <button>
            <ChevronUp />
            <span>Feedback Votes</span>
          </button>
          <div>
            <h2>Titlke</h2>
            <p>Dewscription</p>
            <span>Feddback Category</span>
          </div>
          <div>
            <MessageSquare />
            <span>Feedback Comments</span>
          </div>
        </div>
      </div>
      <div>
        <h3>Coment Lenght</h3>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <div>
                <h4>comment name</h4>
                <p>comment user name</p>
                <button>Reply</button>
              </div>
              <p>Comment text</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <h3>
            Add comment
        </h3>
        <textarea name="" id="" maxLength={250}></textarea>
        <div>
            <span>Character Left</span>
            <button>Post comment</button>
        </div>
      </div>

    </div>
  );
};

export default DetailsView;
