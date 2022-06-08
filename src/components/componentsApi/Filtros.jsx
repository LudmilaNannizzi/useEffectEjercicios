import { Box, Input, Text } from "@chakra-ui/react";

const Filtros = () => {
  return (
    <Box w="100px" mx="auto">
      <Text> Precio</Text>
      <Input type="number" h="50px" placeholder="Mínimo"></Input>
      <Input type="number" h="50px" placeholder="Máximo"></Input>
    </Box>
  );
};
export default Filtros;
