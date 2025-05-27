import React from 'react';
import { Box, Image, Text, Button, VStack, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Image src={service.image} alt={service.title} />
      <VStack align="start" p={4}>
        <Text fontWeight="bold">{service.title}</Text>
        <Text>{service.description}</Text>
      </VStack>
      <HStack justify="space-between" p={4}>
        <Text>${service.price}</Text>
        <Button as={Link} to={service.link} colorScheme="blue">
          Comprar
        </Button>
      </HStack>
    </Box>
  );
}

export default ServiceCard;
