import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Filtros from "./Filtros";

const Cards = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getInfo = async () => {
      console.log("cards");
      const response = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      console.log(response, "cards");
      setData(response.data);
    };
    getInfo();
  }, []);
  console.log(data);

  return (
    <Box>
      <Filtros />
      <Flex flexWrap="wrap">
        {data &&
          data.map((result) => {
            return <Card data={result} key={result.id}></Card>;
          })}
      </Flex>
    </Box>
  );
};
export default Cards;
