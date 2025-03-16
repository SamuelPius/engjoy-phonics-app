
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminHeader from '../components/admin/AdminHeader';
import UserManagement from '../components/admin/UserManagement';
import CourseManagement from '../components/admin/CourseManagement';
import Analytics from '../components/admin/Analytics';
import Settings from '../components/admin/Settings';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { User, BookOpen, BarChart2, Settings as SettingsIcon, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('users');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you would implement actual logout logic
    toast({
      title: "Logged out",
      description: "You have been logged out successfully"
    });
    navigate('/');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r border-muted">
          <SidebarContent>
            <div className="py-4 flex items-center justify-center">
              <h1 className="font-comic font-bold text-xl text-phonics-blue px-4">
                ENGJOY Admin
              </h1>
            </div>
            
            <SidebarGroup>
              <SidebarGroupLabel>Management</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab('users')}
                      className={activeTab === 'users' ? 'bg-muted text-primary' : ''}
                    >
                      <User size={18} />
                      <span>Users</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab('courses')}
                      className={activeTab === 'courses' ? 'bg-muted text-primary' : ''}
                    >
                      <BookOpen size={18} />
                      <span>Courses</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab('analytics')}
                      className={activeTab === 'analytics' ? 'bg-muted text-primary' : ''}
                    >
                      <BarChart2 size={18} />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab('settings')}
                      className={activeTab === 'settings' ? 'bg-muted text-primary' : ''}
                    >
                      <SettingsIcon size={18} />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <div className="mt-auto p-4">
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
              <div className="text-xs text-muted-foreground text-center mt-4">
                ENGJOY Admin v1.0
              </div>
            </div>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <AdminHeader />
          
          <main className="flex-1 overflow-y-auto p-6">
            <div className="container mx-auto">
              <div className="block lg:hidden mb-4">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="users">Users</TabsTrigger>
                    <TabsTrigger value="courses">Courses</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              {activeTab === 'users' && <UserManagement />}
              {activeTab === 'courses' && <CourseManagement />}
              {activeTab === 'analytics' && <Analytics />}
              {activeTab === 'settings' && <Settings />}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Admin;
