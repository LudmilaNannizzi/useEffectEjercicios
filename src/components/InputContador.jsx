import { Input } from "@chakra-ui/react";
import { useState } from "react";
import Countdown from "./Countdown";

const InputContador = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Input
        type="number"
        value={value}
        placeholder="Cuenta regresiva"
        size="md"
        onChange={(e) => setValue(e.target.value)}
      />
      <Countdown value={value} />
    </div>
  );
};
export default InputContador;
