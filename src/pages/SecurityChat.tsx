
import React from 'react';
import Layout from "@/components/layout/Layout";
import ChatInterface from "@/components/chat/ChatInterface";

const SecurityChat = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="py-6">
        <h1 className="text-2xl font-bold mb-2">Security Assistant</h1>
        <p className="text-muted-foreground">
          A specialized chat assistant for CISOs, vCISOs, and Heads of Security
        </p>
      </div>
      <ChatInterface />
    </div>
  );
};

export default SecurityChat;
