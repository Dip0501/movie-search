import React, { useState } from "react";
import "./css/SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

export let searchTerm = ''

function SearchBar() {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    function handleClick() {
        navigate('/search')
        console.log(input);
        searchTerm = input
    }

    return (
        <div className="search__input">
            <input 
                placeholder="Eg. Spider-man" 
                value={input}
                onChange={event => setInput(event.target.value)} 
                type="text" 
                onKeyPress={(event) => (event.key === 'Enter' && handleClick())}
            />
            <IconButton onClick={handleClick}>
                <SearchIcon className="search__input--icon" />
            </IconButton>
        </div>
    );
}

export default SearchBar;
