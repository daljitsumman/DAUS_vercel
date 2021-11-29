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
  Image
} from "@chakra-ui/react"

import {FormEventHandler, useState} from "react"
import { useRouter } from 'next/router';

export default () => {
    const [formData, setFormData] = useState({
      username: "",
      password: ""
    });

    const router = useRouter();

    function onClicked(){
      if(formData.username ==="admin" && formData.password==="admin"){
      router.push("/login")
    }
  }

return <Grid 
      h="100vh"
      templateRows="1fr"
      templateColumns=".25fr 1fr .25fr 1fr .25fr"
      gap={0}
      >
          <GridItem/>
  <GridItem>
      <Flex alignItems="center" justifyContent="center" height="100%">
          <Image src="/Daus_cover_image2.png" height="90vh"/>
      </Flex>
  </GridItem>   
  <GridItem/> 
  <GridItem>
      <Flex alignItems="center" justifyContent="center" height="100%">
              <Box p="4" padding="4em" borderRadius="3px" backgroundColor="white">
                  <form>
                  <VStack
                      divider={<StackDivider border="none"/>}
                      spacing={4}
                      align="stretch">
                      <Box>
                          <FormControl id="email">
                          <FormLabel>Email address</FormLabel>
                          <Input type="text" onChangeCapture={(e) => setFormData({...formData, username: (e.target as HTMLInputElement).value})} value={formData.username}/>
                          </FormControl>
                      </Box>
                      <Box>
                          <FormControl id="password">
                          <FormLabel>Password</FormLabel>
                          <Input type="password" onChangeCapture={(e) => setFormData({...formData, password: (e.target as HTMLInputElement).value})} />
                          </FormControl>
                      </Box>
                      <Box>
                      <Button onClick={onClicked}>Login</Button>
                      </Box>
                  </VStack>
                  </form>
              </Box>
      </Flex>
  </GridItem>    
  <GridItem/>
</Grid>

}