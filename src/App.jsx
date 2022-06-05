import { Box } from "@chakra-ui/react";
import Contador from "./components/Contador";
import Form from "./components/Form";
import InputContador from "./components/InputContador";
import Reloj from "./components/Reloj";

function App() {
  return (
    <Box>
      <Contador />
      <Form />
      <Reloj />
      <InputContador />
    </Box>
  );
}

export default App;
