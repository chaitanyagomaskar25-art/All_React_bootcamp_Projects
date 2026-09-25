import React from "react";
import { X, ArrowLeft, ChevronUp, MessageSquare } from "lucide-react";

const FeedbackModal = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Create New feedbacl</h2>
          <button>
            <X />
          </button>
          <form action="">
            <div>
              <label htmlFor="">Feedbadk Title</label>
              <input type="text" placeholder="Add short descritpiom" />
            </div>
            <div>
              <label htmlFor="">Feedbadk category</label>
              <select name="" id="">
                <option value="Faeture">Faeture</option>
                <option value="UI">UI</option>
                <option value="UX">UX</option>
                <option value="Enhancment">Enhancment</option>
                <option value="Bug">Bug</option>
              </select>{" "}
            </div>
             <div>
              <label htmlFor=""> Status</label>
              <select name="" id="">
                <option value="Planned">Faeture</option>
                <option value="In Progress">In Progress</option>
                <option value="Live">Live</option>
                
              </select>{" "}
            </div>
             <div>
              <label htmlFor=""> Feedback details</label>
             <textarea name="" id=""></textarea>
            </div>
          </form>
        </div>
        <div>
            <button>Delete</button>
            <button>cancle</button>
            <button>Add feedback</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
