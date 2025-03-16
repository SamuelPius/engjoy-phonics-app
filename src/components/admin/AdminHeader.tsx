
import { useState } from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const AdminHeader = () => {
  const [notifications] = useState([
    { id: 1, message: 'New user registered', time: '2 minutes ago' },
    { id: 2, message: 'Course purchase completed', time: '1 hour ago' },
    { id: 3, message: 'Payment failed', time: '3 hours ago' }
  ]);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 md:px-6">
        <SidebarTrigger className="mr-2 lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </SidebarTrigger>
        
        <div className="w-full flex-1 flex items-center gap-4 md:ml-auto md:gap-6 lg:gap-8">
          <form className="hidden flex-1 sm:flex">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-background pl-8 focus-visible:ring-blue-500"
              />
            </div>
          </form>
          
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                      {notifications.length}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="flex justify-between items-center border-b pb-2">
                  <h4 className="font-medium">Notifications</h4>
                  <Button variant="ghost" size="sm" className="text-xs h-auto p-1">
                    Mark all as read
                  </Button>
                </div>
                <div className="max-h-80 overflow-auto">
                  {notifications.map(notification => (
                    <div key={notification.id} className="py-2 border-b last:border-0">
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            
            <Avatar>
              <AvatarImage src="" alt="Admin" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
