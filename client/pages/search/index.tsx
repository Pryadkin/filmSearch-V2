const Search = () => {
    console.log('Search');
    const fetchData = async () => {
        const res = await fetch('http://localhost:4000/movies');
        console.log(res);
    };
    fetchData();
    return (
        <div>Search</div>
    );
};
export default Search;
