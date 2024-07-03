import { Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


interface Props {
    // notifies the parent component (App.tsx) that a genre has been selected/clicked
    onSelectGenre: (genre: Genre)=> void;
}


const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    // if there is an error do not display anything in the aside
    if (error) return null;

    if (isLoading) return <Spinner />;

    return(

        <List>
            { data.map( genre => (
                <ListItem key={ genre.id } paddingY='5px'>
                    <HStack>
                        <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Button onClick={() => onSelectGenre(genre)}fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList;