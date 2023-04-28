import { Filter } from '../filter/Filter';
import './FiltersPanel.css';

import { useSelector, useDispatch } from 'react-redux';
import { clearFilters } from '../../store';

export const FiltersPanel = () => {
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  if (!filters.length) return;

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="filters-panel panel">
      {filters.map(filter => (
        <Filter key={filter} filter={filter} removable />
      ))}
      <button className="filters-clear" onClick={handleClearFilters}>
        Clear
      </button>
    </div>
  );
};
