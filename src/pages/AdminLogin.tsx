
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { login } from '@/utils/auth';
import Navigation from '@/components/Navigation';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const success = login(username, password);
    
    if (success) {
      toast.success('Logged in successfully');
      navigate('/admin/blog');
    } else {
      toast.error('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="bg-gradient-to-b from-secondary to-secondary/90 min-h-screen">
      <Navigation />
      <div className="pt-24 px-4">
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-white/20">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">Admin Login</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-white mb-2">Username</label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-white/20 border-white/30 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-white mb-2">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white/20 border-white/30 text-white"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
