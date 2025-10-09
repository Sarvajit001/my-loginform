import React,{useState,useEffect} from 'react';
import './searchbar.css';


const SearchBar = () =>{
    const[input,setInput] = useState("");
    const[results ,setResults] = useState([]);
    const[showResults,setShowResults] = useState(false);
    const [cache, setCache] = useState({});// for caching previous search results while returning also call api call
    


    const handleChange = (e) =>{
        setInput(e.target.value);
        // Implement search logic here
    };

   const fetchResults = async () => {
  if (!input) return;

  // ✅ If cached, use it
  if (cache[input]) {
    setResults(cache[input]);
    return;
  }

  // ✅ Otherwise fetch from API
  const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
  const json = await data.json();
  setResults(json?.recipes || []);

  // ✅ Save to cache
  setCache({ ...cache, [input]: json?.recipes || [] });
};
    useEffect(()=>{
     const timer = setTimeout(fetchResults,300);
     return() =>{
        clearTimeout(timer);
     }
        
    },[input])

    return(
        <div className='searchBody'>
        <div className='searchbar-container'>
            <div className='searchbar-wrapper'>
                <h2>SearchBar Task</h2>
                <input type="text" 
                placeholder='Search...'
                className='search-input'
                value={input}
                onChange = {handleChange}
                onFocus = {()=>setShowResults(true)}
                onBlur={()=>setShowResults(false)}
                />
        
         {showResults && (
          results.length > 0 ? (
            <div className="result-container">
              {results.map((r) => (
                <span className="result-item" key={r.id}>
                  {r.name}
                </span>
              ))}
            </div>
          ) : (
            <h3 style={{ color: "white" }}>No data available</h3>
          )
        )}
      </div>
    </div>
  </div>
);
}


export default SearchBar;