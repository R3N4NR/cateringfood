import { Flex, Box, Image, Card, Text } from '@chakra-ui/react';

export const CardsTab = () => {
    return (
        <Flex
            height="100px"
            width="100%"
            justifyContent="center"
            display="flex"
            marginTop="60px"
        >
            <Flex
                height="1050px"
                width="1196px"
                justifyContent="space-evenly"
                display="flex"
            >
                <Box display="inline-block" marginTop="15px">
                    <Card
                        borderRadius="6px"
                        width="350px"
                        height="445px"
                        borderStyle="solid"
                        borderWidth="2px"
                        borderColor="#bdbdbd"
                        color="white"
                        marginTop="44px"
                        className="cards"
                    >
                        <Box>
                            <Image
                                src={require('../../../assets/images/sopa.jpg')}
                                alt=""
                                width="350px"
                                height="245px"
                            />
                        </Box>
                        <Flex marginTop="-4px" flexDirection="column">
                            <Box
                                height="100px"
                                display="inline-flex"
                                flexWrap="wrap"
                                fontSize="20px"
                                marginLeft="10px"
                            >
                                <Box width="280px">
                                    <Text color="#828282">
                                        Alaminuta com porção extra de batata
                                        frita
                                    </Text>
                                </Box>
                                <Text
                                    fontSize="20px"
                                    marginLeft="10px"
                                    color="#fe5732"
                                >
                                    4.8/5
                                </Text>
                                <Text color="#4f4f4f" marginBottom="5px">
                                    Dhaka, Bangladesh
                                </Text>
                                <Box
                                    width="350px"
                                    display="inline-flex"
                                    marginLeft="-10px"
                                    justifyContent="space-around"
                                    height="60px"
                                >
                                    <Text color="black">$ 22.00</Text>
                                    <Box
                                        as="button"
                                        id="button"
                                        cursor="pointer"
                                        width="80px"
                                        height="40px"
                                        fontSize="16px"
                                        fontWeight="bold"
                                        backgroundColor="#ffffff"
                                        borderStyle="solid"
                                        borderRadius="10px"
                                        borderColor="#ff6600"
                                        color="#4f4f4f"
                                    >
                                        Pedir
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Card>
                    <Card
                        className="cards"
                        borderRadius="6px"
                        width="350px"
                        height="445px"
                        borderStyle="solid"
                        borderWidth="2px"
                        borderColor="#bdbdbd"
                        color="white"
                        marginTop="44px"
                    >
                        <Box>
                            <Image
                                src={require('../../../assets/images/peixe.jpg')}
                                alt=""
                                width="350px"
                                height="245px"
                            />
                        </Box>
                        <Flex marginTop="-4px" flexDirection="column">
                            <Box
                                height="100px"
                                display="inline-flex"
                                flexWrap="wrap"
                                fontSize="20px"
                                marginLeft="10px"
                            >
                                <Box width="280px">
                                    <Text color="#828282">
                                        Alaminuta com porção extra de batata
                                        frita
                                    </Text>
                                </Box>
                                <Text
                                    fontSize="20px"
                                    marginLeft="10px"
                                    color="#fe5732"
                                >
                                    4.8/5
                                </Text>
                                <Text color="#4f4f4f" marginBottom="5px">
                                    Dhaka, Bangladesh
                                </Text>
                                <Box
                                    width="350px"
                                    display="inline-flex"
                                    marginLeft="-10px"
                                    justifyContent="space-around"
                                    height="60px"
                                >
                                    <Text color="black">$ 22.00</Text>
                                    <Box
                                        as="button"
                                        id="button"
                                        cursor="pointer"
                                        width="80px"
                                        height="40px"
                                        fontSize="16px"
                                        fontWeight="bold"
                                        backgroundColor="white"
                                        borderColor="#ff6600"
                                        borderStyle="solid"
                                        borderRadius="10px"
                                        color="#4f4f4f"
                                    >
                                        Pedir
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Card>
                </Box>
                <Box display="inline-block" marginTop="15px">
                    <Card
                        className="cards"
                        borderRadius="6px"
                        width="350px"
                        height="445px"
                        borderStyle="solid"
                        borderWidth="2px"
                        borderColor="#bdbdbd"
                        color="white"
                        marginTop="44px"
                    >
                        <Box>
                            <Image
                                src={require('../../../assets/images/alaminuta.jpg')}
                                alt=""
                                width="352px"
                                height="245px"
                            />
                        </Box>
                        <Flex marginTop="-4px" flexDirection="column">
                            <Box
                                height="100px"
                                display="inline-flex"
                                flexWrap="wrap"
                                fontSize="20px"
                                marginLeft="10px"
                            >
                                <Box width="280px">
                                    <Text color="#828282">
                                        Alaminuta com porção extra de batata
                                        frita
                                    </Text>
                                </Box>
                                <Text
                                    fontSize="20px"
                                    marginLeft="10px"
                                    color="#fe5732"
                                >
                                    4.8/5
                                </Text>
                                <Text color="#4f4f4f" marginBottom="5px">
                                    Dhaka, Bangladesh
                                </Text>
                                <Box
                                    width="350px"
                                    display="inline-flex"
                                    marginLeft="-10px"
                                    justifyContent="space-around"
                                    height="60px"
                                >
                                    <Text color="black">$ 22.00</Text>
                                    <Box
                                        as="button"
                                        id="button"
                                        cursor="pointer"
                                        width="80px"
                                        height="40px"
                                        fontSize="16px"
                                        fontWeight="bold"
                                        backgroundColor="white"
                                        borderColor="#ff6600"
                                        borderStyle="solid"
                                        borderRadius="10px"
                                        color="#4f4f4f"
                                    >
                                        Pedir
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Card>
                    <Card
                        className="cards"
                        borderRadius="6px"
                        width="350px"
                        height="445px"
                        borderStyle="solid"
                        borderWidth="2px"
                        borderColor="#bdbdbd"
                        color="white"
                        marginTop="44px"
                    >
                        <Box>
                            <Image
                                src={require('../../../assets/images/massa2.jpeg')}
                                alt=""
                                width="350px"
                                height="245px"
                            />
                        </Box>
                        <Flex marginTop="-4px" flexDirection="column">
                            <Box
                                height="100px"
                                display="inline-flex"
                                flexWrap="wrap"
                                fontSize="20px"
                                marginLeft="10px"
                            >
                                <Box width="280px">
                                    <Text color="#828282">
                                        Alaminuta com porção extra de batata
                                        frita
                                    </Text>
                                </Box>
                                <Text
                                    fontSize="20px"
                                    marginLeft="10px"
                                    color="#fe5732"
                                >
                                    4.8/5
                                </Text>
                                <Text color="#4f4f4f" marginBottom="5px">
                                    Dhaka, Bangladesh
                                </Text>
                                <Box
                                    width="350px"
                                    display="inline-flex"
                                    marginLeft="-10px"
                                    justifyContent="space-around"
                                    height="60px"
                                >
                                    <Text color="black">$ 22.00</Text>
                                    <Box
                                        as="button"
                                        id="button"
                                        cursor="pointer"
                                        width="80px"
                                        height="40px"
                                        fontSize="16px"
                                        fontWeight="bold"
                                        backgroundColor="white"
                                        borderColor="#ff6600"
                                        borderStyle="solid"
                                        borderRadius="10px"
                                        color="#4f4f4f"
                                    >
                                        Pedir
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Card>
                </Box>
                <Box display="inline-block" marginTop="15px">
                    <Card
                        className="cards"
                        borderRadius="6px"
                        width="350px"
                        height="445px"
                        borderStyle="solid"
                        borderWidth="2px"
                        borderColor="#bdbdbd"
                        color="white"
                        marginTop="44px"
                    >
                        <Box>
                            <Image
                                src={require('../../../assets/images/hamburguer.jpg')}
                                alt=""
                                width="350px"
                                height="245px"
                            />
                        </Box>
                        <Flex marginTop="-4px" flexDirection="column">
                            <Box
                                height="100px"
                                display="inline-flex"
                                flexWrap="wrap"
                                fontSize="20px"
                                marginLeft="10px"
                            >
                                <Box width="280px">
                                    <Text color="#828282">
                                        Alaminuta com porção extra de batata
                                        frita
                                    </Text>
                                </Box>
                                <Text
                                    fontSize="20px"
                                    marginLeft="10px"
                                    color="#fe5732"
                                >
                                    4.8/5
                                </Text>
                                <Text color="#4f4f4f" marginBottom="5px">
                                    Dhaka, Bangladesh
                                </Text>
                                <Box
                                    width="350px"
                                    display="inline-flex"
                                    marginLeft="-10px"
                                    justifyContent="space-around"
                                    height="60px"
                                >
                                    <Text color="black">$ 22.00</Text>
                                    <Box
                                        as="button"
                                        id="button"
                                        cursor="pointer"
                                        width="80px"
                                        height="40px"
                                        fontSize="16px"
                                        fontWeight="bold"
                                        backgroundColor="white"
                                        borderColor="#ff6600"
                                        borderStyle="solid"
                                        borderRadius="10px"
                                        color="#4f4f4f"
                                    >
                                        Pedir
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Card>
                    <Card
                        className="cards"
                        borderRadius="6px"
                        width="350px"
                        height="445px"
                        borderStyle="solid"
                        borderWidth="2px"
                        borderColor="#bdbdbd"
                        color="white"
                        marginTop="44px"
                    >
                        <Box>
                            <Image
                                src={require('../../../assets/images/massa.jpg')}
                                alt=""
                                width="350px"
                                height="245px"
                            />
                        </Box>
                        <Flex marginTop="-4px" flexDirection="column">
                            <Box
                                height="100px"
                                display="inline-flex"
                                flexWrap="wrap"
                                fontSize="20px"
                                marginLeft="10px"
                            >
                                <Box width="280px">
                                    <Text color="#828282">
                                        Alaminuta com porção extra de batata
                                        frita
                                    </Text>
                                </Box>
                                <Text
                                    fontSize="20px"
                                    marginLeft="10px"
                                    color="#fe5732"
                                >
                                    4.8/5
                                </Text>
                                <Text color="#4f4f4f" marginBottom="5px">
                                    Dhaka, Bangladesh
                                </Text>
                                <Box
                                    width="350px"
                                    display="inline-flex"
                                    marginLeft="-10px"
                                    justifyContent="space-around"
                                    height="60px"
                                >
                                    <Text color="black">$ 22.00</Text>
                                    <Box
                                        as="button"
                                        id="button"
                                        cursor="pointer"
                                        width="80px"
                                        height="40px"
                                        fontSize="16px"
                                        fontWeight="bold"
                                        backgroundColor="white"
                                        borderColor="#ff6600"
                                        borderStyle="solid"
                                        borderRadius="10px"
                                        color="#4f4f4f"
                                    >
                                        Pedir
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Card>
                </Box>
            </Flex>
        </Flex>
    );
};
