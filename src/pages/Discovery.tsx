import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upvote, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getIdeas } from '@/lib/mockData';

export const Discovery = () => {
  const { data: ideas = [], isLoading, isError } = useQuery({
    queryKey: ['ideas'],
    queryFn: getIdeas,
  });

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading ideas...</div>;
  }

  if (isError) {
    return <div className="container mx-auto p-4">Error loading ideas</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Discover Ideas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((idea: any) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{idea.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{idea.description}</p>
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/idea/${idea.id}`}>
                      <Eye className="h-4 w-4 mr-2" /> View
                    </Link>
                  </Button>
                  <div className="flex items-center gap-2">
                    <Upvote className="h-4 w-4" />
                    <span>{idea.upvotes}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
        ))}
      </div>
    </div>
  );
};
