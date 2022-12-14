import { Grid, GridItem, Box, Flex } from '@chakra-ui/react';
import { Header } from './header';

import { BodyContent, BodySession } from './body';
export const HomePage = () => {
    return (
        <Flex display="block">
            <Grid
                templateAreas={`"header header"
                  "nav main"
                  "nav body"
                  "footer footer"`}
                gridTemplateRows={'170px 100%  100%'}
                gridTemplateColumns={'0 1fr'}
            >
                <GridItem area={'header'}>
                    <Header />
                </GridItem>

                <GridItem area={'main'}>
                    <BodyContent />
                </GridItem>
                <GridItem area={'body'}>
                    <BodySession />
                </GridItem>
            </Grid>
        </Flex>
    );
};
