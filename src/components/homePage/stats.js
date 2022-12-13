import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'

export const StatsField = () => {
    return(
<StatGroup backgroundColor="white" borderRadius="10px" marginTop="82px" width="442px">
  <Stat>
    
    <StatNumber fontWeight="bold">5000+</StatNumber>
    <StatHelpText fontSize="16px" fontWeight="light">
      Clientes
    </StatHelpText>
    
  </Stat>

  <Stat>
    
    <StatNumber fontWeight="bold">8000+</StatNumber>
    <StatHelpText fontSize="16px" fontWeight="light">
      
     Entregas
    </StatHelpText>
  </Stat>
  <Stat>
    
    <StatNumber fontWeight="bold">1500+</StatNumber>
    <StatHelpText fontSize="16px" fontWeight="light">
      
     Avaliações
    </StatHelpText>
  </Stat>
</StatGroup>)}