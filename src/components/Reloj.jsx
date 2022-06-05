import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Reloj = () => {
  const [hora, setHora] = useState(new Date());

  const style = {
    backgroundColor: "#2a9d8f",
    width: "200px",
    height: "200px",
    borderRadius: "100px",
    margin: "50px auto",
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <Flex style={style} alignItems="center" justifyContent="center">
      <Text fontSize="4xl">{hora.toLocaleTimeString()}</Text>
    </Flex>
  );
};
export default Reloj;
