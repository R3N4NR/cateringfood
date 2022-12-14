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
import { ReactComponent as Barbecue } from '../../assets/barbecue.svg';

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
            <Flex
                height="100vh"
                width="100%"
                marginLeft="100px"
                marginTop="100px"
            >
                <Box display="inline-block">
                    <Barbecue />
                </Box>
                <Box marginLeft="200px">
                    <Text>TESTE</Text>
                </Box>
            </Flex>
        </Flex>
    );
};
