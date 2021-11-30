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
    Select
  } from "@chakra-ui/react"

  import Header from './components/header'
  import {FormEventHandler, useState} from "react"

  export default function register(){

    const [getRole, setRole] = useState("");

    const hit = (e) => {
        setRole(e.target.value);
    }

    return <Grid 
      h="100vh"
      templateRows=".18fr 1fr"
      templateColumns="1fr 1fr 1fr"
      gap={0}
      >
          <GridItem gridColumnStart='1' gridColumnEnd='4'>
            <Header></Header>
          </GridItem>

          <GridItem/>
          <GridItem borderBottom='1px solid grey'>
           
          <h1 style={{marginTop:'30px', marginBottom:'30px', fontSize:'30px'}}>Register</h1>

          <Flex >
                <form>
                  <VStack
                      divider={<StackDivider border="none"/>}
                      spacing={4}
                      align="stretch">

                    <FormControl id='role'>
                        <FormLabel>Role</FormLabel>
                        <Select value={getRole} placeholder='Select a role' onChangeCapture={hit}>
                            <option>Doctor</option>
                            <option>Nurse</option>
                        </Select>
                    </FormControl>

                      <Box>
                          <FormControl id="email">
                          <FormLabel>Full Name</FormLabel>
                          <Input type="text" />
                          </FormControl>
                      </Box>

                      {
                        (function(){
                          if(getRole == "Doctor"){
                            return [
                              <Box>
                                 <FormControl id="email">
                                 <FormLabel>GMC Number</FormLabel>
                                 <Input type="text" />
                                 </FormControl>
                              </Box>,
                              <Box>
                                <FormControl id="email">
                                <FormLabel>Another Doctor field</FormLabel>
                                <Input type="text" />
                                </FormControl>
                            </Box>
                            ]
                          } 
                        })()
                      }

                      <Box>
                          <FormControl id="password">
                          <FormLabel>Email</FormLabel>
                          <Input type="password" />
                          </FormControl>
                      </Box>
                      <Box>
                          <FormControl id="password">
                          <FormLabel>Practice</FormLabel>
                          <Input type="password" />
                          </FormControl>
                      </Box>
                      <Box>
                          <FormControl id="password">
                          <FormLabel>Emis CDB</FormLabel>
                          <Input type="password" />
                          </FormControl>
                      </Box>
                      <Box>
                      <Button colorScheme="blue">Register</Button>
                      </Box>
                  </VStack>
 
                  </form>
                </Flex>
          </GridItem>
          <GridItem/>
      </Grid>
  }