import React from 'react'
import { Container, Box, Text, Tab, Tabs,  TabList, TabPanel, TabPanels} from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import {  ChatIcon } from '@chakra-ui/icons';

const homepage = () => {
  return (
  <Container maxW="xl" centerContent  opacity='0.85'>
      <Box as='button' 
        w="50%" 
        color='white' 
        p={3}
        m="40px 0 15px 0"
         opacity='100'
      >
        <Text fontSize="4xl" fontFamily="Work sans" >
          <ChatIcon p={1}/>
          Chatty
        </Text>
      </Box>
      <Box bg="white" w="80%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded'>
  <TabList mb='1em'>
    <Tab width='50%' _selected={{bg: "purple.100"}}>Login</Tab>
    <Tab width='50%' _selected={{bg: "purple.100"}}>Sign up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
        <Login/>
    </TabPanel>
    <TabPanel>
        <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
      </Container>
  )
}

export default homepage
