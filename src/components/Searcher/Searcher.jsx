import { Box, Input, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from "react-redux";
import { filterPokemons } from "../../slices/dataSlice";


const Searcher = () => {
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        dispatch(filterPokemons(event.target[0].value));
    }

    return (
        <Box sx={{ backgroundColor: 'white', }}>
            <form onSubmit={handleSearch}>
            <TextField
                sx={{ width: '100%' }}
                placeholder="Search by name or type"
                size="small"
                variant="outlined"
                onChange={() => { }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}

                
            />
            </form>
        </Box>
    );
};

export default Searcher;