import React from 'react';
import { motion } from 'framer-motion';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  Building, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut,
  Plus,
  Bell,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Avatars', path: '/avatars' },
  { icon: Building, label: 'Properties', path: '/properties' },
  { icon: MessageSquare, label: 'Leads', path: '/leads' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const AppLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="fixed left-0 top-0 z-40 w-64 h-screen glass-sidebar"
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8 p-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <Building className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Virtual Sales</h2>
              <p className="text-xs text-gray-500">Real Estate Platform</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.button
                  key={item.path}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:bg-white/50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </motion.button>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="border-t border-white/20 pt-4">
            <div className="flex items-center gap-3 p-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user?.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.company}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Bar */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="glass-nav sticky top-0 z-30 px-6 py-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search properties, leads, avatars..."
                  className="pl-10 bg-white/60 backdrop-blur-sm border-white/30"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button size="sm" className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Create Avatar
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Button>
            </div>
          </div>
        </motion.header>

        {/* Page Content */}
        <main className="min-h-[calc(100vh-5rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;