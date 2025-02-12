import { Flex } from '@chakra-ui/react';
import React from 'react'

const Comment = () => {
    const[Liked,setLiked]= useState(false);

  return (
    <>
    <Flex gap={4} py={2} my={2} w={"full"}></Flex>
    </>
  )
}

export default Comment