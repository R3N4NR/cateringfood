import { Card, CardFooter, CardHeader, GridItem, Text } from '@chakra-ui/react';

export const GridCell = ({ img, price }) => {
    return (
        <>
            <GridItem className="gridItem">
                <Card>
                    <CardHeader display="flex">
                        <img src={img} alt="" />
                    </CardHeader>
                    <CardFooter justifyContent="space-between">
                        <Text>Burguer com cheedar e fritas</Text>
                        <Text color="#FE5722" fontWeight="600">
                            R$ {price}
                        </Text>
                    </CardFooter>
                </Card>
            </GridItem>
        </>
    );
};
