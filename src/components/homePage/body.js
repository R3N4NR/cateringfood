import {
    Flex,
    Box,
    Text,
    Card,
    CardBody,
    SimpleGrid,
    CardHeader,
} from '@chakra-ui/react';
import { ReactComponent as Plate } from '../../assets/plate.svg';
import { BodyButton } from './bodyButton';
import { StatsField } from './stats';
import { ReactComponent as Watch } from '../../assets/pocketwatch.svg';
import { ReactComponent as Badge } from '../../assets/badge.svg';
import { ReactComponent as Phone } from '../../assets/smartphone.svg';
import { CardsTab } from './homePageSections/CardsTab';
import React, { useState } from 'react';

export const BodyContent = () => {
    return (
        <Flex>
            <Box
                height="75vh"
                width="100%"
                backgroundColor="#FFF5E7"
                marginTop="-20px"
            >
                <Box position="absolute" right="0">
                    <Plate />
                </Box>
                <Box position="absolute" left="74" width="550px">
                    <Text fontSize="64px" as="b" color="#5E5858">
                        Não é só comida,{' '}
                        <span style={{ fontWeight: 'normal' }}>é uma</span>
                        <span
                            style={{ fontWeight: 'normal', color: '#FF5C00' }}
                        >
                            {' '}
                            Experiência
                        </span>
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus tristique pulvinar pharetra. Donec luctus metus
                        a nisi suscipit, sed porttitor turpis commodo.
                    </Text>
                    <BodyButton />
                    <StatsField />
                </Box>
            </Box>
        </Flex>
    );
};
export const BodySession = () => {
    const [teste, setTeste] = useState('');
    const [check, setCheck] = useState('');
    console.log(check);
    return (
        <Flex width="100%" backgrounColor="blue" height="100vh" display="block">
            <Flex
                height="130px"
                width="100%"
                justifyContent="center"
                display="flex"
            >
                <Box display="inline-block">
                    <Text fontWeight="bold" fontSize="36px">
                        Como funciona
                    </Text>
                </Box>
            </Flex>
            <SimpleGrid
                justifyContent="space-around"
                display="flex"
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
                <Card
                    borderRadius="10px"
                    width="360px"
                    height="200px"
                    alignItems="center"
                    borderColor="#D9D9D9"
                    borderStyle="solid"
                >
                    <CardHeader fontSize="24px">Fácil de pedir</CardHeader>
                    <Flex
                        height="150px"
                        width="200px"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CardBody display="inline-block">
                            <Box display="flex" justifyContent="center">
                                <Watch />
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </Text>
                            </Box>
                        </CardBody>
                    </Flex>
                </Card>
                <Card
                    borderRadius="10px"
                    width="360px"
                    height="200px"
                    alignItems="center"
                    backgroundColor="#FF5C00"
                    borderStyle="hidden"
                    color="white"
                >
                    <CardHeader fontSize="24px">Entrega rápida</CardHeader>
                    <Flex
                        height="150px"
                        width="200px"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CardBody display="inline-block">
                            <Box display="flex" justifyContent="center">
                                <Phone />
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </Text>
                            </Box>
                        </CardBody>
                    </Flex>
                </Card>
                <Card
                    borderRadius="10px"
                    width="360px"
                    height="200px"
                    alignItems="center"
                    borderColor="#D9D9D9"
                    borderStyle="solid"
                >
                    <CardHeader fontSize="24px">Melhor qualidade</CardHeader>
                    <Flex
                        height="150px"
                        width="200px"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CardBody display="inline-block">
                            <Box display="flex" justifyContent="center">
                                <Badge />
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </Text>
                            </Box>
                        </CardBody>
                    </Flex>
                </Card>
            </SimpleGrid>
            <Flex width="100%">
                <Box display="inline-block" marginTop="105px">
                    <img
                        src={require('../../assets/images/toastedChicken.png')}
                        alt=""
                    />
                </Box>
                <Flex
                    width="642px"
                    height="524px"
                    marginLeft="110px"
                    marginTop="105px"
                >
                    <Box lineHeight="30px">
                        <Text fontSize="36px" fontWeight="semibold">
                            Sobre nós
                        </Text>
                        <Text fontSize="83.2px" fontWeight="bold">
                            +150
                        </Text>
                        <Text fontSize="46.3px" fontWeight="regular">
                            Deliciosos pratos
                        </Text>
                        <Text
                            flexWrap="wrap"
                            fontSize="24px"
                            fontWeight="regular"
                        >
                            Donec consectetur tempor condimentum. Duis pharetra,
                            sapien ut vehicula dignissim, neque neque dapibus
                            magna, in convallis augue magna vel orci.
                        </Text>
                        <Box
                            as="button"
                            cursor="pointer"
                            width="181px"
                            height="57px"
                            fontSize="16px"
                            fontWeight="bold"
                            backgroundColor="#FE5722"
                            borderStyle="hidden"
                            borderRadius="10px"
                            color="white"
                        >
                            Explore o cardápio
                        </Box>
                    </Box>
                </Flex>
            </Flex>
            <Flex
                width="100%"
                justifyContent="center"
                display="flex"
                marginTop="105px"
            >
                <Box
                    display="inline-flex"
                    justifyContent="space-evenly"
                    width="646px"
                >
                    <Text
                        fontSize="18px"
                        fontWeight="regular"
                        color={teste}
                        onClick={e => {
                            setTeste('#FE5722');
                            setCheck(e.currentTarget.id);
                        }}
                        id="todos"
                    >
                        Todos
                    </Text>
                    <Text
                        fontSize="18px"
                        fontWeight="regular"
                        color={teste}
                        onClick={e => {
                            setTeste('#FE5722');
                            setCheck(e.currentTarget.id);
                        }}
                        id="churrasco"
                    >
                        Churrasco
                    </Text>
                    <Text
                        fontSize="18px"
                        fontWeight="regular"
                        color={teste}
                        onClick={() => setTeste('#FE5722')}
                    >
                        Massas
                    </Text>
                    <Text
                        fontSize="18px"
                        fontWeight="regular"
                        color={teste}
                        onClick={() => setTeste('#FE5722')}
                    >
                        Lanches
                    </Text>
                    <Text
                        fontSize="18px"
                        fontWeight="regular"
                        color={teste}
                        onClick={() => setTeste('#FE5722')}
                    >
                        Da casa
                    </Text>
                    <Text
                        fontSize="18px"
                        fontWeight="regular"
                        color={teste}
                        onClick={() => setTeste('#FE5722')}
                    >
                        Brasileira
                    </Text>
                </Box>
            </Flex>
            <CardsTab />
            {/* fechamento do principal*/}
        </Flex>
    );
};
