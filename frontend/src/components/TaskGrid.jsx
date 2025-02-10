import { Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import { BASE_URL } from "../App";

const TaskGrid = ({ tasks, setTasks }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await fetch(BASE_URL + "/tasks");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }
        setTasks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTasks();
  }, [setTasks]);
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} setTasks={setTasks} />
        ))}
      </Grid>

      {isLoading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} />
        </Flex>
      )}
      {!isLoading && tasks.length === 0 && (
        <Flex justifyContent={"center"}>
          <Text fontSize={"xl"}>
            <Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
              Congrats!! 🎉
            </Text>
            Now let's move forward and keep going
          </Text>
        </Flex>
      )}
    </>
  );
};

export default TaskGrid;
