import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {

    return(
        <Grid templateAreas={{
            base: `"nav" "main"`, // layout for mobile
            lg: `"nav nav" "aside main"`, // layout for large screens > 1024px
        }}>
            <GridItem area='nav'>
                <NavBar />
            </GridItem>
            <Show above="lg">
                <GridItem area='aside'>
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <GameGrid />
            </GridItem>
        </Grid>
    )
    
}

export default App
