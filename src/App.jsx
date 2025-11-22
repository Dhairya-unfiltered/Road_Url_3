import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import LandingPage from '@/pages/landing-page';
import AppLayout from '@/layouts/app-layout.jsx';
import Auth from '@/pages/auth';
import Dashboard from '@/pages/dashboard';
import LinkPage from '@/pages/link';
import RedirectLink from '@/pages/redirect'
import Header from './components/header';
import UrlProvider from './context';
import RequireAuth from './components/require-auth';
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (<>
   
        <LandingPage /></>),
      },
      {
        path: "/auth",
        element: (<><Auth />  </>    
      ),
      },
      {
        path: "/dashboard",
        element:( <RequireAuth>
          
            <Dashboard />
            </RequireAuth>
          ),
      },{ path: "/link/:id",
        element: (<RequireAuth>
            <LinkPage />
            </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

const App = () => {
  
  return (
      <UrlProvider>
      <RouterProvider router={router} />
      </UrlProvider>
  )
}

export default App
