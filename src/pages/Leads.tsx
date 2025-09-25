import React, { useState } from "react";
import { Search, Filter, Phone, Mail, Calendar, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Leads = () => {
  const [leads] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      property: "Luxury Downtown Penthouse",
      source: "Avatar Chat",
      score: 85,
      status: "hot",
      lastContact: "2 hours ago",
      avatar: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png"
    },
    {
      id: 2,
      name: "Sarah Johnson", 
      email: "sarah.j@email.com",
      phone: "+1 (555) 987-6543",
      property: "Modern Family Home",
      source: "Website Form",
      score: 72,
      status: "warm",
      lastContact: "1 day ago",
      avatar: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png"
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "m.chen@email.com", 
      phone: "+1 (555) 456-7890",
      property: "Cozy Garden Cottage",
      source: "Avatar Voice Call",
      score: 91,
      status: "hot",
      lastContact: "30 min ago",
      avatar: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1 (555) 321-0987", 
      property: "Luxury Downtown Penthouse",
      source: "Referral",
      score: 45,
      status: "cold",
      lastContact: "3 days ago",
      avatar: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png"
    }
  ]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100";
    if (score >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return 'bg-red-500';
      case 'warm': return 'bg-yellow-500';
      case 'cold': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
            <p className="text-gray-600">Manage and track your leads</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">127 Total Leads</Badge>
            <Badge className="bg-green-500">24 New This Week</Badge>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input 
              placeholder="Search leads..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            Filters
          </Button>
        </div>

        {/* Leads List */}
        <div className="space-y-4">
          {leads.map((lead) => (
            <Card key={lead.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={lead.avatar} 
                      alt={lead.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{lead.name}</h3>
                        <Badge className={getStatusColor(lead.status)}>
                          {lead.status}
                        </Badge>
                        <div className={`px-2 py-1 rounded text-xs font-medium ${getScoreColor(lead.score)}`}>
                          <Star size={12} className="inline mr-1" />
                          {lead.score}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Mail size={14} className="mr-2" />
                          {lead.email}
                        </div>
                        <div className="flex items-center">
                          <Phone size={14} className="mr-2" />
                          {lead.phone}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                        <span className="font-medium">Interested in:</span>
                        <span className="text-blue-600">{lead.property}</span>
                        <span className="text-gray-400">•</span>
                        <span>Source: {lead.source}</span>
                        <span className="text-gray-400">•</span>
                        <span>Last contact: {lead.lastContact}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Phone size={14} className="mr-1" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail size={14} className="mr-1" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar size={14} className="mr-1" />
                      Schedule
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leads;