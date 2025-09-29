import React from 'react';
import { motion } from 'framer-motion';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
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
  Search,
  Moon,
  Sun
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
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="fixed left-0 top-0 z-40 w-64 h-screen glass-sidebar border-r border-border/20"
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8 p-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-xl flex items-center justify-center shadow-lg">
              <Building className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-foreground">PropertyAI</h2>
              <p className="text-xs text-muted-foreground">Real Estate Platform</p>
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
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </motion.button>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="border-t border-border/20 pt-4">
            <div className="flex items-center gap-3 p-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white text-sm font-medium">
                  {user?.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {user?.company}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
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
          className="glass-nav sticky top-0 z-30 px-6 py-4 border-b border-border/20"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search properties, leads, avatars..."
                  className="pl-10 bg-background/60 backdrop-blur-sm border-border/50"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleTheme}
                className="hover:bg-accent"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
              
              <Button size="sm" className="btn-real-estate">
                <Plus className="h-4 w-4 mr-2" />
                Create Avatar
              </Button>
              
              <Button variant="ghost" size="sm" className="relative hover:bg-accent">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-pulse-500 rounded-full text-xs text-white flex items-center justify-center animate-pulse">
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