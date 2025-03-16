
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { BellRing, Keyboard, ShieldCheck, User, Palette } from 'lucide-react';

const Settings = () => {
  // Site settings
  const [siteName, setSiteName] = useState('ENGJOY PHONICS & GRAMMAR');
  const [siteEmail, setSiteEmail] = useState('admin@engjoy.com');
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);
  
  // Security settings
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(30);
  
  // Handle site settings save
  const handleSaveSiteSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your site settings have been updated successfully.",
    });
  };
  
  // Handle notification settings save
  const handleSaveNotificationSettings = () => {
    toast({
      title: "Notification preferences updated",
      description: "Your notification settings have been saved.",
    });
  };
  
  // Handle security settings save
  const handleSaveSecuritySettings = () => {
    toast({
      title: "Security settings updated",
      description: "Your security preferences have been saved.",
    });
  };
  
  // Handle appearance settings save
  const handleSaveAppearanceSettings = () => {
    toast({
      title: "Appearance settings updated",
      description: "Your theme preferences have been saved.",
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>
      
      <Tabs defaultValue="site" className="space-y-4">
        <TabsList>
          <TabsTrigger value="site" className="flex items-center gap-2">
            <Keyboard className="h-4 w-4" />
            <span>Site</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <BellRing className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span>Security</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>Appearance</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="site" className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Site Information</h3>
            <p className="text-sm text-muted-foreground">
              Update your site details and contact information.
            </p>
          </div>
          <Separator />
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="site-name" className="text-sm font-medium">
                  Site Name
                </label>
                <Input
                  id="site-name"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="site-email" className="text-sm font-medium">
                  Contact Email
                </label>
                <Input
                  id="site-email"
                  type="email"
                  value={siteEmail}
                  onChange={(e) => setSiteEmail(e.target.value)}
                />
              </div>
            </div>
            <Button onClick={handleSaveSiteSettings}>Save Changes</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Notification Preferences</h3>
            <p className="text-sm text-muted-foreground">
              Configure how you want to receive notifications.
            </p>
          </div>
          <Separator />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="email-notifications" className="text-sm font-medium">
                  Email Notifications
                </label>
                <p className="text-xs text-muted-foreground">
                  Receive notifications via email.
                </p>
              </div>
              <Switch
                id="email-notifications"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="sms-notifications" className="text-sm font-medium">
                  SMS Notifications
                </label>
                <p className="text-xs text-muted-foreground">
                  Receive notifications via SMS.
                </p>
              </div>
              <Switch
                id="sms-notifications"
                checked={smsNotifications}
                onCheckedChange={setSmsNotifications}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="marketing-emails" className="text-sm font-medium">
                  Marketing Emails
                </label>
                <p className="text-xs text-muted-foreground">
                  Receive marketing and promotional emails.
                </p>
              </div>
              <Switch
                id="marketing-emails"
                checked={marketingEmails}
                onCheckedChange={setMarketingEmails}
              />
            </div>
            <Button onClick={handleSaveNotificationSettings}>Save Preferences</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Security Settings</h3>
            <p className="text-sm text-muted-foreground">
              Manage your account security preferences.
            </p>
          </div>
          <Separator />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="two-factor" className="text-sm font-medium">
                  Two-Factor Authentication
                </label>
                <p className="text-xs text-muted-foreground">
                  Secure your account with two-factor authentication.
                </p>
              </div>
              <Switch
                id="two-factor"
                checked={twoFactorAuth}
                onCheckedChange={setTwoFactorAuth}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="session-timeout" className="text-sm font-medium">
                Session Timeout (minutes)
              </label>
              <Input
                id="session-timeout"
                type="number"
                min={5}
                value={sessionTimeout}
                onChange={(e) => setSessionTimeout(parseInt(e.target.value) || 30)}
              />
              <p className="text-xs text-muted-foreground">
                Set how long until inactive sessions are automatically logged out.
              </p>
            </div>
            <Button onClick={handleSaveSecuritySettings}>Save Security Settings</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Appearance Settings</h3>
            <p className="text-sm text-muted-foreground">
              Customize how your admin panel looks.
            </p>
          </div>
          <Separator />
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Theme</label>
              <div className="grid grid-cols-3 gap-2">
                <div 
                  className="relative aspect-video cursor-pointer rounded-md bg-white border border-muted p-1 ring-2 ring-primary"
                  onClick={() => handleSaveAppearanceSettings()}
                >
                  <div className="h-3 w-full rounded bg-primary mb-1"></div>
                  <div className="h-2 w-3/4 rounded bg-muted"></div>
                  <span className="absolute bottom-1 right-1 text-[10px] text-muted-foreground">Light</span>
                </div>
                <div 
                  className="relative aspect-video cursor-pointer rounded-md bg-slate-950 border border-muted p-1"
                  onClick={() => handleSaveAppearanceSettings()}
                >
                  <div className="h-3 w-full rounded bg-primary mb-1"></div>
                  <div className="h-2 w-3/4 rounded bg-muted"></div>
                  <span className="absolute bottom-1 right-1 text-[10px] text-muted-foreground">Dark</span>
                </div>
                <div 
                  className="relative aspect-video cursor-pointer rounded-md bg-gradient-to-br from-blue-50 to-white border border-muted p-1"
                  onClick={() => handleSaveAppearanceSettings()}
                >
                  <div className="h-3 w-full rounded bg-primary mb-1"></div>
                  <div className="h-2 w-3/4 rounded bg-muted"></div>
                  <span className="absolute bottom-1 right-1 text-[10px] text-muted-foreground">System</span>
                </div>
              </div>
            </div>
            <Button onClick={handleSaveAppearanceSettings}>Save Appearance</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
