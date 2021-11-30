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
  import {MdSettings} from 'react-icons/md';

  import Header from './components/header'
  import {FormEventHandler, useState} from "react"

  export default function staff() {

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
           
          <h1 style={{margin:'30px', fontSize:'50px'}}>Staff</h1>

          <List spacing={3}>
            <ListItem>
                <ListIcon as={MdSettings} color='green.500' />
                No of Staff per Siites and workforce set
            </ListItem>
            <ListItem>
                <ListIcon as={MdSettings} color='green.500' />
                No of vacanies per site and workforce set
            </ListItem>
            <ListItem>
                <ListIcon as={MdSettings} color='green.500' />
                Recruitment HR Files
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
                <ListIcon as={MdSettings} color='green.500' />
                Staff Clinical Compentencies 
            </ListItem>
            <ListItem>
                <ListIcon as={MdSettings} color='green.500' />
                Locum usage per site and workforce set 
            </ListItem>
            <ListItem>
                <ListIcon as={MdSettings} color='green.500' />
                No of Staff on Fixed term contracts 
            </ListItem>
            <ListItem>
                <ListIcon as={MdSettings} color='green.500' />
                No of Staff on Sick leave 
            </ListItem>
            <ListItem>
                <ListIcon as={MdSettings} color='green.500' />
                Annual Leave Tracker 
            </ListItem>
            <ListItem>
                <ListIcon as={MdSettings} color='green.500' />
                Maternity/Paternity Leave 
            </ListItem>
            <ListItem>
                <ListIcon as={MdSettings} color='green.500' />
                Overtime Usage per sites 
            </ListItem>
            </List>
          </GridItem>

          <GridItem>
              
          </GridItem>
      </Grid>
  }