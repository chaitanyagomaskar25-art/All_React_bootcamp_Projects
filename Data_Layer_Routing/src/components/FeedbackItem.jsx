import React from 'react'
import { ArrowLeft, ChevronUp, MessageSquare } from "lucide-react";

const FeedbackItem = () => {
  return (
    <div>
      <div>
        <button> 
            <ChevronUp size={16}/>
            <span>
                Suggestio upvoted
            </span>
        </button>
      </div>
      <div>
        <h3>Suggestion title</h3>
        <p>Suggestion description</p>
        <span>Suggestion category</span>

      </div>
      <div>
        <MessageSquare />
        <span>Suggestion comments</span>
      </div>
    </div>

  )
}

export default FeedbackItem
