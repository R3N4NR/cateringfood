import {Grid, GridItem} from '@chakra-ui/react'
import { Header } from './header'

import { BodyContent } from './body'
export const HomePage = () => {
    return(
<Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'170px 1fr 30px'}
  gridTemplateColumns={'0 1fr'}
>
  <GridItem  area={'header'}>
    <Header/>
  </GridItem>
  
  <GridItem area={'main'}>
   <BodyContent />
  </GridItem>
  <GridItem backgroundColor="red" bottom="0" width="100%" position="fixed" height="60px" bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>)
}

