import { IconButton } from "@mui/material";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const FavoriteButtom = (props) => {
    return (
        <IconButton onClick={props.onClick} aria-label="add to favorites">
            {props.isFavorite ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
        </IconButton>
    )
}

export default FavoriteButtom;