import { Avatar, Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react'
import Actions from '../components/Actions'

function PostPage() {
  const [liked, setLiked]=useState(false);
  return (
    <>
    <Flex>
      <Flex w={"full"} alignItems={"center"} gap={3}>
        <Avatar src='zack-avatar.png' size={"md"} name='Devansh Saxena'/>
        <Flex>
          <Text fontSize={"sm"} fontWeight={"bold"}>devanshsaxena</Text>
          <Image src='/verified.png' w="4" h={4} mi={4} />
        </Flex>
      </Flex>
      <Flex gap={4} alignItems={"center"}>
        <Text fontSize={"sm"} color={"gray.light"}>
          1d
        </Text>
        <BsThreeDots/>
      </Flex>

    </Flex>
    <Text>
      Lets talk about tech
    </Text>
    <Box
      borderRadius={6}
      overflow={"hidden"}
       border={"1px solid"}
      borderColor={"gray.light"}>
       <Image src={"/post1.png"} w={"full"} />
                  
                                  </Box>
                                  <Flex gap={3} my={3}>
                                    <Actions liked={liked} setLiked={setLiked} />

      </Flex>
      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>238 replies</Text>
        <Box w={0.5} h={0.5} borderRaius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 +(liked ? 1 :0)} likes
        </Text>
      </Flex>

     <Divider my={4}/>

     <Flex justifyContent={"space-between"}>
      <Flex gap={2} alignItems={"center"}>
        <Text fontStyle={"2x1"}>&#128075;</Text>
        <Text color={"gray.light"}> Get the app to like, reply and post</Text>
      </Flex>
      <Button>
        get
      </Button>

     </Flex>

     <Divider my={4}/>
     <Comment
     comment="Looks really good!"
     createdAt="2d"
     likes={100}
     username="johndoe"
     userAvatar=".."

     />
     <Comment
     comment="Looks really d!"
     createdAt="9d"
     likes={890}
     username="jane"
     userAvatar=".."

     />
     <Comment
     comment="Look eally good!"
     createdAt="2d"
     likes={1900}
     username="sally"
     userAvatar=".."

     />


    </>
  )
}

export default PostPage