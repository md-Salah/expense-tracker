import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount)
  const balance = amounts.reduce((sum, a)=> sum += a, 0).toFixed(2);

  return (
    <Box w='inherit'>
      <Text>YOUR BALANCE</Text>
      <Text fontSize="2xl" fontWeight="bold">
        ${numberWithCommas(balance)}
      </Text>
    </Box>
  );
};

export default Balance;
