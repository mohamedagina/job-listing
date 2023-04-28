import './Filter.css';

import { addFilter, removeFilter } from '../../store';
import { useDispatch } from 'react-redux';

export const Filter = ({ filter, removable }) => {
  const dispatch = useDispatch();

  const handleAddFilter = () => {
    if (removable) return;
    dispatch(addFilter(filter));
  };

  const handleRemoveFilter = () => {
    dispatch(removeFilter(filter));
  };

  return (
    <button
      className={`filter ${removable ? 'removable' : ''}`}
      onClick={handleAddFilter}
    >
      {filter}
      {removable && (
        <span onClick={handleRemoveFilter} className="filter-delete">
          X
        </span>
      )}
    </button>
  );
};
