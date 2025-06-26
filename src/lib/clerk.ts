import { ClerkProvider } from '@clerk/clerk-react';

// For demo purposes, we'll use a mock implementation
// In production, you would use your actual Clerk publishable key
export const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'demo-key';

export { ClerkProvider };