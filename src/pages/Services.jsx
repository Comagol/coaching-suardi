import React from 'react';
import {
  Box,
  Text,
  Grid,
  Image,
  Flex,
  Button,
  Container,
  Heading,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import course1 from "../assets/images/course1.png";
import course2 from "../assets/images/course2.png";
import course3 from "../assets/images/course3.png";
import course4 from "../assets/images/course4.png";

const services = [
  { 
    id: 1, 
    title: 'Amor Propio', 
    image: course1, 
    description: 'Descubre y fortalece tu amor propio a través de técnicas y ejercicios prácticos que te ayudarán a desarrollar una autoestima saludable.' 
  },
  { 
    id: 2, 
    title: 'Vocacional', 
    image: course2, 
    description: 'Encuentra tu vocación y desarrolla tu potencial profesional con herramientas y guía personalizada para tu crecimiento.' 
  },
  { 
    id: 3, 
    title: 'Reinventate', 
    image: course3, 
    description: 'Transforma tu vida y alcanza tus objetivos con estrategias efectivas para el cambio personal y profesional.' 
  },
  { 
    id: 4, 
    title: 'Profesional', 
    image: course4, 
    description: 'Potencia tu carrera profesional con técnicas de coaching especializadas en desarrollo laboral y liderazgo.' 
  },
];

const Services = () => {
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
                </VStack>
                <Button 
                  colorScheme="blue" 
                  size={{ base: "sm", md: "md" }}
                  width="full"
                  mt={2}
                >
                  Agregar Servicio
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
