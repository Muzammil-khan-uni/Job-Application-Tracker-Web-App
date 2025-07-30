import { useContext } from 'react';
import JobContext from './JobContext';

const useJobs = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};

export default useJobs;