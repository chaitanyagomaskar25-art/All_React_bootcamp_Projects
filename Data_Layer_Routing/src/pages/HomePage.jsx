import React, { useMemo, useState } from "react";
import SideBar from "../components/SideBar";
import FeedbackList from "../components/FeedbackList";
import FeedbackModal from "../components/FeedbackModal";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { addSuggeStions, toggleUpvote } from "../store/feedbackSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const suggestions = useSelector((state) => state.feedback.suggestions);

  const [filtereCategory, setfiltereCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Most Upvoted");

  const modelOpen = location.pathname === "/add";

  const roadmapCounts = useMemo(
    () => ({
      planned: suggestions.filter((s) => s.status === "Planned").length,
      inProgress: suggestions.filter((s) => s.status === "In-Progress").length,
      live: suggestions.filter((s) => s.status === "live").length,
    }),
    [suggestions],
  );

  const openAdd = () => navigate("/add");
  const closeMode = () => navigate(-1);

  const hndleAdd = (payload) => {
    dispatch(addSuggeStions);
    closeMode();
  };

  const handleUpotes = (id) => dispatch(toggleUpvote(id));
  const handleView = (item) => {
    navigate(`/feedback/${item.id}`);
  };
  return (
    <div>
      <SideBar
        filtereCategory={filtereCategory}
        setfiltereCategory={setfiltereCategory}
        roadmapCounts={roadmapCounts}
        openRoadMap={() => navigate("/roadmap")}
        openAdd={openAdd}
      />
      <div>
        <div>
          <div>
            <span>{suggestions.length} Suggestion</span>
            <div>
              <span>Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                name=""
                id=""
              >
                <option value="Most Upvotes">Most Upvotes</option>
                <option value="Least Upvotes">Least Upvotes</option>
                <option value="Most Commentes">Most Commentes</option>
                <option value="Least Commentes">Least Commentes</option>
              </select>
            </div>
          </div>
          <div>
            <button onClick={openAdd}>+ add feedback</button>
          </div>
          <FeedbackList
            suggestions={suggestions}
            filtereCategory={filtereCategory}
            sortBy={sortBy}
            onView={handleView}
          />
        </div>
      </div>
      {/* <FeedbackModal /> */}
    </div>
  );
};

export default HomePage;
