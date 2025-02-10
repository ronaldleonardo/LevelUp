import {
  Button,
  Container,
  Flex,
  Box,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateTaskModal from "./CreateTaskModal";

const Navbar = ({ setTasks }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"900px"}>
      <Box
        px={4}
        my={4}
        borderRadius={5}
        bg={useColorModeValue("gray.200", "gray.600")}
      >
        {/* Left side */}
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            {/* <img src="/levelup.png" alt="levelup logo" width={40} height={40} /> */}
            <Text
              as={"span"}
              fontSize={{ base: "3xl", md: "30" }}
              fontWeight={"bold"}
              letterSpacing={"2px"}
              textTransform={"uppercase"}
              textAlign={"center"}
              mb={2}
            >
              𓆰𓆪
            </Text>
          </Flex>
          {/* Right side */}
          <Flex gap={3} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              fontWeight={500}
              display={{ base: "none", md: "block" }}
            >
              LevelUp
            </Text>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <IoMoon size={20} />
              ) : (
                <LuSun size={20} />
              )}
            </Button>
            <CreateTaskModal setTasks={setTasks} />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
