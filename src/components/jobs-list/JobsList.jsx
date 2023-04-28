import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import './JobsList.css';

import { useFetchJobsQuery } from '../../store';
import { JobPanel } from './JobPanel';
import { FiltersPanel } from '../filters-panel/FiltersPanel';
import { SkeletonLoader } from '../skeleton-loader/SkeletonLoader';

export const JobsList = () => {
  const { data, isFetching, error } = useFetchJobsQuery();
  const filters = useSelector(state => state.filters);

  const filteredJobs = useMemo(() => {
    if (!data) return [];
    if (!filters.length) return [...data];

    return data.filter(job => {
      const jobFilters = [job.role, job.level, ...job.languages, ...job.tools];
      return filters.every(filter => jobFilters.includes(filter));
    });
  }, [filters, data]);

  if (isFetching)
    return (
      <div className="jobs-list">
        <SkeletonLoader times={10} />
      </div>
    );
  if (error) return <div>Error fetching jobs.</div>;

  return (
    <div className="jobs-list">
      <FiltersPanel />
      {filteredJobs.map(job => (
        <JobPanel key={job.id} job={job} />
      ))}
    </div>
  );
};
