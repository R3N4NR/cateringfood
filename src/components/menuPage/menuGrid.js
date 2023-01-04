import {
    Card,
    CardFooter,
    CardHeader,
    GridItem,
    Img,
    Text,
    Tooltip,
} from '@chakra-ui/react';

export const GridCell = ({ name, img, price }) => {
    return (
        <>
            <GridItem className="gridItem">
                <Card>
                    <CardHeader display="flex">
                        <Img src={img} width="100%" height="400px" />
                    </CardHeader>
                    <CardFooter justifyContent="space-between">
                        {/* <Tooltip alignContent="center" label={name}></Tooltip> */}
                        <Text
                            width="60%"
                            // overflow="hidden"
                            // whiteSpace="nowrap"
                            // textOverflow="ellipsis"
                        >
                            {name}
                        </Text>

                        <Text color="#FE5722" fontWeight="600">
                            R$ {price}
                        </Text>
                    </CardFooter>
                </Card>
            </GridItem>
        </>
    );
};
