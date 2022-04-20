import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  // console.log(transactions)

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount >= 0)
    .reduce((sum, a) => (sum += a), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((amount) => amount < 0).reduce((sum, a) => (sum += a), 0) *
    -1
  ).toFixed(2);

  return (
    <HStack
      w="inherit"
      boxShadow="md"
      textAlign="center"
      py="10px"
      justifyContent="space-around"
    >
      <Box>
        <Text>INCOME</Text>
        <Text color="green">${income}</Text>
      </Box>
      {/* <Divider orientation='vertical' /> */}
      <Box>
        <Text>EXPENSE</Text>
        <Text color="red.600">${expense}</Text>
      </Box>
    </HStack>
  );
};

export default IncomeExpense;
