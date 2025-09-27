import { useSignIn } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSearchParams } from 'react-router-dom';

export const Landing = () => {
  const { signIn } = useSignIn();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirect_to') || '/discovery';

  const handleGetStarted = async () => {
    if (signIn) {
      await signIn.navigate({ redirectUrl: redirectTo });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4 text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to UpvoteLabs</h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Discover AI-curated startup ideas from Reddit, validate demand, and build your next project with community feedback.
      </p>
      <Button
        size="lg"
        onClick={handleGetStarted}
        className="flex items-center gap-2 mb-12"
        aria-label="Get started with UpvoteLabs"
      >
        <Zap className="h-5 w-5" /> Get Started
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        <Card><CardHeader><CardTitle>Idea Discovery</CardTitle></CardHeader><CardContent><p>Explore trending ideas with validated demand signals from social platforms.</p></CardContent></Card>
        <Card><CardHeader><CardTitle>Community Forum</CardTitle></CardHeader><CardContent><p>Share your projects and get feedback from a vibrant startup community.</p></CardContent></Card>
        <Card><CardHeader><CardTitle>Project Wizard</CardTitle></CardHeader><CardContent><p>Generate and launch your startup ideas with our guided AI wizard.</p></CardContent></Card>
      </div>
    </motion.div>
  );
};