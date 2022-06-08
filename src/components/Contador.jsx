import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("");

  const style = {
    backgroundColor: bgColor,
  };

  const bgChange = () => {
    if (count < 0) {
      setBgColor("#e63946");
    } else if (count > 0) {
      setBgColor("#457b9d");
    } else {
      setBgColor("#f1faee");
    }
  };

  useEffect(() => {
    document.title = count;
    bgChange();
  }, [count]);

  return (
    <Box m="50px auto" style={style} w="300px" h="200px">
      <Text fontSize="6xl" textAlign="center">
        {count}{" "}
      </Text>
      <div>
        <Flex justifyContent="center">
          <Button onClick={() => setCount(count + 1)}> + </Button>
          <Button onClick={() => setCount(0)}> R </Button>
          <Button onClick={() => setCount(count - 1)}> - </Button>
        </Flex>
      </div>
    </Box>
  );
};
export default Contador;
