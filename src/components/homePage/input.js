import { Input } from '@chakra-ui/react';

const InputCustom = () => {
    return (
        <Input
            placeholder="Digite sua busca"
            borderRadius="20px"
            width="152px"
            height="33px"
            borderColor="Highlight"
            borderStyle="outset"
            className="searchInput"
        />
    );
};
export default InputCustom;
