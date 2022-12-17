import { Grid, GridItem, Flex } from '@chakra-ui/react';
import { Header } from './header';

import { BodyContent, BodySession, BodySessionTwo } from './body';
export const HomePage = () => {
    return (
        <Flex display="block">
            <Grid
                templateAreas={`"header header"
                  "nav main"
                  "nav body"
                  "section body"`}
                gridTemplateRows={'100% 100%  100% 100%'}
                gridTemplateColumns={'0 1fr'}
                flexDirection="column"
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
