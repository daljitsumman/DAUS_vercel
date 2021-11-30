
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

  export default function dashboard(){

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

          
          <GridItem borderBottom='1px solid grey' margin="30px">
           
          <h4 style={{marginBottom:'30px', fontSize:'20px'}}>Reactive Care</h4>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          No of sites
          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          No of users Logged
          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          - No. of  Calls
          - Avg. waiting
          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          No of online req /sites
          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          No of Pending EPS 
          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          - No of Appt avail per site & clinician types
          </Button>
          
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          No of unfiled Docman per site
          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          No of Unfiled Lab reports
          </Button>
          </GridItem>

          <GridItem margin="30px">
          <h4 style={{marginBottom:'30px', fontSize:'20px'}}>Pro-active Care</h4>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          No of Patients
nnot acheived LTC 
Targets
          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          Live Patient 
Feedback
          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          No of Care pLans 
Outstanding
          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          Referrals
-Urgent/Routine
-"2ww 



          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          Care Home Ward
Outstanding
          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          Child Imms
Adults imma
          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          Cervical Smear
          </Button>
          <Button colorScheme='teal' size='lg' className={'marginButton'}>
          Oustanding tasks
-sms, email, AccuRx
          </Button>
          </GridItem>
      </Grid>
  }