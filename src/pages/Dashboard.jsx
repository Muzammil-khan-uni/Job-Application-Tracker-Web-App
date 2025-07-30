import JobCard from '../components/JobCard'
import { Link } from 'react-router-dom'
import useJobs from '../context/useJobs'
import { FiPlus, FiUpload, FiDownload, FiBriefcase } from 'react-icons/fi'

const Dashboard = () => {
  const { jobs, exportJobs, importJobs } = useJobs()

  return (
 <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Job Applications</h1>
          <p className="text-gray-500 mt-2">
            {jobs.length} {jobs.length === 1 ? 'application' : 'applications'} tracked
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            to="/add-job"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all font-medium shadow-md hover:shadow-lg"
          >
            <FiPlus className="text-lg" />
            Add New Job
          </Link>
        </div>
      </div>


      {/* Stats Cards */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {['Applied', 'Interviewing', 'Offer', 'Rejected'].map((status) => {
          const count = jobs.filter(job => job.status === status).length;
          const colors = {
            Applied: 'from-blue-500 to-blue-600',
            Interviewing: 'from-purple-500 to-purple-600',
            Offer: 'from-green-500 to-green-600',
            Rejected: 'from-red-500 to-red-600'
          };
          
          return (
            <div key={status} className={`bg-gradient-to-r ${colors[status]} rounded-2xl shadow-lg p-6 text-white`}>
              <p className="text-sm font-medium opacity-90">{status}</p>
              <p className="text-3xl font-bold mt-2">{count}</p>
              <p className="text-xs opacity-80 mt-1">
                {count === 1 ? 'application' : 'applications'}
              </p>
            </div>
          );
        })}
      </div>

      {/* Import/Export */}
       <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Management</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={exportJobs}
            className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 px-5 py-2.5 rounded-lg transition-colors font-medium text-gray-700"
          >
            <FiDownload className="text-lg" /> Export to JSON
          </button>
          <label className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 px-5 py-2.5 rounded-lg transition-colors font-medium text-gray-700 cursor-pointer">
            <FiUpload className="text-lg" /> Import from JSON
            <input
              type="file"
              accept=".json"
              onChange={(e) => importJobs(e.target.files[0])}
              className="hidden"
            />
          </label>
        </div>
      </div>


      {/* Jobs List */}
      {jobs.length === 0 ? (
       <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
        <div className="mx-auto w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                      <FiBriefcase className="text-3xl text-indigo-600" />

          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">No applications yet</h3>
          <p className="text-gray-500 mb-6">Start tracking your job applications</p>
          <Link
            to="/add-job"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all font-medium shadow-md hover:shadow-lg"
          >
            <FiPlus /> Add First Application
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  )
}
export default Dashboard