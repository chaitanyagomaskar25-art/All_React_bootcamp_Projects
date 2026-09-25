import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  suggestions: "",
  comments: "",
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addSuggeStions: (state, action) => {
      const payload = action.payload;
      const newSuggestions = {
        id: Date.now(),
        title: payload.title,
        description: payload.description,
        category: payload.category || "Feature",
        status: payload.status || "Planned",
        upvotes: 0,
        comments: 0,
        upvoted: false,
      };
      state.suggestions.push(newSuggestions);
    },
    updateSuggestions: (state, action) => {
      const updated = action.payload;
      const idx = state.suggestions.findIndex((s) => s.id === updated.id);
      if (idx !== -1) {
        state.suggestions[idx] = { ...state.suggestions[idx], ...updated };
      }
    },
    deleteSuggestions: (state, action) => {
      const id = action.payload;
      state.suggestions = state.suggestions.filter((s) => s.id !== id);
      delete state.comments[id];
    },
    toggleUpvote: (state, action) => {
      const id = action.payload;
      const item = state.suggestions.find((s) => s.id === id);

      if (item) {
        item.updated = !item.updated;
        item.upvotes = item.updated
          ? item.upvotes + 1
          : Math.max(0, item.upvotes - 1);
      }
    },
    addComment: (state, action) => {
      const { suggestionsId, comment } = action.payload;
      if (!state.comments[suggestionsId]) state.comments[suggestionsId] = [];
      state.comments[suggestionsId].push(comment);

      const item = state.suggestions.find((s) => s.id === suggestionsId);
      if (item) item.comments = (item.comments || 0) + 1;
    },
    replaceAll: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  addSuggeStions,
  updateSuggestions,
  deleteSuggestions,
  toggleUpvote,
  addComment,
  replaceAll,
} = feedbackSlice.actions;
export default feedbackSlice.reducer;
