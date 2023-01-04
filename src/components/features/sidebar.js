import { Box, Flex, ListItem, UnorderedList, Heading } from '@chakra-ui/react';
import { defaultData } from '../../../public/data/mock/menu';
import { ReactComponent as Logo } from '/public/assets/logo.svg';
import data from '/public/data/mock/menu';
export const Sidebar = ({ menuData }) => {
    const styleMenu = () => {
        let header = document.getElementById('sidebar');
        let btns = header.getElementsByClassName('option');
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function () {
                var current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace(
                    ' active',
                    '',
                );
                this.className += ' active';
            });
        }
    };
    styleMenu();
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

                <Flex
                    flexDirection="column"
                    marginLeft="5%"
                    color="#272D36"
                    id="sidebar"
                >
                    <UnorderedList
                        listStyleType="none"
                        className="sidebarOptions"
                    >
                        <Heading as="h4" size="md">
                            Categorias
                        </Heading>
                        <ListItem
                            className="option active"
                            onClick={() => menuData(defaultData.all)}
                        >
                            Todos
                        </ListItem>
                        <ListItem className="option">Carnes</ListItem>
                        <ListItem
                            className="option"
                            onClick={() => menuData(data.pizza)}
                        >
                            Pizza
                        </ListItem>
                        <ListItem
                            className="option"
                            onClick={() => menuData(data.burguers)}
                        >
                            Hamburguer
                        </ListItem>
                        <ListItem className="option">Salgados</ListItem>
                        <ListItem className="option">
                            Comida tradicional
                        </ListItem>
                    </UnorderedList>
                    <hr />
                    <UnorderedList
                        listStyleType="none"
                        className="sidebarOptions"
                    >
                        <Heading as="h4" size="md">
                            Ordenar
                        </Heading>
                        <ListItem>Preço</ListItem>
                        <ListItem>Mais pedidos</ListItem>
                        <ListItem>Sugeridos</ListItem>
                    </UnorderedList>
                </Flex>
            </Box>
        </Flex>
    );
};
