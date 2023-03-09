import React, {useState} from 'react';
import {VStack} from '@chakra-ui/layout';
import {FormControl, FormLabel} from '@chakra-ui/form-control';
import {Input, InputGroup, InputRightElement} from '@chakra-ui/input';
import { Button } from '@chakra-ui/react'



const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  

    const handleClick = () => setShow(!show);

    const submitHandler = () => {};

    return <VStack spacing='5px' color='black'>

        <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input 
        placeholer='Enter your email'
        onChange = {(e) => setEmail(e.target.value)}
        focusBorderColor = 'purple.300'
        />
        </FormControl>

        <FormControl id="password" isRequired>
        <FormLabel>password</FormLabel>
        <InputGroup>
         <Input 
        type={show ? "text" : "password"}
        placeholer='Enter your password'
        onChange = {(e) => setPassword(e.target.value)}
        focusBorderColor = 'purple.300'
        />
        <InputRightElement width='4.5rem'>
            <Button h="1.5rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
            </Button>
        </InputRightElement>
        </InputGroup>
        </FormControl>

        <Button  
            colorScheme='purple'
            width='100%'
            style={{marginTop : 15}}
            onClick = {submitHandler}>
           
        Login
        </Button>
        <Button  
            colorScheme='red'
            width='100%'
            style={{marginTop : 15}}
            onClick = {() => {
                setEmail("guest@example.com");
                setPassword("12345");
            }}>
           
        continue as guest
        </Button>
       </VStack>
}

export default Login