
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, BarChart, Check, Shield } from 'lucide-react';

const MetricCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  value: string; 
  description: string; 
  icon: React.ElementType;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const DashboardMetrics = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Agents"
        value="14"
        description="4 new in last 30 days"
        icon={Bot}
      />
      <MetricCard
        title="Active Agents"
        value="8"
        description="2 increased since yesterday"
        icon={Shield}
      />
      <MetricCard
        title="Tasks Completed"
        value="257"
        description="12% increase from last week"
        icon={Check}
      />
      <MetricCard
        title="Detections"
        value="42"
        description="7 critical in last 7 days"
        icon={BarChart}
      />
    </div>
  );
};

export default DashboardMetrics;
