import { Box, Flex } from '@chakra-ui/react';
import { Header } from './header';
import { Footer } from './footer';
import { BodyContent, BodySession } from './body';
export const HomePage = () => {
    return (
        <Flex display="block">
            <Box direction="column" maxW={{ xl: '1200px' }} m="0 auto">
                <Header />

                <BodyContent />

                <BodySession />
            </Box>
            <Footer />
        </Flex>
    );
};
