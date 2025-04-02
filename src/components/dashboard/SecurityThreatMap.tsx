
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Critical', value: 12, color: 'hsl(var(--destructive))' },
  { name: 'High', value: 23, color: 'hsl(var(--warning))' },
  { name: 'Medium', value: 35, color: 'hsl(var(--info))' },
  { name: 'Low', value: 45, color: 'hsl(var(--success))' },
];

const SecurityThreatMap = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Threat Severity Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }} />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityThreatMap;
