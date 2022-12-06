import { Box, Input, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';


const Searcher = () => {
    return (
        <Box sx={{ backgroundColor: 'white', }}>
            <TextField
                sx={{ width: '100%' }}
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
        </Box>
    );
};

export default Searcher;