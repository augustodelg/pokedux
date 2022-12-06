import { Card, CardContent, CardHeader, CardMedia, Chip, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../actions";

import FavoriteButtom from "./components/FavoriteButtom";

const PokemonCard = ({ pokemon }) => {

    const dispatch = useDispatch();

    const handleFavorite = () => {
        dispatch(setFavorite(pokemon.id));
    }
    return (
        <Card >
            <CardHeader action={
                <FavoriteButtom  isFavorite={pokemon.isFavorite} onClick={handleFavorite}/>}
            />
            <CardMedia
                component="img"
                height="auto"
                image={pokemon.sprites.other.home.front_default}
                alt="pockemon"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                    {pokemon.name}
                </Typography>
                {pokemon.types.map((type) => (
                    <Chip sx={{ mr: 1 }} label={type.type.name} />))}
            </CardContent>
        </Card>
    )
}

export default PokemonCard;