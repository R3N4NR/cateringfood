import * as React from 'react';

import '../../App.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Box, Flex, Text } from '@chakra-ui/react';
import InputCustom from './input';
import CustomButtom from './loginButton';

export function Header() {
    return (
        <Flex
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            backgroundColor="#fff5f2"
        >
            <Box height="80%" marginLeft="205px" display="inline-block">
                <Logo />
            </Box>

            <Box
                width="60%"
                marginTop="50px"
                justifyContent="space-between"
                display="flex"
            >
                <Text className="personalize" display="inline-block">
                    Menu
                </Text>
                <Text className="personalize" display="inline-block">
                    Para festas
                </Text>
                <Text className="personalize" display="inline-block">
                    Sobre
                </Text>
                <Text className="personalize" display="inline-block">
                    Review de cardápios
                </Text>
                <Text className="personalize" display="inline-block">
                    Restaurantes
                </Text>
                <InputCustom />
                <CustomButtom />
            </Box>
        </Flex>
    );
}
