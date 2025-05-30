import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Grid,
  Image,
  Button,
  Container,
  Heading,
  VStack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import servicesData from '../data/services.json';

const Services = () => {
  const { addToCart } = useCart();
  const toast = useToast();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Import images dynamically
    const loadImages = async () => {
      const servicesWithImages = await Promise.all(
        servicesData.services.map(async (service) => {
          const imageModule = await import(service.image.replace('/src', '..'));
          return {
            ...service,
            image: imageModule.default
          };
        })
      );
      setServices(servicesWithImages);
    };

    loadImages();
  }, []);

  const handleAddToCart = (service) => {
    addToCart(service);
    toast({
      title: "Servicio agregado",
      description: `${service.title} ha sido agregado al carrito`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
      <VStack spacing={{ base: 8, md: 12 }} align="stretch">
        <Heading
          as="h1"
          size={{ base: "xl", md: "2xl" }}
          textAlign="center"
          color={useColorModeValue('gray.800', 'gray.200')}
        >
          Nuestros Servicios
        </Heading>
        
        <Grid 
          templateColumns={{ 
            base: '1fr', 
            md: 'repeat(2, 1fr)', 
            lg: 'repeat(2, 1fr)' 
          }} 
          gap={{ base: 6, md: 8, lg: 10 }}
        >
          {services.map((service) => (
            <Box 
              key={service.id} 
              p={{ base: 4, md: 6 }}
              borderWidth="1px"
              borderRadius="lg"
              shadow="md"
              onClick={() => navigate(`/services/${service.id}`)}
              transition="transform 0.3s ease"
              _hover={{ transform: "translateY(-5px)" }}
              bg={useColorModeValue('white', 'gray.800')}
            >
              <VStack spacing={4} align="stretch">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  borderRadius="md"
                  height={{ base: "200px", md: "250px" }}
                  objectFit="cover"
                  width="100%"
                />
                <VStack align="start" spacing={3}>
                  <Heading size="md" color={useColorModeValue('gray.800', 'gray.200')}>
                    {service.title}
                  </Heading>
                  <Text 
                    fontSize={{ base: "sm", md: "md" }}
                    color={useColorModeValue('gray.600', 'gray.400')}
                    lineHeight="tall"
                  >
                    {service.description}
                  </Text>
                  <Text 
                    fontSize="lg" 
                    fontWeight="bold" 
                    color={useColorModeValue('blue.600', 'blue.300')}
                  >
                    ${service.price}
                  </Text>
                </VStack>
                <Button 
                  colorScheme="blue" 
                  size={{ base: "sm", md: "md" }}
                  width="full"
                  mt={2}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(service);
                  }}
                >
                  Agregar al Carrito
                </Button>
              </VStack>
            </Box>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Services;
