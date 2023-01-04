import {
    Flex,
    Box,
    Text,
    Card,
    CardBody,
    SimpleGrid,
    CardHeader,
} from '@chakra-ui/react';
import { ReactComponent as Plate } from '/public/assets/plate.svg';
import { BodyButton } from './bodyButton';
import { StatsField } from './stats';
import { ReactComponent as Watch } from '/public/assets/pocketwatch.svg';
import { ReactComponent as Badge } from '/public/assets/badge.svg';
import { ReactComponent as Phone } from '/public/assets/smartphone.svg';
import { ReactComponent as FilledArrow } from '/public/assets/squareArrow.svg';
import { AccordionTab } from './homePageSections/AccordionTab';
import { ReactComponent as UnfilledArrow } from '/public/assets/squareArrowUnfilled.svg';
import { ReactComponent as GooglePlayIcon } from '/public/assets/googleplay.svg';
import { ReactComponent as AppleStoreIcon } from '/public/assets/applestore.svg';
import { CardsTab } from './homePageSections/CardsTab';
import React, { useState } from 'react';

export const BodyContent = () => {
    return (
        <Flex
            width="100%"
            height="700px"
            justifyContent="center"
            display="flex"
            backgroundColor="#fff5f2"
        >
            <Flex justifyContent="space-between" width="100%">
                <Box display="inline-block" width="550px" marginLeft="205px">
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
                <Box display="inline-block">
                    <Plate />
                </Box>
            </Flex>
        </Flex>
    );
};
export const BodySession = () => {
    const initialState = {
        value1: '#272d36',
        value2: '#272d36',
        value3: '#272d36',
        value4: '#272d36',
        value5: '#272d36',
        value6: '#272d36',
    };
    const [value, setValue] = useState({ initialState });

    return (
        <Flex width="100%" backgrounColor="blue" height="100%" display="block">
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
            <Flex width="100%" justifyContent="space-between">
                <Box display="inline-block" marginTop="105px">
                    <img
                        src={require('/public/assets/images/toastedChicken.png')}
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
                    _hover={{
                        cursor: 'pointer',
                    }}
                >
                    <Text
                        fontSize="18px"
                        fontWeight="regular"
                        color={value.value1}
                        onClick={e => {
                            setValue(prevState => {
                                return {
                                    ...(prevState = '#272d36'),
                                    value1: '#FE5722',
                                };
                            });
                        }}
                    >
                        Todos
                    </Text>
                    <Text
                        fontSize="18px"
                        fontWeight="regular"
                        color={value.value2}
                        onClick={e => {
                            setValue(prevState => {
                                return {
                                    ...(prevState = '#272d36'),
                                    value2: '#FE5722',
                                };
                            });
                        }}
                    >
                        Churrasco
                    </Text>
                    <Text
                        fontSize="18px"
                        fontWeight="regular"
                        color={value.value3}
                        onClick={() =>
                            setValue(prevState => {
                                return {
                                    ...(prevState = '#272d36'),
                                    value3: '#FE5722',
                                };
                            })
                        }
                    >
                        Massas
                    </Text>
                    <Text
                        fontSize="18px"
                        fontWeight="regular"
                        color={value.value4}
                        onClick={() =>
                            setValue(prevState => {
                                return {
                                    ...(prevState = '#272d36'),
                                    value4: '#FE5722',
                                };
                            })
                        }
                    >
                        Lanches
                    </Text>
                    <Text
                        fontSize="18px"
                        fontWeight="regular"
                        color={value.value5}
                        onClick={() =>
                            setValue(prevState => {
                                return {
                                    ...(prevState = '#272d36'),
                                    value5: '#FE5722',
                                };
                            })
                        }
                    >
                        Da casa
                    </Text>
                    <Text
                        fontSize="18px"
                        fontWeight="regular"
                        color={value.value6}
                        onClick={() =>
                            setValue(prevState => {
                                return {
                                    ...(prevState = '#272d36'),
                                    value6: '#FE5722',
                                };
                            })
                        }
                    >
                        Brasileira
                    </Text>
                </Box>
            </Flex>
            <Box justifyContent="center" display="flex">
                <CardsTab />
            </Box>
            <Box justifyContent="center" display="flex">
                <BodySessionTwo />
            </Box>
            <Box justifyContent="center" display="flex">
                <BodySessionThree />
            </Box>
            <Box justifyContent="center" display="flex">
                <BodySessionFour />
            </Box>
            <Box justifyContent="center" display="flex">
                <MemberRegister />
            </Box>
            {/* fechamento do principal*/}
        </Flex>
    );
};

