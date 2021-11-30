import {
    Grid, 
    GridItem,
    Box, 
    Flex,
    Input, 
    Spacer,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    VStack,
    StackDivider,
    Image,
    Select,
    Heading,
    Text
  } from "@chakra-ui/react"

  import Header from './components/header'
  import {FormEventHandler, useState} from "react"

  export default function rota(){

    const [getRole, setRole] = useState("");

    const hit = (e) => {
        setRole(e.target.value);
    }

    return <Grid 
      h="100vh"
      templateRows=".18fr 1fr"
      templateColumns="1fr"
      gap={0}
      >
          <GridItem gridColumnStart='1' gridColumnEnd='3'>
            <Header></Header>
          </GridItem>
          
          <GridItem borderBottom='1px solid grey' margin="30px">
           
            <h1 style={{marginBottom:'30px', fontSize:'50px'}}>Rota</h1>
            <Heading as='h4' size='md'>
                Rota Master - Site base
                Service base ---- extended Hours service, Care Home, etc
            </Heading>
            <Text marginBottom="30px" marginTop="30px">
                Rota info for clinical Staff<br/>
                - Gaps /empty shifts
            </Text>
            <Text marginBottom="30px">
                Rota info for clinical Staff<br/>
                - Gaps /empty shifts
            </Text>
          </GridItem>
      </Grid>
  }