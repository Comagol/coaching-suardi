import React from 'react';
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
import course1 from "../assets/images/course1.png";

const ServiceDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const toast = useToast(); 

  // Map of service images
  const serviceImages = {
    1: course1
  };

  // This would typically come from an API or database
  const service = {
    id: parseInt(id),
    title: "Amor Propio",
    image: serviceImages[parseInt(id)] || course1, // Fallback to course1 if id not found
    description: "Descubre y fortalece tu amor propio a través de técnicas y ejercicios prácticos que te ayudarán a desarrollar una autoestima saludable.",
    price: 70000,
    longDescription: "Este servicio está diseñado para ayudarte a desarrollar una relación más saludable contigo mismo. A través de sesiones personalizadas, aprenderás técnicas efectivas para mejorar tu autoestima, establecer límites saludables y cultivar una mentalidad positiva. El programa incluye ejercicios prácticos, meditaciones guiadas y herramientas para el día a día que te ayudarán a transformar tu relación contigo mismo.",
    duration: "8 semanas",
    includes: [
      "8 sesiones individuales",
      "Material de trabajo",
      "Ejercicios prácticos",
      "Soporte por WhatsApp"
    ]
  };

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
            src={service.image}
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