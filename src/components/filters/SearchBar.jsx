
const SearchBar = ({ searchQuery, setSearchQuery, placeholder }) => {
  return (
    <div className="text-primary md:w-[220px]">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 border border-primary rounded-md w-full"
      />
    </div>
  );
};

export default SearchBar;
