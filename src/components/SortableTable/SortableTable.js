import useSort from '../../hooks/use-sort';
import Table from '../Table/Table';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => {
            setSortColumn(column.label);
          }}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoChevronUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoChevronDown />
      </div>
    );
  }
};

export default SortableTable;
