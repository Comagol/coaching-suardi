import React from 'react';
import { Box, Image, Text, Button, VStack, HStack, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ServiceCard = ({ service }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const toast = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the cart button
    addToCart(service);
    toast({
      title: "Servicio agregado",
      description: `${service.title} ha sido agregado al carrito`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleCardClick = () => {
    navigate(`/services/${service.id}`);
  };

  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      cursor="pointer"
      onClick={handleCardClick}
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Image src={service.image} alt={service.title} />
      <VStack align="start" p={4}>
        <Text fontWeight="bold">{service.title}</Text>
        <Text>{service.description}</Text>
      </VStack>
      <HStack justify="space-between" p={4}>
        <Text>${service.price}</Text>
        <Button 
          colorScheme="blue"
          onClick={handleAddToCart}
        >
          Agregar al Carrito
        </Button>
      </HStack>
    </Box>
  );
}

export default ServiceCard;
