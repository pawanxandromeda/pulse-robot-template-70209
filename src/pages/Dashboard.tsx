import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Users, Building, Calendar, MessageSquare, TrendingUp, ArrowUpRight, Eye, Phone, Mail, DollarSign, Target, Clock, Award } from "lucide-react";
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
      changeType: "increase" as const,
      icon: Users,
      color: "from-pulse-500 to-pulse-600",
      description: "Quality prospects this month"
    },
    {
      title: "Properties Listed",
      value: "34",
      change: "+3",
      changeType: "increase" as const,
      icon: Building,
      color: "from-emerald-500 to-emerald-600",
      description: "Available properties"
    },
    {
      title: "Revenue Generated",
      value: "$284K",
      change: "+18%",
      changeType: "increase" as const,
      icon: DollarSign,
      color: "from-green-500 to-green-600",
      description: "Commission this quarter"
    },
    {
      title: "Conversion Rate",
      value: "34%",
      change: "+5%",
      changeType: "increase" as const,
      icon: Target,
      color: "from-purple-500 to-purple-600",
      description: "Lead to sale conversion"
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
        duration: 0.5
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
      <motion.div variants={itemVariants} className="real-estate-card p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome back, {user?.name?.split(' ')[0]} 👋
            </h1>
            <p className="text-muted-foreground text-lg">
              Your AI-powered real estate empire is thriving
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-pulse-500" />
                <span className="text-sm font-medium text-foreground">Top Performer</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-pulse-500" />
                <span className="text-sm text-muted-foreground">Online now</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Today</p>
            <p className="text-3xl font-bold text-foreground">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-sm text-pulse-500 font-medium">Active Dashboard</p>
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
              <Card className="real-estate-card group cursor-pointer overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-3">
                        {stat.title}
                      </p>
                      <div className="flex items-end gap-3 mb-2">
                        <span className="text-4xl font-bold text-foreground">
                          {stat.value}
                        </span>
                        <div className="flex items-center gap-1 text-emerald-600 pb-1">
                          <TrendingUp className="h-4 w-4" />
                          <span className="text-sm font-semibold">{stat.change}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{stat.description}</p>
                    </div>
                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-pulse-500/30 to-transparent"></div>
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