
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
    List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  } from "@chakra-ui/react"

  import Header from './components/header'
  import {FormEventHandler, useState} from "react"

  export default function governance(){

    const [getRole, setRole] = useState("");

    const hit = (e) => {
        setRole(e.target.value);
    }

    return <Grid 
      h="100vh"
      templateRows=".18fr 1fr"
      templateColumns="1fr 1fr"
      gap={0}
      >
          <GridItem gridColumnStart='1' gridColumnEnd='3'>
            <Header></Header>
          </GridItem>

          
          <GridItem borderBottom='1px solid grey' marginLeft="30px">
           
          <h1 style={{margin:'30px', fontSize:'50px'}}>Governance</h1>

          
          </GridItem>

          <GridItem>
              
          </GridItem>
      </Grid>
  }