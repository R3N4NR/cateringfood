import { Box, Flex, ListItem, UnorderedList, Heading } from '@chakra-ui/react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
export const Sidebar = () => {
    return (
        <Flex
            width="20%"
            height="100%"
            position="absolute"
            backgroundSize="cover"
            fontFamily="Montserrat"
        >
            <Box width="87%" marginLeft="5%" lineHeight="30px">
                <Flex marginLeft="25%">
                    <Logo width="70%" />
                </Flex>

                <Flex flexDirection="column" marginLeft="5%" color="#272D36">
                    <UnorderedList listStyleType="none">
                        <Heading as="h4" size="md">
                            Categorias
                        </Heading>
                        <ListItem>Carnes</ListItem>
                        <ListItem>Pizza</ListItem>
                        <ListItem>Hamburguer</ListItem>
                        <ListItem>Salgados</ListItem>
                        <ListItem>Comida tradicional</ListItem>
                    </UnorderedList>
                    <hr />
                    <UnorderedList listStyleType="none">
                        <Heading as="h4" size="md">
                            Categorias
                        </Heading>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Consectetur adipiscing elit</ListItem>
                        <ListItem>Integer molestie lorem at massa</ListItem>
                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </UnorderedList>
                </Flex>
            </Box>
        </Flex>
    );
};
