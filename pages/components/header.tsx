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
  } from "@chakra-ui/react"
  import Link from 'next/link'

  import { useRouter } from 'next/router';


export default function Header(props){
    const { asPath, pathname } = useRouter();

    return <Flex justifyContent="space-between" flexDirection="row" alignItems="center">
    <Link href="/login">
        <h1 style={{fontSize:"30px", margin:"30px"}}>DAUS</h1>    
    </Link>
    <Box marginRight='100px'>
    <Link href="/dashboard">
        <Button colorScheme='teal' variant={asPath == '/dashboard' ? "solid" : ""}>Dashboard</Button>
    </Link>
    <Link href="/patientcare">
        <Button colorScheme='teal' variant={asPath == '/patientcare' ? "solid" : ""}>Patient Care</Button>
    </Link>
    <Link href="/staff">
        <Button variant={asPath == '/staff' ? "solid" : ""} colorScheme='teal'>Staff</Button>
    </Link>
    <Link href="/rota">
        <Button colorScheme='teal' variant={asPath == '/rota' ? "solid" : ""}>Rota</Button>
    </Link>
    <Link href="/reporting">
        <Button colorScheme='teal' variant={asPath == '/reporting' ? "solid" : ""}>Reporting</Button>
    </Link>
    <Link href="/governance">
        <Button colorScheme='teal' variant={asPath == '/Governance' ? "solid" : ""}>Governance</Button>
    </Link>

    </Box>
</Flex>   
}