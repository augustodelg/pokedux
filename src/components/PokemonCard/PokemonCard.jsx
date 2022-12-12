import { alpha, Card, CardContent, CardHeader, CardMedia, Chip, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { colorsTypes } from "../../constants";
import { setFavorite } from "../../slices/dataSlice";

import FavoriteButtom from "./components/FavoriteButtom";
import TypesInformation from "./components/TypesInformation";

const PokemonCard = ({ pokemon }) => {

    const dispatch = useDispatch();

    const handleFavorite = () => {
        dispatch(setFavorite({ pokemonId: pokemon.id }));
    }
    return (
        <Card sx={{
            borderRadius: 4,
            backgroundColor: alpha(colorsTypes[pokemon.types[0].type.name], 0.2)
        }} >

            <CardHeader action={
                <FavoriteButtom isFavorite={pokemon.isFavorite} onClick={handleFavorite} />}
            />
            <CardMedia
                component="img"
                height="auto"
                image={pokemon.image}
                alt="pokemon"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" sx={{ textTransform: 'capitalize', fontWeight: 'bold', }}>
                    {pokemon.name}
                </Typography>
                <TypesInformation types={pokemon.types} />
            </CardContent>
        </Card>
    )
}

export default PokemonCard;