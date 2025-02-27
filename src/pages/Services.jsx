import React from 'react';
import {
  Box,
  Text,
  Grid,
  Image,
  Flex,
  Button,
  Container,
} from '@chakra-ui/react';
import course1 from "../assets/images/course1.png";
import course2 from "../assets/images/course2.png";
import course3 from "../assets/images/course3.png";
import course4 from "../assets/images/course4.png";

const services = [
  { id: 1, title: 'Curso 1', image: course1, description: 'Descripción breve del curso 1' },
  { id: 2, title: 'Curso 2', image: course2, description: 'Descripción breve del curso 2' },
  { id: 3, title: 'Curso 3', image: course3, description: 'Descripción breve del curso 3' },
  { id: 4, title: 'Curso 4', image: course4, description: 'Descripción breve del curso 4' },
];

const Services = () => {
  return (
    <Container maxW="container.md" py={4}>
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
        Nuestros Servicios
      </Text>
      
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
        {services.map((service) => (
          <Box key={service.id} p={4} borderWidth={1} borderRadius="lg" shadow="md">
            <Image src={service.image} alt={service.title} borderRadius="md" mb={3} />
            <Text fontSize="lg" fontWeight="bold">{service.title}</Text>
            <Text fontSize="sm" color="gray.600" mb={3}>{service.description}</Text>
            <Button colorScheme="teal" size="sm" w="full">
              Agregar Servicio
            </Button>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
