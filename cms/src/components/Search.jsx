const Search = ({ setFilterWord }) => {



  return <input type="text" id="search" className="search" onChange={() => setFilterWord(search.value.toLowerCase())} placeholder="Search by name, country or city" />;
};

export default Search;