import { Box, Link, Flex, Text, Input } from '@chakra-ui/react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Twitter } from '../../assets/twitterLogin.svg';
import { ReactComponent as Facebook } from '../../assets/facebookLogin.svg';
import { ReactComponent as Google } from '../../assets/googleLogin.svg';
import { CustomInput } from './input';

export const Login = () => {
    return (
        <Flex
            width="100%"
            height="100%"
            position="absolute"
            fontFamily="Montserrat"
        >
            <Flex
                backgroundImage={require('../../assets/images/backgroundLogin.jpg')}
                width="50%"
                height="100%"
                position="absolute"
                backgroundSize="cover"
            />
            <Box
                width="50%"
                height="100%"
                zIndex={2}
                justifyContent="center"
                display="flex"
            >
                <Box marginTop="100px" width="50%">
                    <Box marginLeft="10%">
                        <Logo />
                    </Box>
                    <Box>
                        <Text
                            color="white"
                            fontSize="36px"
                            fontWeight="600"
                            textAlign="center"
                            fontFamily="Montserrat"
                        >
                            Seja bem-vindo a experiência
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Flex
                width="50%"
                justifyContent="center"
                display="flex"
                alignItems="center"
            >
                <Box
                    width="500px"
                    height="500px"
                    justifyContent="center"
                    display="flex"
                >
                    <Box flexDirection="column">
                        <Text
                            fontWeight="600"
                            fontSize="36px"
                            display="flex"
                            justifyContent="center"
                        >
                            Entrar
                        </Text>
                        <Box height="135px" width="300px" lineHeight="70px">
                            <CustomInput type="email" />
                            <CustomInput type="password" />
                        </Box>
                        <Box
                            marginTop="10px"
                            fontSize="14px"
                            justifyContent="space-between"
                            display="inline-flex"
                            width="300px"
                        >
                            <Box width="50%">
                                <Input
                                    type="checkbox"
                                    colorScheme="red"
                                    cursor="pointer"
                                />
                                Lembrar-me
                            </Box>
                            <Box color="#FE5722" cursor="pointer">
                                Esqueceu a senha ?
                            </Box>
                        </Box>

                        <Box
                            marginTop="40px"
                            width="150px"
                            height="50px"
                            className="buttonBackground"
                            borderRadius="40px"
                            alignItems="center"
                            justifyContent="center"
                            display="flex"
                            marginLeft="25%"
                            as="button"
                            cursor="pointer"
                            border="none"
                            fontFamily="Montserrat"
                        >
                            Entrar
                        </Box>
                        <Box>
                            <Text
                                marginLeft="32%"
                                marginTop="10%"
                                fontWeight="600"
                                fontSize="14px"
                            >
                                Ou entre com
                            </Text>
                        </Box>
                        <Box
                            justifyContent="space-around"
                            display="flex"
                            width="300px"
                        >
                            <Google cursor="pointer" />
                            <Twitter cursor="pointer" />
                            <Facebook cursor="pointer" />
                        </Box>
                        <Box
                            marginTop="10px"
                            fontSize="14px"
                            marginLeft="5%"
                            justifyContent="center"
                            display="flex"
                        >
                            <Text display="inline-block">
                                Ainda não tem uma conta ?
                                <Text
                                    display="inline-block"
                                    cursor="pointer"
                                    color="#FE5722"
                                >
                                    Crie uma!
                                </Text>
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};
