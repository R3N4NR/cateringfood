import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { Sidebar } from '../features/sidebar';
import { GridCell } from './menuGrid';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { Footer } from '../homePage/footer';
import { useEffect, useState } from 'react';
import data from '/public/data/mock/menu';
import { defaultData } from '../../../public/data/mock/menu';
export const MenuPage = () => {
    const [menuData, setMenuData] = useState();

    const handleChangeData = data => {
        setMenuData(data);
    };

    console.log('m3nu', menuData);
    return (
        <Grid templateColumns="20% 80%" gridTemplateRows="auto" height="100%">
            <GridItem width="100%" height="10">
                <Sidebar menuData={handleChangeData} />
            </GridItem>
            <GridItem width="100%" height="100%">
                <Box
                    width="100%"
                    height="100px"
                    display="inline-flex"
                    justifyContent="center"
                >
                    <Box
                        width="600px"
                        marginTop="5%"
                        display="inline-flex"
                        justifyContent="space-around"
                    >
                        <Text>Menu</Text>
                        <Text>Para festas</Text>
                        <Text>Sobre</Text>
                        <Text>Review de cardápios</Text>
                        <Text>Restaurantes</Text>
                    </Box>
                </Box>
                <Box
                    width="100%"
                    height="80px"
                    justifyContent="center"
                    display="flex"
                    marginTop="5%"
                    alignItems="center"
                >
                    <Text fontSize="36px">Menu</Text>
                </Box>
                <Grid templateColumns="repeat(3,1fr)" className="menuGrid">
                    {menuData
                        ? menuData.map(item => (
                              <GridCell
                                  price={item?.price}
                                  img={item?.img}
                                  name={item?.name}
                              />
                          ))
                        : defaultData.all.map(item => (
                              <GridCell
                                  price={item?.price}
                                  img={item?.img}
                                  name={item?.name}
                              />
                          ))}
                </Grid>
                <Box justifyContent="center" display="flex" marginTop="5%">
                    <Box
                        justifyContent="space-between"
                        display="flex"
                        width="100px"
                    >
                        <MdArrowBackIos />
                        1 2
                        <MdArrowForwardIos />
                    </Box>
                </Box>
                <hr />
            </GridItem>
            <GridItem className="footerMenuContext">
                <Footer />
            </GridItem>
        </Grid>
    );
};
