
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Pentesting', value: 20 },
  { name: 'Incident Response', value: 15 },
  { name: 'Reverse Engineering', value: 10 },
  { name: 'Compliance', value: 8 },
  { name: 'Monitoring', value: 12 },
];

const StatusSummary = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Agent Type Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{
                top: 20,
                right: 30,
                left: 60,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" tick={{ fill: 'hsl(var(--foreground))' }} />
              <YAxis dataKey="name" type="category" tick={{ fill: 'hsl(var(--foreground))' }} />
              <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`hsl(${262 + index * 20} 83% 58% / ${0.7 + index * 0.05})`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusSummary;
