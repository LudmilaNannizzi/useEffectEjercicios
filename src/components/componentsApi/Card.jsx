import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Card = ({ data }) => {
  return (
    <Box
      w="250px"
      h="350px"
      m="50px"
      p="10px"
      boxShadow="base"
      borderRadius="20"
      alignItems="center"
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      <Image src={data.image_link} />
      <Heading size="md" textAlign="center">
        {data.name}
      </Heading>
      <Text>$ {data.price}</Text>
      <Text>{data.brand}</Text>
      <Flex alignItems="center">
        {data.rating && (
          <>
            <StarIcon m="5px" /> {data.rating}
          </>
        )}
      </Flex>
      <Text>{data.product_type}</Text>
    </Box>
  );
};
export default Card;
