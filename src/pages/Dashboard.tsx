import React from "react";
import { BarChart3, Users, Building, Calendar, MessageSquare, Settings, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Leads",
      value: "127",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Properties Listed",
      value: "34",
      change: "+3",
      icon: Building,
      color: "text-green-600"
    },
    {
      title: "Scheduled Visits",
      value: "18",
      change: "+5",
      icon: Calendar,
      color: "text-purple-600"
    },
    {
      title: "Conversations",
      value: "89",
      change: "+24%",
      icon: MessageSquare,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, Sarah</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={16} />
            Create Avatar
          </Button>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-green-600 mt-1">
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest interactions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "New lead captured", property: "Sunset Villa", time: "2 min ago" },
                  { action: "Visit scheduled", property: "Downtown Loft", time: "15 min ago" },
                  { action: "Avatar conversation", property: "Garden House", time: "1 hour ago" },
                  { action: "Property updated", property: "Ocean View", time: "2 hours ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.property}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus size={16} className="mr-2" />
                Add Property
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users size={16} className="mr-2" />
                View Leads
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 size={16} className="mr-2" />
                Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings size={16} className="mr-2" />
                Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;