const SearchBar = ({ onSearching, onReseting }) => {
  return (
    <div>
      <h5>Search</h5>
      <label htmlFor="filter">Filter:</label>
      <input
        type="text"
        id="filter"
        placeholder="Search by filter..."
        title="Search by filter..."
        onChange={onSearching}
      />{" "}
      <a href="#" onClick={onReseting}>
        reset
      </a>
    </div>
  );
};

export default SearchBar;
