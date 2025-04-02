
import React from 'react';
import DashboardMetrics from '@/components/dashboard/DashboardMetrics';
import AgentActivityChart from '@/components/dashboard/AgentActivityChart';
import StatusSummary from '@/components/dashboard/StatusSummary';
import SecurityThreatMap from '@/components/dashboard/SecurityThreatMap';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      
      <DashboardMetrics />
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        <AgentActivityChart />
      </div>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        <StatusSummary />
        <SecurityThreatMap />
      </div>
    </div>
  );
};

export default Dashboard;
