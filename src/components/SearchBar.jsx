const SearchBar = ({ search, setSearch }) => {
  return (
    <form className="mb-6">
      <input
        className="searchBar px-3 py-1 rounded-md focus:outline-none mt-5"
        type="search"
        placeholder="search player..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </form>
  );
};

export default SearchBar;
