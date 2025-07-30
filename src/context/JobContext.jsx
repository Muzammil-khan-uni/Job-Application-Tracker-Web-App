import { createContext, useState, useEffect } from 'react';
import { initialJobState, exportJobsToFile } from './jobConstants'; 
const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobApplications');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jobApplications', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (newJob) => {
    setJobs([...jobs, { ...newJob, id: Date.now() }]);
  };

  const updateJob = (id, updatedJob) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, ...updatedJob } : job));
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const exportJobs = () => {
    const dataUri = exportJobsToFile(jobs); 
    const exportFileDefaultName = 'job-applications.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const importJobs = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedJobs = JSON.parse(e.target.result);
        if (Array.isArray(importedJobs)) {
          setJobs(importedJobs);
        }
      } catch (error) {
        console.error('Error parsing JSON file:', error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <JobContext.Provider value={{ 
      jobs, 
      addJob, 
      updateJob, 
      deleteJob, 
      exportJobs, 
      importJobs,
      initialJobState
    }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;