import React from "react";
import FeedbackItem from "./FeedbackItem";
import { ArrowLeft, ChevronUp, MessageSquare } from "lucide-react";

const FeedbackList = (suggestions, filtereCategory, sortBy, onView) => {
  // <div>
  //   <p>No Suggestion Found . Add One!</p>
  // </div>;
  const filtered = suggestions.filter(s=> filtereCategory=== "All" || s.category === filtereCategory)
  const sorted = [...filtered.sort((a, b)=>{
    if(sortBy === "Most Upvotes") return b.upvotes - a.upvotes; 
    if(sortBy === "Least Upvotes") return b.upvotes - a.upvotes; 
    if(sortBy === "Most Commentes") return b.comments - a.comments; 
    if(sortBy === "Least Commentes") return b.comments - a.comments; 
  })]


  

  return (
    <div>
      <FeedbackItem />
    </div>
  );
};

export default FeedbackList;
