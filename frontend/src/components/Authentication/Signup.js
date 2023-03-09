import React, {useState} from 'react';
import {VStack} from '@chakra-ui/layout';
import {FormControl, FormLabel} from '@chakra-ui/form-control';
import {Input, InputGroup, InputRightElement} from '@chakra-ui/input';
import { Button } from '@chakra-ui/react'



const Signup = () => {
    const [show, setShow] = useState(false);
    const [state, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassowrd, setConfirmpassword] = useState();
    const [pic, setPic] = useState();

    const handleClick = () => setShow(!show);

    const postDetails = (pics) => {};

    const submitHandler = () => {};

    return <VStack spacing='5px' color='black'>

        <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input 
        placeholer='Enter your name'
        onChange = {(e) => setName(e.target.value)}
        focusBorderColor = 'purple.300'
        />
        </FormControl>

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

        <FormControl id="password" isRequired>
        <FormLabel>confirm password</FormLabel>
        <InputGroup>
         <Input 
        type={show ? "text" : "password"}
        placeholer='confirm your password'
        onChange = {(e) => setConfirmpassword(e.target.value)}
        focusBorderColor = 'purple.300'
        />
        <InputRightElement width='4.5rem'>
            <Button h="1.5rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
            </Button>
        </InputRightElement>
        </InputGroup>
        </FormControl>
        
        <FormControl id="pic" isRequired>
        <FormLabel>Upload your picture</FormLabel>
        <Input 
        type="file"
        p={1.5}
        accept="image/*"
        placeholer='Enter your email'
        onChange = {(e) => postDetails(e.target.files[0])}
        focusBorderColor = 'purple.300'
        />
        </FormControl>

        <Button  
            colorScheme='purple'
            width='100%'
            style={{marginTop : 15}}
            onClick = {submitHandler}>
           
        Sign Up
        </Button>
       </VStack>
}

export default Signup