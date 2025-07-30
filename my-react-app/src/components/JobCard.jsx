import { Link } from 'react-router-dom';
import { FiChevronRight, FiBriefcase, FiUser } from 'react-icons/fi';
import StatusBadge from './StatusBadge';

const JobCard = ({ job }) => {
  return (
    <Link
      to={`/job/${job.id}`}
      className="block bg-white hover:bg-gray-50 rounded-2xl shadow-md transition-all hover:shadow-lg border border-gray-100 overflow-hidden"
    >
      <div className="p-5 flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0 space-y-3">
          <div>
            <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
              <FiBriefcase className="text-indigo-600" />
              Job Title
            </p>
            <h3 className="text-2xl font-semibold text-indigo-700 truncate pl-7">
              {job.title}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
              <FiUser className="text-purple-600" />
              Company
            </p>
            <p className="text-base font-medium text-gray-800 truncate pl-7">{job.company}</p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <StatusBadge status={job.status} />
            <span className="text-sm text-gray-500">
              Applied on {new Date(job.appliedDate).toLocaleDateString()}
            </span>
          </div>
        </div>

        <FiChevronRight className="text-gray-400 text-xl flex-shrink-0" />
      </div>
    </Link>
  );
};

export default JobCard;