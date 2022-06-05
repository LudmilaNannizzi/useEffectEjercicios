import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Countdown = ({ value }) => {
  const [count, setCount] = useState(value);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  useEffect(() => {
    setCount(value);
  }, [value]);

  return (
    <div>
      <Text fontSize="2xl"> {count === 0 ? "Finalizo el tiempo" : count} </Text>
    </div>
  );
};
export default Countdown;
