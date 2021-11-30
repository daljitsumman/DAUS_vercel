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
  import {MdSettings} from 'react-icons';

  import Header from './components/header'
  import {FormEventHandler, useState} from "react"

  export default () => {

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
          <GridItem gridColumnStart='1' gridColumnEnd='2'>
            <Header></Header>
          </GridItem>

          <GridItem borderBottom='1px solid grey' marginLeft="30px">
           
          <h1 style={{margin:'30px', fontSize:'50px'}}>Reporting</h1>
          
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
            Clinical Performance
          </Button>  
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
            HR compliance
          </Button>  
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
            Clinical Governance
            - CQC etc
          </Button>  
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
            Appt utilisation
          </Button>  
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
            Financial
          </Button>  
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
            Stock Conttol
          </Button>  
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
            Patient Feedback
          </Button>  
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
            Legal
          </Button>  
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
            Site Operational Reporting
          </Button>  
          </GridItem>
      </Grid>
  }