import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Users, Building, Calendar, MessageSquare, TrendingUp, ArrowUpRight, Eye, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  
  const stats = [
    {
      title: "Active Leads",
      value: "127",
      change: "+12%",
      changeType: "increase",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Properties Listed",
      value: "34",
      change: "+3",
      changeType: "increase",
      icon: Building,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Scheduled Visits",
      value: "18",
      change: "+5",
      changeType: "increase",
      icon: Calendar,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Conversations",
      value: "89",
      change: "+24%",
      changeType: "increase",
      icon: MessageSquare,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const recentActivity = [
    { action: "New lead captured", property: "Sunset Villa", time: "2 min ago", type: "lead", icon: Users },
    { action: "Visit scheduled", property: "Downtown Loft", time: "15 min ago", type: "visit", icon: Calendar },
    { action: "Avatar conversation", property: "Garden House", time: "1 hour ago", type: "chat", icon: MessageSquare },
    { action: "Property updated", property: "Ocean View", time: "2 hours ago", type: "property", icon: Building }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-6 space-y-6"
    >
      {/* Welcome Section */}
      <motion.div variants={itemVariants} className="premium-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {user?.name?.split(' ')[0]} 👋
            </h1>
            <p className="text-gray-600 mt-2">
              Here's what's happening with your virtual sales agents today
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Today</p>
            <p className="text-2xl font-bold text-gray-900">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="stat-card group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-2">
                        {stat.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-gray-900">
                          {stat.value}
                        </span>
                        <div className="flex items-center gap-1 text-green-600">
                          <TrendingUp className="h-4 w-4" />
                          <span className="text-sm font-medium">{stat.change}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">from last month</p>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="apple-card h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">Recent Activity</CardTitle>
                  <CardDescription>Latest interactions and updates</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  View All <ArrowUpRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/80 transition-colors duration-200 cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.property}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions & Performance */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <motion.div variants={itemVariants}>
            <Card className="apple-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start btn-primary">
                  <Building className="h-4 w-4 mr-3" />
                  Add Property
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-blue-50">
                  <Users className="h-4 w-4 mr-3" />
                  View Leads
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-blue-50">
                  <BarChart3 className="h-4 w-4 mr-3" />
                  Analytics
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Avatar Performance */}
          <motion.div variants={itemVariants}>
            <Card className="apple-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Top Avatar</CardTitle>
                <CardDescription>Best performing this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">SA</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sales Assistant</p>
                      <p className="text-sm text-gray-600">Luxury Properties</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Conversion Rate</span>
                      <span className="font-semibold text-green-600">34%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{width: '34%'}}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-xl font-bold text-gray-900">45</p>
                      <p className="text-xs text-gray-600">Leads</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">23</p>
                      <p className="text-xs text-gray-600">Visits</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">8</p>
                      <p className="text-xs text-gray-600">Sales</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;