import { Toaster } from "@/components/ui/toaster"; 
import { Toaster as Sonner } from "@/components/ui/sonner"; 
import { TooltipProvider } from "@/components/ui/tooltip"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"; 
import { Navbar } from "./components/layout/Navbar"; 
import { Discovery } from "./pages/Discovery"; 
import { IdeaDetail } from "./pages/IdeaDetail"; 
import { Forum } from "./pages/Forum"; 
import { ProjectWizard } from "./pages/ProjectWizard"; 
import NotFound from "./pages/NotFound"; 
import { Landing } from "./pages/Landing"; 
import { ProtectedRoute } from "./components/auth/ProtectedRoute"; 
import { useUser } from '@clerk/clerk-react';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 60 * 1000 } },
});

const ProtectedLayout = () => {
  const { isLoaded } = useUser();
  if (!isLoaded) return (
    <div className="flex justify-center items-center min-h-screen">
      <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z" />
      </svg>
    </div>
  );
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const App = () => ( 
  <QueryClientProvider client={queryClient}> 
    <TooltipProvider> 
      <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<Landing />} />
          <Route element={<ProtectedRoute component={ProtectedLayout} />}>
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/idea/:id" element={<IdeaDetail />} /> 
            <Route path="/forum" element={<Forum />} /> 
            <Route path="/project-wizard" element={<ProjectWizard />} /> 
            <Route path="/projects" element={
              <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Projects</h1>
                <p>Projects feature coming soon!</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '30%' }}></div>
                </div>
              </div>
            } /> 
            <Route path="/dashboard" element={
              <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Project Dashboard</h1>
                <p>Dashboard feature coming soon!</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '50%' }}></div>
                </div>
              </div>
            } /> 
            <Route path="/demo" element={
              <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Demo</h1>
                <p>Demo feature coming soon!</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '40%' }}></div>
                </div>
              </div>
            } /> 
            <Route path="/profile" element={
              <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <p>Profile management coming soon!</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '60%' }}></div>
                </div>
              </div>
            } /> 
            <Route path="/settings" element={
              <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Settings</h1>
                <p>Settings configuration coming soon!</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '70%' }}></div>
                </div>
              </div>
            } /> 
          </Route>
          <Route path="*" element={<NotFound />} /> 
        </Routes> 
      </BrowserRouter> 
      <Sonner /> 
      <Toaster /> 
    </TooltipProvider> 
  </QueryClientProvider> 
);

export default App;
