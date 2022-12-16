import * as React from 'react';

import '../../App.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Box, Flex, Text } from '@chakra-ui/react';
import InputCustom from './input';
import CustomButtom from './loginButton';

export function Header() {
    return (
        <Flex display="block" backgroundColor="#FFF5E7">
            <Box height="150px" width="100%" display="inline-flex">
                <Box
                    position="absolute"
                    marginLeft="74px"
                    marginTop="67px"
                    width="225px"
                    height="44px"
                    className="logoFont"
                >
                    <Logo />
                </Box>

                <Box
                    width="100%"
                    height="64px"
                    marginLeft="274px"
                    marginRight="55px"
                    marginBottom="612px"
                    marginTop="84px"
                    justifyContent="space-between"
                    display="inline-flex"
                >
                    <Text className="personalize">Menu</Text>
                    <Text className="personalize">Para festas</Text>
                    <Text className="personalize">Sobre</Text>
                    <Text className="personalize">Review de cardápios</Text>
                    <Text className="personalize">Restaurantes</Text>
                    <InputCustom />
                    <CustomButtom />
                </Box>
            </Box>
        </Flex>
    );
}
