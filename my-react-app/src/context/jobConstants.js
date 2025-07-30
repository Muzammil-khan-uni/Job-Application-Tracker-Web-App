export const STATUS_OPTIONS = [
  { value: 'Applied', label: 'Applied' },
  { value: 'Interviewing', label: 'Interviewing' },
  { value: 'Offer', label: 'Offer' },
  { value: 'Rejected', label: 'Rejected' },
];

export const STATUS_COLORS = {
  Applied: 'bg-blue-100 text-blue-800',
  Interviewing: 'bg-purple-100 text-purple-800',
  Offer: 'bg-green-100 text-green-800',
  Rejected: 'bg-red-100 text-red-800',
};

export const initialJobState = {
  company: '',
  title: '',
  status: 'Applied',
  appliedDate: new Date().toISOString().split('T')[0],
  notes: '',
};

export const exportJobsToFile = (jobs) => {
  const dataStr = JSON.stringify(jobs);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  return dataUri;
};