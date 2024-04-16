import {useState} from "react";

const SearchBar = ({functionSearchParent}) => {
    const [term, setTerm] = useState('Search')
    const handlChange = (e) => {
        setTerm(e.target.value);
       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        functionSearchParent(term);
    }
  return <div>
    <form onSubmit={handleSubmit}>
        <input onChange={handlChange} type="text" value={term} />
    </form>
  </div>
    
  
}

export default SearchBar