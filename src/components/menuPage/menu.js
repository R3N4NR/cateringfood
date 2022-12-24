import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { Sidebar } from '../features/sidebar';
import { GridCell } from './menuGrid';

export const MenuPage = () => {
    return (
        <Grid templateColumns="20% 80%" height="100%">
            <GridItem width="100%" height="10">
                <Sidebar />
            </GridItem>
            <GridItem width="100%" height="100%">
                <Box
                    width="100%"
                    height="100px"
                    display="inline-flex"
                    justifyContent="center"
                >
                    <Box
                        width="600px"
                        marginTop="5%"
                        display="inline-flex"
                        justifyContent="space-around"
                    >
                        <Text>Menu</Text>
                        <Text>Para festas</Text>
                        <Text>Sobre</Text>
                        <Text>Review de cardápios</Text>
                        <Text>Restaurantes</Text>
                    </Box>
                </Box>
                <Box
                    width="100%"
                    height="80px"
                    justifyContent="center"
                    display="flex"
                    marginTop="5%"
                    alignItems="center"
                >
                    <Text fontSize="36px">Menu</Text>
                </Box>
                <Grid templateColumns="repeat(3,1fr)" className="menuGrid">
                    <GridCell
                        price="24,90"
                        img="https://static-cse.canva.com/blob/759754/IMAGE1.jpg"
                    />
                    <GridCell price="27,90" />
                    <GridCell price="17,90" />
                    <GridCell price="15,90" />
                    <GridCell price="27,60" />
                    <GridCell price="26,90" />
                    <GridCell price="21,90" />
                    <GridCell price="22,90" />
                    <GridCell price="24,90" />
                </Grid>
            </GridItem>
        </Grid>
    );
};
