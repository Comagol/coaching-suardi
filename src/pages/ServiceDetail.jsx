import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Image,
  Text,
  Button,
  VStack,
  Heading,
  useToast,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useCart } from '../context/CartContext';
import servicesData from '../data/services.json';

const ServiceDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const toast = useToast();
  const [service, setService] = useState(null);
  const [serviceImage, setServiceImage] = useState(null);

  useEffect(() => {
    // Find the service by id
    const foundService = servicesData.services.find(s => s.id === parseInt(id));
    if (foundService) {
      setService(foundService);
      // Load the image dynamically
      const loadImage = async () => {
        const imageModule = await import(foundService.image.replace('/src', '..'));
        setServiceImage(imageModule.default);
      };
      loadImage();
    }
  }, [id]);

  if (!service || !serviceImage) {
    return (
      <Container maxW="container.xl" py={8}>
        <Text>Cargando...</Text>
      </Container>
    );
  }

  const handleAddToCart = () => {
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
    <Container maxW="container.xl" py={8}>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
        <GridItem>
          <Image
            src={serviceImage}
            alt={service.title}
            borderRadius="lg"
            width="100%"
            height="auto"
            objectFit="cover"
          />
        </GridItem>
        <GridItem>
          <VStack align="stretch" spacing={6}>
            <Heading size="xl">{service.title}</Heading>
            <Text fontSize="2xl" fontWeight="bold" color="blue.600">
              ${service.price}
            </Text>
            <Text>{service.longDescription}</Text>
            
            <Box>
              <Heading size="md" mb={4}>Duración</Heading>
              <Text>{service.duration}</Text>
            </Box>

            <Box>
              <Heading size="md" mb={4}>Incluye</Heading>
              <VStack align="stretch" spacing={2}>
                {service.includes.map((item, index) => (
                  <Text key={index}>• {item}</Text>
                ))}
              </VStack>
            </Box>

            <Button
              size="lg"
              colorScheme="blue"
              onClick={handleAddToCart}
            >
              Agregar al Carrito
            </Button>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ServiceDetail; 