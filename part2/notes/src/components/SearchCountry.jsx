import { Link } from "react-router-dom";

const SearchCountry = ({
  onSearch,
  onReset,
  handleChange,
  filtered,
  all,
  search,
  getAllCountryNames,
}) => {
  return (
    <div>
      <form onSubmit={onSearch}>
        <label htmlFor="country">Search country by name:</label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="e.g.: United States, India, Argentina..."
          className="search-input"
          value={search}
          onChange={handleChange}
        />{" "}
        <Link onClick={onReset}>reset</Link>
        {" : "}
        {filtered === null ? (
          <strong title={getAllCountryNames(all)?.join("\n")}>
            {all ? all.length : 0} total countries
          </strong>
        ) : (
          <strong title={getAllCountryNames(filtered)?.join("\n")}>
            {filtered?.length} matching countries
          </strong>
        )}
      </form>
    </div>
  );
};

export default SearchCountry;
