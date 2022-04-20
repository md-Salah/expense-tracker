import React, { useContext } from "react";
import { Flex, Icon, ListItem, Text, useBoolean } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const [toggle, setToggle] = useBoolean(false);

  return (
    <>
      <ListItem
        boxShadow="base"
        w="100%"
        py="2px"
        borderRight={
          transaction.amount > 0 ? "3px solid green" : "3px solid #c83d3d"
        }
        borderRadius="2px"
        onMouseEnter={setToggle.on}
        onMouseLeave={setToggle.off}
      >
        <Flex justifyContent="space-between" mx="5px">
          <Text>{transaction.text}</Text>
          <Text>
            {transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount)}
          </Text>
          <Icon
            onClick={()=> deleteTransaction(transaction.id)}
            position="absolute"
            mt="5px"
            ml="-30px"
            w='25px'
            display={toggle? 'block':'none'}
            color="#c83d3d"
            as={MdDelete}
          />
        </Flex>
      </ListItem>
    </>
  );
};

export default Transaction;
