
import React, { useState, useRef, useEffect } from 'react';
import { SendHorizontal, Bot, User, Trash2, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

const INITIAL_MESSAGE: MessageType = {
  id: '0',
  content: 'Hello, I am your Agentic Security Assistant. How can I help you with your cybersecurity concerns today?',
  sender: 'ai',
  timestamp: new Date(),
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<MessageType[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  
  // Predefined security topics that could be suggested to the user
  const securityTopics = [
    "How can I prioritize my security initiatives?",
    "What are the latest emerging threats?",
    "How to effectively communicate security risks to the board?",
    "Best practices for security awareness training",
    "How to implement Zero Trust Architecture"
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      const aiMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        content: `Thank you for your question about "${inputValue}". As a security assistant, I would analyze this from risk, compliance, and strategic perspectives. Would you like me to elaborate on specific aspects of this topic?`,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const clearConversation = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  const downloadConversation = () => {
    const text = messages
      .map((msg) => `[${msg.sender.toUpperCase()}]: ${msg.content}`)
      .join('\n\n');
    
    const blob = new Blob([text], { type: 'text/plain' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `security-chat-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] lg:h-[calc(100vh-5rem)] max-w-4xl mx-auto">
      {/* Chat Header */}
      <div className="flex justify-between items-center py-4 border-b">
        <h2 className="text-xl font-semibold">Security Assistant Chat</h2>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={clearConversation} 
            title="Clear conversation"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={downloadConversation} 
            title="Download conversation"
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-6">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className="flex-shrink-0 mr-4">
                <Avatar>
                  <AvatarFallback className={message.sender === 'ai' ? 'bg-primary/10 text-primary' : 'bg-muted'}>
                    {message.sender === 'ai' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div 
                className={`p-4 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-primary text-primary-foreground mr-4' 
                    : 'bg-muted'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
                <p className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={endOfMessagesRef} />
      </div>

      {/* Example Questions */}
      {messages.length === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          {securityTopics.map((topic, index) => (
            <Button 
              key={index} 
              variant="outline" 
              className="justify-start text-left h-auto py-3 text-sm"
              onClick={() => setInputValue(topic)}
            >
              {topic}
            </Button>
          ))}
        </div>
      )}

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="border-t pt-4 pb-6">
        <div className="relative">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about security strategies, threat intel, compliance..."
            className="pr-12 min-h-[80px] resize-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button 
            type="submit" 
            size="icon" 
            className="absolute right-2 bottom-2"
            disabled={!inputValue.trim() || isTyping}
          >
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Press Enter to send, Shift+Enter for a new line
        </p>
      </form>
    </div>
  );
};

export default ChatInterface;
