import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Kaique Feng</Text>
          <Text color="gray.300" fontSize="small">kaiquefeng1@gmail.com</Text>
        </Box>
      ) }

      <Avatar size="md" name="Kaique Feng"  src="https://github.com/kaiquemaia.png" />
    </Flex>
  )
}