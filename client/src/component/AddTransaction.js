import { Box, Button, FormControl, Heading, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    //console.log(newTransaction);
  };

  return (
    <Box w="inherit">
      <Heading size="sm" py="5px" borderBottom="1px solid grey">
        Add new transaction
      </Heading>

      <form onSubmit={handleSubmit}>
        <FormControl mt="10px">
          <label htmlFor="name">Text</label>
          <Input
            size="sm"
            bg="white"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </FormControl>

        <FormControl mt="10px">
          <label htmlFor="amount">Amount</label>
          <Input
            size="sm"
            bg="white"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </FormControl>

        <Button
          w="100%"
          mt="10px"
          colorScheme="telegram"
          type='submit'
        >
          Add transaction
        </Button>
      </form>
    </Box>
  );
};

export default AddTransaction;
