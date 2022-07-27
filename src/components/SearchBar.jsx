import React, { useState } from "react";
import "./css/SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

function SearchBar() {
    const [input, setInput] = useState('')
    const navigate = useNavigate()
    return (
        <div className="search__input">
        <input placeholder="Eg. Spider-man" value={input} onChange={event => setInput(event.target.value)} type="text" />
        <IconButton onClick={()=> navigate('/search')}>
            <SearchIcon className="search__input--icon" />
        </IconButton>
        </div>
    );
}

export default SearchBar;
