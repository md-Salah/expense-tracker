import {
  Box,
  Heading,
  List,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  //console.log(transactions);

  return (
    <Box w="inherit">
      <Heading size="sm" py="5px" borderBottom="1px solid grey">
        History
      </Heading>
      <List>
        <VStack mt="10px">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </VStack>
      </List>
    </Box>
  );
};

export default TransactionHistory;
