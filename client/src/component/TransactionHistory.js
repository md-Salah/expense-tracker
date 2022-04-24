import { Box, Heading, List, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";

import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionHistory = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  //console.log(transactions);
  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <Box w="inherit">
      <Heading size="sm" py="5px" borderBottom="1px solid grey">
        History
      </Heading>
      <List>
        <VStack mt="10px">
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <Transaction key={transaction._id} transaction={transaction} />
            ))
          ) : (
            <Box>Loading...</Box>
          )}
        </VStack>
      </List>
    </Box>
  );
};

export default TransactionHistory;
