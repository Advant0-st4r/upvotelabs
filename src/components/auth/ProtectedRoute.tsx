import { useAuth, useUser } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  component: React.ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const { isLoaded, isSignedIn } = useAuth();
  const { isLoaded: userLoaded } = useUser();
  const location = useLocation();

  if (!isLoaded || !userLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isSignedIn) {
    // Store the intended destination for post-login redirect
    const redirectTo = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/?redirect_to=${redirectTo}`} replace />;
  }

  return <Component />;
};