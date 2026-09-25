import React, { useReducer, useState } from "react";
import { intialState, FormReducer } from "./FormReducer";

const steps = [
  {
    field: "username",
    placeholder: "Write name...",
  },
  {
    field: "city",
    placeholder: "Write city...",
  },
];

const MultiSteps = () => {

  const [state, dispatch] = useReducer(FormReducer, intialState);
  const [input, setInput] = useState("");

  const currentStep = steps[state.step - 1];

  const handleNext = () => {
    dispatch({ type: "SET_FIELD", field: currentStep.field, payload: input });
    setInput("");
    dispatch({ type: "NEXT_STEP" });
  };

  const handleBack = () => {
    dispatch({ type: "PREV_STEP" });
  };

if (state.step > steps.length) {
  console.log(state.formData);
  
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white border border-green-100 rounded-2xl shadow-xl text-center">
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Submission Successful</h1>
      <div className="text-gray-600 space-y-1">
        <p>User: <span className="font-semibold">{state.formData.username}</span></p>
        <p>City: {state.formData.city}</p>
        <p>Email: {state.formData.email}</p>
      </div>
    </div>
  );
}

return (
  <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
    {/* Progress Header */}
    <div className="mb-6">
      <div className="flex justify-between items-end mb-2">
        <h1 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          Step {state.step} of {steps.length}
        </h1>
        <span className="text-xs text-blue-600 font-semibold">{Math.round((state.step / steps.length) * 100)}% Complete</span>
      </div>
      {/* Visual Progress Bar */}
      <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-blue-600 h-full transition-all duration-300" 
          style={{ width: `${(state.step / steps.length) * 100}%` }}
        />
      </div>
    </div>

    {/* Input Field */}
    <input
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all mb-6 text-gray-700"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      type="text"
      placeholder={currentStep.placeholder}
    />

    {/* Action Buttons */}
    <div className="flex gap-3">
      {state.step > 1 && (
        <button 
          onClick={handleBack}
          className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          Back
        </button>
      )}

      <button 
        onClick={handleNext}
        className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all active:scale-[0.98]"
      >
        {state.step === steps.length ? "Submit Form" : "Continue"}
      </button>
    </div>
  </div>
);
};

export default MultiSteps;
