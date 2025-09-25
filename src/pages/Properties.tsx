import React, { useState } from "react";
import { Plus, Search, Filter, MapPin, Bed, Bath, Square } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Properties = () => {
  const [properties] = useState([
    {
      id: 1,
      title: "Luxury Downtown Penthouse",
      price: "$2,500,000",
      location: "Downtown District",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,400 sq ft",
      status: "available",
      image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
      leads: 12,
      views: 89
    },
    {
      id: 2,
      title: "Modern Family Home",
      price: "$850,000",
      location: "Suburban Heights", 
      bedrooms: 4,
      bathrooms: 3,
      area: "3,200 sq ft",
      status: "pending",
      image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
      leads: 8,
      views: 45
    },
    {
      id: 3,
      title: "Cozy Garden Cottage",
      price: "$450,000",
      location: "Green Valley",
      bedrooms: 2,
      bathrooms: 1,
      area: "1,800 sq ft", 
      status: "available",
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
      leads: 5,
      views: 23
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Properties</h1>
            <p className="text-gray-600">Manage your property listings</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={16} />
            Add Property
          </Button>
        </div>
      </header>

      <div className="p-6">
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input 
              placeholder="Search properties..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            Filters
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <Badge 
                  className={`absolute top-3 left-3 ${
                    property.status === 'available' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                >
                  {property.status}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg line-clamp-1">{property.title}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin size={14} className="mr-1" />
                      {property.location}
                    </CardDescription>
                  </div>
                  <span className="text-xl font-bold text-green-600">{property.price}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Bed size={14} className="mr-1" />
                    {property.bedrooms} bed
                  </div>
                  <div className="flex items-center">
                    <Bath size={14} className="mr-1" />
                    {property.bathrooms} bath
                  </div>
                  <div className="flex items-center">
                    <Square size={14} className="mr-1" />
                    {property.area}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-gray-600">Leads:</span>
                    <span className="ml-1 font-medium">{property.leads}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Views:</span>
                    <span className="ml-1 font-medium">{property.views}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button size="sm" className="flex-1">
                    View Details
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

export default Properties;