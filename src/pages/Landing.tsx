import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Landing = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground"
  >
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to UpvoteLabs</h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Discover, share, and validate startup ideas with a vibrant community of innovators.
      </p>
      <SignInButton mode="modal">
        <Button size="lg">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </SignInButton>
    </div>
  </motion.div>
);
