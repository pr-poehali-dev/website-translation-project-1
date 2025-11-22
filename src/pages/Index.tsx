import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your career consultant. I'll help you determine your development path and create a growth plan.",
      isUser: false,
    },
    {
      id: 2,
      text: "What skills should I develop for Senior?",
      isUser: true,
    },
    {
      id: 3,
      text: "Your AI Development Index shows good growth readiness. I suggest taking junior developer mentorship and parallel architecture course.",
      isUser: false,
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: inputValue, isUser: true },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
            <Icon name="Briefcase" size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              AI Career Consultant
            </h1>
            <p className="text-sm text-gray-500">
              Ask about professional development
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <Card
              className={`max-w-2xl p-4 ${
                message.isUser
                  ? "bg-cyan-500 text-white ml-12"
                  : "bg-gray-100 text-gray-900 mr-12"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
            </Card>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 bg-white px-6 py-4">
        <div className="flex gap-3 max-w-4xl mx-auto">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Example: What skills should I develop for Senior? How to create a development plan?"
            className="flex-1 px-4 py-3 border-2 border-cyan-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
          />
          <Button
            onClick={handleSend}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 rounded-xl"
          >
            <Icon name="Send" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;