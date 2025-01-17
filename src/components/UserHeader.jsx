import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react"

const UserHeader = () => {
  return (
    <VStack gap={4} alignItems="start">
        <Flex justifyContent ={"space-between"} w={"full"}>
           <Box>
           <Text fontSize={"2x1"}>
            Devansh Saxena
            </Text>
            <Flex gap={2} alignItems={"centre"}></Flex>

           </Box>
            <Box>
                <Avatar
                name="Devansh Saxena"
                src="/zack-avatar.png"
                />
            </Box> 
        </Flex>
    </VStack>

  )
}

export default UserHeader