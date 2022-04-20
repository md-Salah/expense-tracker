import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((sum, a)=> sum += a, 0);

  return (
    <Box w='inherit'>
      <Text>YOUR BALANCE</Text>
      <Text fontSize="2xl" fontWeight="bold">
        ${total}
      </Text>
    </Box>
  );
};

export default Balance;
