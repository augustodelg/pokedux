import { Box, Grid } from "@mui/material"
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = (props) => {
    return (
        <Grid container spacing={2} >
            {props.pokemons.map((pokemon) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={pokemon.id}>
                    <PokemonCard pokemon={pokemon} />
                </Grid>

            ))}
        </Grid>
    )
}

export default PokemonList;