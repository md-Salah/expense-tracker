import React from "react";
import { VStack } from "@chakra-ui/react";
import Header from "../../component/Header";
import Balance from "../../component/Balance";
import IncomeExpense from "../../component/IncomeExpense";
import TransactionHistory from "../../component/TransactionHistory";
import AddTransaction from "../../component/AddTransaction";

const Home = () => {
  return (
    <VStack mx="auto" my="30px" w="300px" gap='7'>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionHistory />
      <AddTransaction />
    </VStack>
  );
};

export default Home;
