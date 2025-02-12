import { Avatar, Box, Flex, Link,Text, Image } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'


const UserPost = ({postImg,postTitle,likes,replies}) => {
  return (
    <Link to={"/devanshsaxena/post/1"}>
        
        <Flex gap={3} mb={4} py={5}>
            <Flex flexDirection={"column"} alignItems={"center"}>
                <Avatar size="md" name ="Devansh Saxena" src="/zack-avatar.png"/>
                <Box w={"1px"} height={"full"} bg={"gray.light"} my={2}></Box>
                <Box position={"relative"} w={"full"}>
                    <Avatar
                        size="xs"
                        name='John Doe'
                        src='https://bit'
                        position={"absolute"}
                        top={"-2"}
                        left="15px"
                        padding={"2px"}
                    />
                     <Avatar
                        size="xs"
                        name='Manohn Doe'
                        src='https://bit'
                        position={"absolute"}
                        top={"0"}
                        left="25px"
                        padding={"2px"}
                    />
                     <Avatar
                        size="xs"
                        name='Rag Doe'
                        src='https://bit'
                        position={"absolute"}
                        top={"2"}
                        left="15px"
                        padding={"2px"}
                    />
                </Box>
            </Flex>
            <Flex flex={1} flexDirection={"column"} gap={2}>
                <Flex justifyContent={"space-between"} w={"full"}>
                    <Flex w ={"full"} alignItems={"center"}>
                        <Text fontSize ={"sm"}  fontWeight={"bold"}>
                            Devansh Saxena
                        </Text>
                        <Image src='/verfied.png' w={4} h={4} ml={1}>
                        </Image>
                    </Flex>
                    <Flex gap={2} alignItems={"center"}>
                        <Text fontStyle ={"sm"} color={"gray.light"}>1d</Text>
                        <BsThreeDots />
                    </Flex>
                    
                </Flex>
                <Text fontSize={"sm"}>{postTitle}</Text>
                {postImg && (
                                  <Box 
                                  borderRadius={6}
                                  overflow={"hidden"}
                                  border={"1px solid"}
                                  borderColor={"gray.light"}>
                                      <Image src={postImg} w={"full"} />
                  
                                  </Box>

                )}
  
                <Flex gap={3} my={1}>
                </Flex>
            </Flex>
            <Flex gap={2} alignItems={"center"}>
                <Text color={"gray.light"} fontSize={"sm"}>{replies} replies</Text>
                <Box w={0.5}h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
                <Text color={"gray.ligth"} fontSize={"sm"}>{likes}likes</Text>
            </Flex>
        </Flex> 
        
        
    </Link>
  )
}

export default UserPost