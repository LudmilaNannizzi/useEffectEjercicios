import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";
import Countdown from "./Countdown";

const InputContador = () => {
  const [value, setValue] = useState(0);

  return (
    <Box m="50px auto" w="200px" h="100px" backgroundColor="#e9c46a">
      <Input
        type="number"
        value={value}
        placeholder="Cuenta regresiva"
        size="md"
        w="100%"
        textAlign="center"
        onChange={(e) => setValue(e.target.value)}
      />
      <Countdown value={value} />
    </Box>
  );
};
export default InputContador;
