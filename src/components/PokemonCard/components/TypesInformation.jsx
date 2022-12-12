import { Chip } from "@mui/material";
import { Box } from "@mui/system";

const TypesInformation = (props) => {
    return (
        <Box>
            {
                props.types.map((type) => (
                    <Chip sx={{ mr: 1 }} label={type.type.name} />))
            }
        </Box>
    )
}

export default TypesInformation;