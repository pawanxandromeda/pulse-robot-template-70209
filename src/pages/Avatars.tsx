import React, { useState } from "react";
import { Plus, Edit, Eye, Power, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Avatars = () => {
  const [avatars] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Luxury Properties Specialist",
      status: "active",
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
      leads: 24,
      conversions: 8
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Commercial Real Estate Expert", 
      status: "inactive",
      image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
      leads: 15,
      conversions: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "First-Time Buyer Specialist",
      status: "active",
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      leads: 31,
      conversions: 12
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Virtual Avatars</h1>
            <p className="text-gray-600">Manage your AI sales agents</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={16} />
            Create New Avatar
          </Button>
        </div>
      </header>

      <div className="p-6">
        {/* Avatar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avatars.map((avatar) => (
            <Card key={avatar.id} className="relative">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={avatar.image} 
                      alt={avatar.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{avatar.name}</CardTitle>
                      <CardDescription>{avatar.role}</CardDescription>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Edit size={14} className="mr-2" />
                        Edit Avatar
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Eye size={14} className="mr-2" />
                        Preview
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Power size={14} className="mr-2" />
                        {avatar.status === 'active' ? 'Deactivate' : 'Activate'}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={avatar.status === 'active' ? 'default' : 'secondary'}>
                    {avatar.status === 'active' ? 'Active' : 'Inactive'}
                  </Badge>
                  {avatar.status === 'active' && (
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-600">Online</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Leads:</span>
                    <span className="font-medium">{avatar.leads}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Conversions:</span>
                    <span className="font-medium">{avatar.conversions}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Conversion Rate:</span>
                    <span className="font-medium text-green-600">
                      {Math.round((avatar.conversions / avatar.leads) * 100)}%
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye size={14} className="mr-1" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit size={14} className="mr-1" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Avatars;