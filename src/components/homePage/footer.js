import { Box, Link, Flex, Text } from '@chakra-ui/react';
import { ReactComponent as Logo } from '../../assets/logoFooter.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
export const Footer = () => {
    return (
        <Flex
            width="100%"
            height="400px"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#282C34"
            display="block"
        >
            <Flex
                width="100%"
                justifyContent="center"
                backgroundColor="#282C34"
                display="flex"
            >
                <Box
                    width="80%"
                    height="282px"
                    justifyContent="space-between"
                    display="flex"
                    color="white"
                    marginTop="30px"
                >
                    <Box width="387px" display="inline-block" height="100%">
                        <Logo />
                        <Box>
                            <Text fontSize="16px" fontWeigth="500">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vivamus tristique pulvinar
                                pharetra. Donec luctus metus a nisi suscipit,
                                sed porttitor turpis commodo.
                            </Text>
                        </Box>
                        <Box
                            justifyContent="space-between"
                            display="flex"
                            width="300px"
                        >
                            <Link href="https://www.facebook.com/">
                                <Facebook
                                    display="inline-block"
                                    cursor="pointer"
                                />
                            </Link>
                            <Link href="https://www.instagram.com/">
                                <Instagram
                                    display="inline-block"
                                    cursor="pointer"
                                />
                            </Link>
                            <Link href="https://twitter.com">
                                <Twitter
                                    display="inline-block"
                                    cursor="pointer"
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/in/renan-ramalho-1135b11ba/">
                                <LinkedIn
                                    display="inline-block"
                                    cursor="pointer"
                                />
                            </Link>
                        </Box>
                    </Box>
                    <Box
                        width="163px"
                        display="inline-block"
                        height="100%"
                        fontWeight="bold"
                    >
                        Suporte
                        <Box lineHeight="32px" fontWeight="normal">
                            <Text cursor="pointer">Conta</Text>
                            <Text cursor="pointer">Suporte</Text>
                            <Text cursor="pointer">Feedback</Text>
                            <Text cursor="pointer">Acessibilidade</Text>
                        </Box>
                    </Box>
                    <Box
                        width="163px"
                        display="inline-block"
                        height="100%"
                        fontWeight="bold"
                    >
                        Nosso Menu
                        <Box lineHeight="32px" fontWeight="normal">
                            <Text cursor="pointer">Especial</Text>{' '}
                            <Text cursor="pointer">Populares</Text>{' '}
                            <Text cursor="pointer">Categorias</Text>
                        </Box>
                    </Box>
                    <Box
                        width="163px"
                        display="inline-block"
                        height="100%"
                        fontWeight="bold"
                    >
                        Links Úteis
                        <Box lineHeight="32px" fontWeight="normal">
                            <Text cursor="pointer">Pagamento e taxa</Text>
                            <Text cursor="pointer">Termos de seviço</Text>
                            <Text cursor="pointer">
                                Política de privacidade
                            </Text>
                            <Text cursor="pointer">Sobre nós</Text>
                        </Box>
                    </Box>
                    <Box
                        width="163px"
                        display="inline-block"
                        height="100%"
                        fontWeight="bold"
                    >
                        Entre em contato
                        <Box lineHeight="32px" fontWeight="normal">
                            <Text>
                                R. Conde de Porto Alegre 201 Centro Pelotas RS
                            </Text>
                            <Text>+5553992184315</Text>
                            <Box
                                as="button"
                                cursor="pointer"
                                width="163px"
                                height="57px"
                                fontSize="16px"
                                fontWeight="bold"
                                backgroundColor="#FE5722"
                                borderStyle="hidden"
                                borderRadius="10px"
                                color="white"
                            >
                                Inscrever-se
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Flex>

            <hr />
            <Text
                textAlign="center"
                fontWeight="light"
                color="#bdbdbd"
                fontSize="20px"
            >
                Todos os direitos© 2022 by buffet Argolo{' '}
            </Text>
        </Flex>
    );
};
