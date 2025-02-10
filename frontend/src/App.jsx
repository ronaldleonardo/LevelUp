import { Button, Container, Stack, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TaskGrid from "./components/TaskGrid";
import { useState, useEffect } from "react";

export const BASE_URL = "http://127.0.0.1:5000/api";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <Stack minH={"100vh"}>
      <Navbar setTasks={setTasks} />
      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text
            as={"span"}
            bgGradient={"linear(to-r, gold,orange.400, red.500, gold)"}
            bgClip="text"
          >
            𓆩✧𓆪To Do𓆩✧𓆪
          </Text>
        </Text>

        <TaskGrid tasks={tasks} setTasks={setTasks} />
      </Container>
    </Stack>
  );
}

export default App;
