import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'buyer' | 'seller' | 'admin';
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isSignedIn: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  signOut: () => void;
}

// Mock users for demo
const mockUsers = [
  {
    id: '1',
    email: 'demo@saledirect.com.au',
    password: 'demo123',
    firstName: 'Demo',
    lastName: 'User',
    role: 'seller' as const
  },
  {
    id: '2',
    email: 'buyer@example.com',
    password: 'buyer123',
    firstName: 'John',
    lastName: 'Buyer',
    role: 'buyer' as const
  }
];

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: false,
  isSignedIn: false,

  signIn: async (email: string, password: string) => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = mockUsers.find(u => u.email === email && u.password === password);
    
    if (mockUser) {
      const { password: _, ...user } = mockUser;
      set({ 
        user, 
        isSignedIn: true, 
        isLoading: false 
      });
    } else {
      set({ isLoading: false });
      throw new Error('Invalid credentials');
    }
  },

  signUp: async (email: string, password: string, firstName: string, lastName: string) => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser = {
      id: Date.now().toString(),
      email,
      firstName,
      lastName,
      role: 'seller' as const
    };
    
    set({ 
      user: newUser, 
      isSignedIn: true, 
      isLoading: false 
    });
  },

  signOut: () => {
    set({ 
      user: null, 
      isSignedIn: false 
    });
  }
}));