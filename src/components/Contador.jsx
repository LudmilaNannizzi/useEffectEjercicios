import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("");

  const style = {
    backgroundColor: bgColor,
  };

  const bgChange = () => {
    if (count < 0) {
      setBgColor("red");
    } else if (count > 0) {
      setBgColor("blue");
    } else {
      setBgColor("white");
    }
  };

  useEffect(() => {
    document.title = count;
    bgChange();
  }, [count]);

  return (
    <div style={style}>
      <h1> Hiciste {count} clicks</h1>
      <div>
        <div>{count}</div>
        <Flex>
          <Button onClick={() => setCount(count + 1)}> + </Button>
          <Button onClick={() => setCount(0)}> R </Button>
          <Button onClick={() => setCount(count - 1)}> - </Button>
        </Flex>
      </div>
    </div>
  );
};
export default Contador;
