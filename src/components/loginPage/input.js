import { Input, Box, Image } from '@chakra-ui/react';
import { ReactComponent as User } from '../../assets/user.svg';
import { ReactComponent as Lock } from '../../assets/lock.svg';
export const CustomInput = ({ type }) => {
    return (
        <Box position="relative">
            <Box position="absolute" left="8%" top="8px">
                {type == 'email' ? <User /> : <Lock />}
            </Box>
            <Input
                type={type}
                width="300px"
                height="50px"
                borderRadius="40px"
                border="1px solid #828282"
                autoComplete="off"
                backgroundColor="white"
                textAlign="center"
            />
        </Box>
    );
};