export const BodySessionTwo = () => {
    return (
        //BOX AVALIÇÕES
        <Flex
            height="1050px"
            width="1196px"
            justifyContent="center"
            display="flex"
            alignItems="center"
        >
            <Box width="598px" height="400px" display="inline-block">
                <Box width="454px">
                    <Text color="#272D36" fontWeight="semibold" fontSize="36px">
                        O que as pessoas dizem sobre o buffet Argolo
                    </Text>
                </Box>
                <Box width="520px">
                    <Text color="#272D36">
                        Donec consectetur tempor condimentum. Duis pharetra,
                        sapien ut vehicula dignissim, neque neque dapibus magna,
                        in convallis augue magna vel orci.
                    </Text>
                </Box>
                <Box width="300px" height="135px" display="inline-flex">
                    <Box
                        width="96px"
                        height="96px"
                        backgroundColor="red"
                        borderRadius="100%"
                        className="icon"
                        border="hidden"
                    >
                        <img
                            src={require('/public/assets/images/people.jpg')}
                            alt=""
                        />
                    </Box>
                    <Box>
                        <Text
                            fontSize="24px"
                            fontWeight="semibold"
                            marginLeft="17px"
                        >
                            Ramon Souza
                        </Text>
                        <Text
                            fontSize="16px"
                            fontWeight="medium"
                            marginTop="-20px"
                            marginLeft="20px"
                        >
                            São Lourenço, RS
                        </Text>
                        <Box marginLeft="17px">
                            <UnfilledArrow />
                            <FilledArrow />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box display="inline-block">
                <img
                    src={require('/public/assets/images/foodPlate.png')}
                    alt=""
                />
            </Box>
        </Flex>
    );
};

export const BodySessionThree = () => {
    return (
        <Flex
            height="100%"
            width="100%"
            justifyContent="center"
            display="flex"
            backgroundColor="#fffaf9"
        >
            <Flex display="block" width="840px" justifyContent="center">
                <Box
                    fontSize="48px"
                    width="840px"
                    fontWeight="semibold"
                    justifyContent="center"
                    display="flex"
                >
                    <Text display="inline-block">Perguntas frequentes</Text>
                </Box>
                <Box justifyContent="center" display="flex">
                    <AccordionTab />
                </Box>
            </Flex>
        </Flex>
    );
};

export const BodySessionFour = () => {
    return (
        <Flex
            width="100%"
            height="950px"
            justifyContent="center"
            display="flex"
        >
            <Flex
                justifyContent="space-between"
                alignItems="center"
                width="100%"
            >
                <Box display="inline-block" marginTop="105px">
                    <img
                        src={require('/public/assets/images/iphone.png')}
                        alt=""
                    />
                </Box>

                <Box display="inline-block" height="500px" marginLeft="200px">
                    <Box width="480px">
                        <Text color="#272D36" fontSize="36px" fontWeight="bold">
                            Baixe o aplicativo na sua App Store
                        </Text>
                    </Box>
                    <Box width="550px">
                        <Text
                            fontSize="16px"
                            fontWeight="regular"
                            color="#272d36"
                        >
                            Donec consectetur tempor condimentum. Duis pharetra,
                            sapien ut vehicula dignissim, neque neque dapibus
                            magna, in convallis augue magna vel orci.
                        </Text>
                    </Box>
                    <Box
                        width="420px"
                        justifyContent="space-around"
                        display="flex"
                    >
                        <GooglePlayIcon />
                        <AppleStoreIcon />
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};

export const MemberRegister = () => {
    return (
        <Flex
            width="100%"
            height="635px"
            justifyContent="center"
            display="flex"
            alignItems="center"
        >
            <Box
                width="1182px"
                height="395px"
                justifyContent="center"
                display="flex"
                alignItems="center"
                backgroundImage={require('/public/assets/images/newsLetterCover.jpg')}
            >
                <Box
                    as="input"
                    id="inputNews"
                    display="inline-block"
                    width="512px"
                    height=" 60px"
                    borderRadius="10px"
                    justifyContent="right"
                    fontSize="14px"
                    placeholder="Seu e-mail aqui"
                />
                <Box
                    backgroundColor="#ff744c"
                    width="127px"
                    zIndex={2}
                    position="absolute"
                    height=" 64px"
                    borderRadius="10px"
                    borderLeftRadius="0px"
                    marginLeft="390px"
                    as="button"
                    cursor="pointer"
                    fontSize="14px"
                    color="white"
                >
                    ASSINAR
                </Box>
            </Box>
        </Flex>
    );
};
