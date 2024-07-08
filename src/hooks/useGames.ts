import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform }[];
    metacritic: number;
}

// if a genre is selected we send it to the games hook as an optional parameter (genre or null)
const useGames = (gameQuery: GameQuery) => (useData<Game>('/games', {
    params: {
        genres: gameQuery.genre?.id, 
        platforms: gameQuery.platform?.id ,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
    }}, 
    [ gameQuery ]
));


export default useGames;