import { Avatar, Box, Flex, Link, Menu, MenuButton, Portal, Text, useToast, VStack,MenuList,MenuItem } from "@chakra-ui/react"
import { BsLinkedin } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"
 

const UserHeader = () => {
    const toast =useToast()
    const copyURL =()=>{
        const currentURL =window.location.href;
        navigator.clipboard.writeText(currentURL).then(()=>{
            console.log("URL copied to clipboard")
            toast({ description: 'Copied' })

        })
    }

  return (
    <VStack gap={4} alignItems="start">
        <Flex justifyContent ={"space-between"} w={"full"}>
           <Box>
           <Text fontSize={"2x1"} fontWeight={"bold"}>
            Devansh Saxena
            </Text>
            <Flex gap={2} alignItems={"centre"}>
                <Text fontSize={"sm"}>Devansh</Text>
                <Text fontSize={"xs"}
                bg={"gray.dark"} color={"gray.light"}
                p={1} borderRadius={"full"}>mymedicos.com</Text>
            </Flex>

           </Box>
            <Box>
                <Avatar
                name="Devansh Saxena"
                src="/zack-avatar.png"
                />
            </Box> 
        </Flex>
        <Text>CTO MyMedicos, exexutive IOS developer </Text>
        <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
                <Text color={"gray.light"}>3.2K followers</Text>
                <Box w="1" h="1" bg ={"gray.light"} borderRadius={"full"}></Box>
                <Link color={"gray.light"}>linkdin.com</Link>
            </Flex>
            <Flex>
                <Box className="icon-container">
                    <BsLinkedin size={24} cursor={"pointer"}
                    />
                </Box>
                <Box className="icon-container">
                    <Menu>
                    <MenuButton>
                    <CgMoreO size={24} cursor={"pointer"}/>
                    </MenuButton>
                    <Portal>

                    <MenuList>
                    <MenuItem bg={"gray.dark"} onClick={copyURL}>Copy Link</MenuItem>

                    </MenuList>

                    </Portal>
                    </Menu>
                </Box>

            </Flex>
        </Flex>
        <Flex w={"full"}>
            <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent ={"center"} pb="3" cursor={"pointer"}>
                <Text fontWeight={"bold"} >AskMedicos</Text>
            </Flex>
            <Flex flex={1} borderBottom={"1px solid gray"} justifyContent ={"center"} pb="3" color={"gray.light"} cursor={"pointer"}>
            <Text fontWeight={"bold"} >Replies</Text>
            </Flex>
        </Flex>

    </VStack>

  )
}

export default UserHeader