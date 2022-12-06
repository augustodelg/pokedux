import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const PokemonCard = ({ pokemon }) => {
    return (
        <Card >
            <CardMedia
                component="img"
                height="auto"
                image={pokemon.sprites.other.home.front_default}
                alt="pockemon"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" sx={{ textTransform: 'capitalize', fontWeight: 'bold'  }}>
                    {pokemon.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">

                </Typography>
            </CardContent>
        </Card>
    )
}

export default PokemonCard;