import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Dashboard from './pages/Dashboard';
import AddJobPage from './pages/AddJobPage';
import JobDetailsPage from './pages/JobDetailsPage';
import Navbar from './components/Navbar';
import { JobProvider } from './context/JobContext';

function App() {
  return (
    <JobProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
          <Navbar />
          <AnimatePresence mode="wait">
            <main className="flex-1">
              <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/add-job" element={<AddJobPage />} />
                  <Route path="/job/:id" element={<JobDetailsPage />} />
                </Routes>
              </div>
            </main>
          </AnimatePresence>
        </div>
      </Router>
    </JobProvider>
  );
}

export default App;
