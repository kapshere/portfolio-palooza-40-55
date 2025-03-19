
// Simple authentication utility for admin users
// In a production environment, this should be replaced with a more secure solution

export interface AdminUser {
  username: string;
  isAuthenticated: boolean;
}

// Store auth state in localStorage
const AUTH_KEY = 'blog_admin_auth';

export const login = (username: string, password: string): boolean => {
  // Only allow the specific admin credentials
  if (username === 'admin' && password === 'C123@456#789(0)') {
    const user: AdminUser = {
      username,
      isAuthenticated: true
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    return true;
  }
  return false;
};

export const logout = (): void => {
  localStorage.removeItem(AUTH_KEY);
};

export const getAuthUser = (): AdminUser | null => {
  const authData = localStorage.getItem(AUTH_KEY);
  if (!authData) return null;
  
  try {
    return JSON.parse(authData) as AdminUser;
  } catch (error) {
    console.error('Failed to parse auth data', error);
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  const user = getAuthUser();
  return !!user?.isAuthenticated;
};
