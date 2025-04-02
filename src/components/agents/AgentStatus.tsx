
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { RefreshCw, Play, Square, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Agent } from './AgentCard';

const cpuData = [
  { time: '12:00', value: 30 },
  { time: '12:05', value: 45 },
  { time: '12:10', value: 55 },
  { time: '12:15', value: 40 },
  { time: '12:20', value: 30 },
  { time: '12:25', value: 65 },
  { time: '12:30', value: 50 },
];

const memoryData = [
  { time: '12:00', value: 40 },
  { time: '12:05', value: 42 },
  { time: '12:10', value: 45 },
  { time: '12:15', value: 50 },
  { time: '12:20', value: 55 },
  { time: '12:25', value: 58 },
  { time: '12:30', value: 60 },
];

const logs = [
  { timestamp: '12:30:45', level: 'INFO', message: 'Agent started scanning target system' },
  { timestamp: '12:31:12', level: 'INFO', message: 'Discovered open ports: 22, 80, 443' },
  { timestamp: '12:32:01', level: 'WARN', message: 'Weak SSH configuration detected' },
  { timestamp: '12:33:15', level: 'INFO', message: 'Checking web application vulnerabilities' },
  { timestamp: '12:34:22', level: 'ERROR', message: 'Connection timeout on endpoint /api/users' },
  { timestamp: '12:35:05', level: 'INFO', message: 'Resumed scanning after reconnection' },
  { timestamp: '12:36:30', level: 'WARN', message: 'Outdated TLS version in use (TLS 1.1)' },
  { timestamp: '12:37:45', level: 'INFO', message: 'Scan complete, generating report' },
  { timestamp: '12:38:10', level: 'INFO', message: 'Report saved to /reports/scan-001.pdf' },
];

interface AgentStatusProps {
  agent: Agent;
  onRestart: (agent: Agent) => void;
  onStop: (agent: Agent) => void;
}

const AgentStatus: React.FC<AgentStatusProps> = ({ agent, onRestart, onStop }) => {
  const isActive = agent.status === 'active';
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center gap-2">
            {agent.status === 'active' && <CheckCircle className="h-4 w-4 text-success" />}
            {agent.status === 'warning' && <AlertTriangle className="h-4 w-4 text-warning" />}
            {agent.status === 'inactive' && <Clock className="h-4 w-4 text-muted-foreground" />}
            {agent.name}
          </CardTitle>
          <div className="flex space-x-2">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <RefreshCw className="h-4 w-4" />
            </Button>
            {isActive ? (
              <Button 
                size="sm" 
                variant="outline" 
                className="h-8 px-3 flex items-center gap-1" 
                onClick={() => onStop(agent)}
              >
                <Square className="h-4 w-4" />
                <span>Stop</span>
              </Button>
            ) : (
              <Button 
                size="sm" 
                variant="default" 
                className="h-8 px-3 flex items-center gap-1" 
                onClick={() => onRestart(agent)}
              >
                <Play className="h-4 w-4" />
                <span>Start</span>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="metrics" className="h-full">
          <TabsList className="mb-4 grid w-full grid-cols-2">
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="logs">Activity Logs</TabsTrigger>
          </TabsList>
          <TabsContent value="metrics" className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">CPU Usage</h4>
              <div className="h-[150px] bg-card rounded-md border p-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={cpuData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" tick={{ fontSize: 10, fill: 'hsl(var(--foreground))' }} />
                    <YAxis tick={{ fontSize: 10, fill: 'hsl(var(--foreground))' }} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }} />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Memory Usage</h4>
              <div className="h-[150px] bg-card rounded-md border p-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={memoryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" tick={{ fontSize: 10, fill: 'hsl(var(--foreground))' }} />
                    <YAxis tick={{ fontSize: 10, fill: 'hsl(var(--foreground))' }} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }} />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="hsl(var(--info))" 
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="logs" className="h-[340px]">
            <ScrollArea className="h-full rounded-md border p-4">
              <div className="space-y-3">
                {logs.map((log, index) => (
                  <div key={index} className="text-xs border-b border-border pb-2">
                    <span className="text-muted-foreground font-mono">{log.timestamp}</span>{' '}
                    <span className={`font-medium ${
                      log.level === 'ERROR' ? 'text-destructive' : 
                      log.level === 'WARN' ? 'text-warning' : 
                      'text-foreground'
                    }`}>
                      [{log.level}]
                    </span>{' '}
                    <span>{log.message}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AgentStatus;
