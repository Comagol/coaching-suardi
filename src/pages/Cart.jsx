import React from 'react';
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
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, total, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <VStack spacing={4} p={4} align="stretch">
      <Heading size="lg" textAlign="center">Tu Carrito</Heading>
      {cart.length > 0 ? (
        cart.map((item) => (
          <Flex key={item.id} p={4} borderWidth={1} borderRadius="lg" align="center" justify="space-between">
            <Image boxSize="80px" src={item.image} alt={item.name} borderRadius="md" />
            <VStack align="start" flex={1} ml={3}>
              <Text fontWeight="bold">{item.name}</Text>
              <Text>${item.price}</Text>
              <HStack>
                <IconButton 
                  icon={<FaMinus />} 
                  size="sm" 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                />
                <Text>{item.quantity}</Text>
                <IconButton 
                  icon={<FaPlus />} 
                  size="sm" 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                />
              </HStack>
            </VStack>
            <IconButton 
              icon={<FaTrash />} 
              size="sm" 
              onClick={() => removeFromCart(item.id)} 
            />
          </Flex>
        ))
      ) : (
        <Text textAlign="center">El carrito está vacío</Text>
      )}

      {cart.length > 0 && (
        <Box textAlign="center">
          <Text fontWeight="bold" fontSize="xl">Total: ${total}</Text>
          <Stack mt={4} spacing={3}>
            <Button width="40%" alignSelf="center" colorScheme="red" onClick={clearCart}>Vaciar Carrito</Button>
            <Button width="40%" alignSelf="center" colorScheme="green">Finalizar Compra</Button>
          </Stack>
        </Box>
      )}
    </VStack>
  );
};

export default Cart;
