import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import course1 from "../assets/images/course1.png";
import course2 from "../assets/images/course2.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Vocacional', price: 55000, quantity: 1, image: course1, link: "/course/1"},
    { id: 2, name: 'Amor Propio', price: 70000, quantity: 1, image: course2, link: "/course/2" },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <VStack spacing={4} p={4} align="stretch">
      <Heading size="lg" textAlign="center">Tu Carrito</Heading>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Flex key={item.id} p={4} borderWidth={1} borderRadius="lg" align="center" justify="space-between">
            <Image boxSize="80px" src={item.image} alt={item.name} borderRadius="md" />
            <VStack align="start" flex={1} ml={3}>
              <Text fontWeight="bold">{item.name}</Text>
              <Text>${item.price}</Text>
              <HStack>
                <IconButton icon={<FaMinus />} size="sm" onClick={() => updateQuantity(item.id, -1)} />
                <Text>{item.quantity}</Text>
                <IconButton icon={<FaPlus />} size="sm" onClick={() => updateQuantity(item.id, 1)} />
              </HStack>
            </VStack>
            <IconButton icon={<FaTrash />} size="sm" onClick={() => removeItem(item.id)} />
          </Flex>
        ))
      ) : (
        <Text textAlign="center">El carrito está vacío</Text>
      )}

      {cartItems.length > 0 && (
        <Box textAlign="center">
          <Text fontWeight="bold" fontSize="xl">Total: ${totalPrice}</Text>
          <Stack mt={4} spacing={3}>
            <Button colorScheme="red" onClick={clearCart}>Vaciar Carrito</Button>
            <Button colorScheme="green">Finalizar Compra</Button>
          </Stack>
        </Box>
      )}
    </VStack>
  );
};

export default Cart;
