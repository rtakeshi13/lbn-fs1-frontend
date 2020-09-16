import React, { useState } from "react";

import { search } from "../../services/axios";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";

import { Wrapper } from "./styles";

import SearchItemCard from "../SearchItemCard";

function SearchPage() {
  const [searchInput, setSearchInput] = useState("");
  const [seachResults, setSearchResults] = useState([]);

  const handleSeach = async (e) => {
    e.preventDefault();
    const results = await search(searchInput);
    setSearchResults(results);
  };

  const resultsRender = seachResults.map((item) => (
    <SearchItemCard item={item} />
  ));

  return (
    <Wrapper>
      <form onSubmit={handleSeach}>
        <FormControl
          variant="outlined"
          fullWidth
          style={{ marginTop: "0.5rem" }}
        >
          <InputLabel htmlFor="search">Search</InputLabel>
          <OutlinedInput
            style={{ borderRadius: "2px" }}
            id="search"
            labelWidth={50}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
            required
            autoComplete="search"
            autoFocus
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={handleSeach}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
      {resultsRender}
    </Wrapper>
  );
}

export default SearchPage;
