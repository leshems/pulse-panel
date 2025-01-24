import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Active', value: 400 },
  { name: 'Inactive', value: 100 },
];

const COLORS = ['hsl(var(--primary))', '#E2E8F0'];

export const UsersChart = () => {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="font-semibold text-lg">User Distribution</h3>
        <p className="text-sm text-muted-foreground">Active vs Inactive Users</p>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};