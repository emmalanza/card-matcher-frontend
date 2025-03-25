const Filter = ({ filter, setFilter, options, labelText, id }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value); 
  };

  return (
    <div className="text-primary">
      <label htmlFor="filter" className="mr-2">{labelText}</label>
      <select
        id={id}
        value={filter}
        onChange={handleFilterChange}
        className="p-2 border border-primary rounded"
      >
        <option value="">Todas</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option} 
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
