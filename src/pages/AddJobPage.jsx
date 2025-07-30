import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useJobs from '../context/useJobs'
import { FiArrowLeft, FiSave } from 'react-icons/fi'

const AddJobPage = () => {
  const { addJob } = useJobs();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: '',
    title: '',
    status: 'Applied',
    appliedDate: new Date().toISOString().split('T')[0],
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(formData);
    navigate('/');
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
        >
          <FiArrowLeft className="text-lg" /> Back to Dashboard
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Add New Job</h1>
        <p className="text-gray-500">Track your job application details</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
      >
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <span className="text-indigo-600">*</span> Company Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                required
                placeholder="e.g. Google"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <span className="text-indigo-600">*</span> Job Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                required
                placeholder="e.g. Frontend Developer"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              >
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <span className="text-indigo-600">*</span> Applied Date
              </label>
              <input
                type="date"
                value={formData.appliedDate}
                onChange={(e) => setFormData({ ...formData, appliedDate: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea
              rows={4}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Add any additional notes..."
            />
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row justify-end gap-4 border-t border-gray-200">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all font-medium shadow-md hover:shadow-lg"
          >
            <FiSave className="text-lg" /> Save Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobPage;
