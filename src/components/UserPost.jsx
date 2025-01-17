import { Avatar, Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'

const UserPost = () => {
  return (
    <Link to={"/devanshsaxena/post/1"}>
        
        <Flex gap={3} mb={4} py={5}>
          
        <Flex flexDirection={"column"} alignItems={"center"}>
                
                <Box w={"1px"} height={"full"} bg={"gray.light"} my={2}></Box>
                <Box position={"relative"} w={"full"}></Box>
            </Flex>
            
        </Flex> 
        
    </Link>
  )
}

export default UserPost