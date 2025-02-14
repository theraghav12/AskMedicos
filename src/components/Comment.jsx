import { Avatar, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import Actions from './Actions'

const Comment = ({userAvatar,createdAt,comment,username,likes}) => {
    const[Liked,setLiked]= useState(false);

  return (
    <>
    <Flex gap={4} py={2} my={4} w={"full"}>
      <Avatar src={userAvatar} size={"sm"}/>
      <Flex gap={1} w={"full"} flexDirection={"column"}>
        <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {username}
          </Text>
          <Flex gap={2} slignItems={"center"}>
            <Text fontSize={"sm"} color={"gray.light"}>{createdAt}</Text>
              <BsThreeDots/>
          </Flex>
          <Text>{comment}</Text>
          <Actions liked={Liked} setLiked={setLiked}/>
          <Text fontSize="sm" color={"gray.light"}>
            {likes +(Liked ? 1:0)} likes
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Divider my={4}/>
    </>
  )
}

export default Comment