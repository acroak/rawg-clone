import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
    return (
        <Box width='300px' borderRadius='10px' overflow='hidden' padding="20px">
            {children}
        </Box>
    )

}

export default GameCardContainer;