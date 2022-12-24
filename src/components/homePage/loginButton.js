import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CustomButton = () => {
    return (
        <Link to="/login">
            <Button
                borderRadius="10px"
                label="Login"
                width="75px"
                height="34px"
                backgroundColor="#FF5C00"
                color="white"
                borderStyle="hidden"
                cursor="pointer"
            >
                Login
            </Button>
        </Link>
    );
};
export default CustomButton;
