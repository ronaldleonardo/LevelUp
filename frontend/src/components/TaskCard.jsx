import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Avatar,
  Button,
  Box,
  Heading,
  Text,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";
import { BASE_URL } from "../App";

const TaskCard = ({ task, setTasks }) => {
  const toast = useToast();
  const handleDeleteTask = async () => {
    try {
      const res = await fetch(BASE_URL + "/tasks/" + task.id, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      setTasks((prevTasks) => prevTasks.filter((u) => u.id !== task.id));
      toast({
        title: "Success",
        status: "success",
        description: "Task deleted successfully",
        duration: 2000,
        position: "top-center",
        isClosable: true,
      });
    } catch (error) {
      toast({
        status: "error",
        title: "An error occurred",
        description: error.message,
        duration: 4000,
        position: "top-center",
      });
    }
  };

  const handleTaskDone = async () => {
    try {
      const res = await fetch(BASE_URL + "/tasks/" + task.id, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      setTasks((prevTasks) => prevTasks.filter((u) => u.id !== task.id));
      toast({
        title: "Success",
        status: "success",
        description: "Task Done successfully",
        duration: 2000,
        position: "top-center",
        isClosable: true,
      });
    } catch (error) {
      toast({
        status: "error",
        title: "An error occurred",
        description: error.message,
        duration: 4000,
        position: "top-center",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <Flex gap={4}>
          <Flex flex={1} gap={4} alignItems={"center"}>
            {/* <Avatar src={task.imgUrl} /> */}
            <Text
              as={"span"}
              fontSize={{ base: "2xl", md: "30" }}
              fontWeight={"bold"}
              letterSpacing={"2px"}
              textTransform={"uppercase"}
              textAlign={"center"}
            >
              𖤍
            </Text>
            <Box>
              <Heading size="sm">{task.name}</Heading>
              <Text>+{task.experience} xp</Text>
            </Box>
          </Flex>
          <Flex>
            <EditModal task={task} setTasks={setTasks} />
            <IconButton
              variant="ghost"
              colorScheme="red"
              size={"sm"}
              aria-label="See menu"
              icon={<BiTrash size={20} onClick={handleDeleteTask} />}
            />
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{task.description}</Text>
        <Flex mt={4} justifyContent={"flex-end"}>
          <Button colorScheme="blue" onClick={handleTaskDone}>
            Done
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default TaskCard;
