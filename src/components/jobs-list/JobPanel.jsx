import { Filter } from '../filter/Filter';
export const JobPanel = ({ job }) => {
  const filters = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div className={`job panel ${job.featured ? 'featured' : ''}`}>
      <img className="job-logo" src={job.logo} alt={job.company} />

      <div className="job-info">
        <header className="job-header">
          {job.company}

          {job.new && <span className="chip primary">New!</span>}
          {job.featured && <span className="chip secondary">featured</span>}
        </header>

        <a className="job-title" href="#">
          {job.position}
        </a>

        <footer className="job-footer">
          <span>{job.postedAt}</span>.<span>{job.contract}</span>.
          <span>{job.location}</span>
        </footer>
      </div>
      <div className="job-filters">
        {filters.map(filter => (
          <Filter key={filter} filter={filter} />
        ))}
      </div>
    </div>
  );
};
