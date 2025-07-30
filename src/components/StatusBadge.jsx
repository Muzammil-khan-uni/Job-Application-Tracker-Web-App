import { STATUS_COLORS } from '../context/jobConstants';

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${STATUS_COLORS[status]}`}
    >
      {status}
    </span>
  )
}

export default StatusBadge