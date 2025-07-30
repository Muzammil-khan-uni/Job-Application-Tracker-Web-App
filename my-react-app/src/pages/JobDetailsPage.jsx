import { useParams, useNavigate } from 'react-router-dom';
import useJobs from '../context/useJobs';
import { useState, useEffect } from 'react';
import StatusBadge from '../components/StatusBadge';
import { FiBriefcase, FiUser } from 'react-icons/fi';


const JobDetailsPage = () => {
  const { id } = useParams();
  const { jobs, updateJob, deleteJob } = useJobs();
  const navigate = useNavigate();

  const job = jobs.find(j => j.id === Number(id));
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    status: 'Applied',
    appliedDate: '',
    notes: ''
  });

  useEffect(() => {
    if (job) {
      setFormData({
        company: job.company,
        title: job.title,
        status: job.status,
        appliedDate: job.appliedDate,
        notes: job.notes || ''
      });
    }
  }, [job]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateJob(Number(id), formData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this job application?')) {
      deleteJob(Number(id));
      navigate('/');
    }
  };

  if (!job) {
    return <div className="text-center py-12 text-gray-600">Job not found</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Job Application Details</h1>
        <button
          onClick={() => navigate('/')}
          className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2"
        >
          Back to Dashboard
        </button>
      </div>

      {!isEditing ? (
        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
<div className="mb-6 space-y-4">
  <div>
    <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
      <FiBriefcase className="text-indigo-600" />
      Job Title
    </p>
    <h2 className="text-3xl font-bold text-indigo-800 pl-6">{job.title}</h2>
  </div>

  <div>
    <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
      <FiUser className="text-purple-600" />
      Company
    </p>
     <p className="text-3xl font-semibold text-gray-900 pl-6">{job.company}</p>
  </div>
</div>

<div className="grid gap-4 mb-6 sm:grid-cols-2">
  <div>
    <p className="text-sm text-gray-500">Status</p>
    <StatusBadge status={job.status} />
  </div>
  <div>
    <p className="text-sm text-gray-500">Applied Date</p>
    <p>{new Date(job.appliedDate).toLocaleDateString()}</p>
  </div>
</div>



          {job.notes && (
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Notes</p>
              <p className="whitespace-pre-line text-gray-700">{job.notes}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsEditing(true)}
              className="w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="w-full sm:w-auto text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <div className="grid gap-6 mb-6 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div>
              <label htmlFor="appliedDate" className="block mb-2 text-sm font-medium text-gray-900">
                Applied Date
              </label>
              <input
                type="date"
                id="appliedDate"
                name="appliedDate"
                value={formData.appliedDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
            >
              Save Changes
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default JobDetailsPage;
