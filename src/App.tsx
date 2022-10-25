import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import UserPage from './features/user_page/UserPage';
import './index.css';
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/users' element={<UserPage/>}>
              <Route path=':id' element={<UserPage/>}/>
            </Route>            
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
