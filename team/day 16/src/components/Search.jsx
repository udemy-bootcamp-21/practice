import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { Box } from "@mui/material";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("query") || ""
  );
  const debounceSearchValue = useDebounce(searchValue, 500);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue) {
      setSearchParams({ query: debounceSearchValue });
    } else {
      navigate("/");
    }
  }, [debounceSearchValue]);

  useEffect(() => {
    if (!searchParams.get("query")) setSearchValue("");
  }, [searchParams]);

  return (
    <Paper
      component="div"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 500,
        margin: "0 auto",
        mt: "2rem",
      }}
    >
      <Box sx={{ p: "10px", cursor: "default" }} aria-label="search">
        <SearchIcon
          sx={{
            color: "lightgrey",
            display: "flex",
            alignItems: "center",
          }}
        />
      </Box>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={"영화를 검색해 주세요."}
        inputProps={{
          value: searchValue,
          onChange: (e) => {
            setSearchValue(e.target.value);
          },
        }}
      />
    </Paper>
  );
};

export default Search;
