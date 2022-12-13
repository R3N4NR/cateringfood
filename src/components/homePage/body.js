import {Flex, Box,  Text} from '@chakra-ui/react'
import {ReactComponent as Plate} from '../../assets/plate.svg'
import {BodyButton} from './bodyButton'
import { StatsField } from './stats'

export const BodyContent = () => {

    return(
       
            
    <Flex  backgroundColor="#FFF5E7" marginTop="-20px">
    
    <Box  height="100vh"  width="100%" >
    <Box  position="absolute" right="0" >
            <Plate/>
            </Box>

        
       <Box position="absolute" left="74" width="550px" >
       <Text fontSize="64px" as='b' color="#5E5858">Não é só comida, <span style={
        {fontWeight:'normal'}}>é uma</span><span style={
            {fontWeight:'normal',color:'#FF5C00'}}> Experiência</span></Text>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vivamus tristique pulvinar pharetra. Donec luctus 
metus a nisi suscipit, sed porttitor turpis commodo. 
            </Text>
            <BodyButton/>
            <StatsField/>
       </Box>
    </Box>
       </Flex>
       
       )}