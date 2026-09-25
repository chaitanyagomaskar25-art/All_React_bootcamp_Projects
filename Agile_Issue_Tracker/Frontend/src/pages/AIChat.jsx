import { useState, useRef, useEffect } from "react";
import { Bot, Send, User, Loader2, Sparkles, RefreshCw } from "lucide-react";
import { useGemini } from "../hooks/useGemini";

const SUGGESTIONS = [
  "Summarize open tickets for this sprint",
  "How do I assign a task to a team member?",
  "What is our team's current velocity?",
];

const AIChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const { mutate, isPending } = useGemini();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isPending]);

  const handleSend = (textToSend = message) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isPending) return;

    const userMessage = {
      sender: "user",
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    mutate(trimmed, {
      onSuccess: (reply) => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          },
        ]);
      },
      onError: () => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: "Sorry, I ran into an issue connecting to the AI service. Please try again.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          },
        ]);
      },
    });
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="max-w-5xl mx-auto h-[calc(100vh-2rem)] md:h-[88vh] flex flex-col bg-white dark:bg-[#0b1329] rounded-2xl border border-slate-200 dark:border-blue-900/50 shadow-2xl overflow-hidden text-slate-800 dark:text-sky-100 transition-colors duration-300">
      
      {/* Header */}
      <div className="px-5 py-3.5 bg-slate-50 dark:bg-[#070d19]/90 border-b border-slate-200 dark:border-blue-900/50 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-slate-50 dark:border-[#070d19] rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight">Agile Copilot</h2>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-sky-300 border border-blue-200 dark:border-blue-700/50 rounded-md">
                AI ACTIVE
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-sky-400/70">Ask questions about tasks, sprints, and project metrics</p>
          </div>
        </div>

        {messages.length > 0 && (
          <button
            onClick={handleClearChat}
            className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-sky-400/70 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-blue-900/40 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium"
            title="Reset Conversation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Clear Chat</span>
          </button>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100/50 dark:bg-[#070d19]/50 flex flex-col gap-4 custom-scrollbar">
        
        {/* Empty State */}
        {messages.length === 0 && (
          <div className="m-auto flex flex-col items-center justify-center text-center max-w-md py-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-sky-400 mb-4 shadow-inner">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Agile Tracker Assistant</h3>
            <p className="text-xs text-slate-500 dark:text-sky-300/70 mt-1.5 mb-6 leading-relaxed">
              I can analyze your project status, help manage tickets, or explain tracker workflows.
            </p>

            <div className="w-full space-y-2">
              <p className="text-[11px] font-bold text-slate-400 dark:text-sky-400/60 uppercase tracking-wider font-mono text-left px-1">
                Suggested Prompts
              </p>
              {SUGGESTIONS.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(suggestion)}
                  className="w-full text-left p-3 rounded-xl bg-white dark:bg-[#0f1933] border border-slate-200 dark:border-blue-900/40 hover:border-blue-500/50 dark:hover:border-blue-500/60 hover:bg-slate-50 dark:hover:bg-blue-950 text-xs text-slate-700 dark:text-sky-200 hover:text-blue-600 dark:hover:text-white transition-all duration-200 shadow-xs flex items-center justify-between group cursor-pointer"
                >
                  <span className="font-medium">{suggestion}</span>
                  <span className="text-slate-400 dark:text-sky-400/60 group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors font-semibold">→</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat History */}
        {messages.map((msg, index) => {
          const isUser = msg.sender === "user";
          return (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                isUser ? "flex-row-reverse" : "flex-row"
              } animate-in fade-in duration-200`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border shadow-xs ${
                  isUser
                    ? "bg-slate-200 dark:bg-blue-950 border-slate-300 dark:border-blue-800/60 text-slate-700 dark:text-sky-200"
                    : "bg-blue-600 border-blue-500 text-white"
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} max-w-[85%] sm:max-w-xl`}>
                <div className="flex items-center gap-2 mb-1 px-1">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-sky-400/70">
                    {isUser ? "You" : "Agile Copilot"}
                  </span>
                  {msg.timestamp && (
                    <span className="text-[10px] text-slate-400 dark:text-sky-400/50">{msg.timestamp}</span>
                  )}
                </div>

                <div
                  className={`rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-xs whitespace-pre-wrap wrap-break-words ${
                    isUser
                      ? "bg-blue-600 text-white rounded-tr-xs font-normal"
                      : "bg-white dark:bg-[#0f1933] border border-slate-200 dark:border-blue-900/40 text-slate-800 dark:text-sky-100 rounded-tl-xs"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          );
        })}

        {/* Thinking Indicator */}
        {isPending && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 border border-blue-500 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white dark:bg-[#0f1933] border border-slate-200 dark:border-blue-900/40 rounded-2xl rounded-tl-xs px-4 py-3 text-xs font-semibold text-slate-700 dark:text-sky-200 flex items-center gap-2.5 shadow-xs">
              <span className="flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-sky-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-sky-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-sky-400 rounded-full animate-bounce" />
              </span>
              <span>Copilot is writing...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="p-3 sm:p-4 bg-slate-50 dark:bg-[#070d19]/90 border-t border-slate-200 dark:border-blue-900/50 shrink-0">
        <div className="flex items-center gap-2 relative">
          <input
            value={message}
            disabled={isPending}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-blue-900/60 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-[#0f1933] focus:ring-2 focus:ring-blue-500/20 rounded-xl pl-4 pr-16 py-3 text-xs sm:text-sm text-slate-900 dark:text-sky-100 placeholder-slate-400 dark:placeholder-sky-400/50 focus:outline-none transition-all duration-200 font-medium disabled:opacity-60"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />

          <button
            onClick={() => handleSend()}
            disabled={!message.trim() || isPending}
            className="bg-blue-600 hover:bg-blue-500 active:scale-95 disabled:opacity-40 disabled:pointer-events-none text-white rounded-xl px-4 py-2.5 transition-all duration-200 shadow-md shadow-blue-600/30 flex items-center justify-center cursor-pointer shrink-0"
            title="Send Message"
          >
            {isPending ? (
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
            ) : (
              <div className="flex items-center gap-1.5">
                <span className="hidden sm:inline text-xs font-bold">Send</span>
                <Send className="w-4 h-4" />
              </div>
            )}
          </button>
        </div>

        <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-slate-400 dark:text-sky-400/50 font-medium">
          <span>AI responses are generated based on project context</span>
          <span className="hidden sm:inline">Press <kbd className="font-mono bg-slate-200 dark:bg-blue-950 border border-slate-300 dark:border-blue-800/60 rounded px-1 text-slate-600 dark:text-sky-300">Enter ↵</kbd> to send</span>
        </div>
      </div>
    </div>
  );
};

export default AIChat;