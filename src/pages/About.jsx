import React from "react";
import {
  Box,
  Text,
  Image,
  Container,
  VStack,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import coach from "../assets/images/coach.jpg"

const About = () => {
  return (
    <Container maxW={"container.md"} py={8}>
      {/* Sección: ¿Quién soy? */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={6}
        alignItems="center"
      >
        <Image
          src={coach}
          alt="Gabriela Sauardi"
          borderRadius="lg"
          boxSize={{ base: "100%", md: "300px" }}
          objectFit="cover"
        />
        <VStack align="start" spacing={3}>
          <Heading size="lg">¿Quién soy?</Heading>
          <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")}>
            Gabriela Sauardi es una coach vocacional con amplia experiencia en
            ayudar a las personas a encontrar su camino profesional y personal.
          </Text>
        </VStack>
      </Stack>

      {/* Sección: ¿Por qué elegir mis servicios? */}
      <Box py={10}>
        <Heading size="lg" mb={4}>
          ¿Por qué elegir mis servicios?
        </Heading>
        <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")}>
          - Atención personalizada y acompañamiento en el proceso.
          <br />- Herramientas prácticas para la toma de decisiones.
          <br />- Experiencia y compromiso con cada persona.
        </Text>
      </Box>

      {/* Sección: Modalidad del servicio */}
      <Box py={10}>
        <Heading size="lg" mb={4}>
          Modalidad del servicio
        </Heading>
        <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")}>
          - Sesiones individuales o grupales.
          <br />- Modalidad online o presencial.
          <br />- Flexibilidad horaria para adaptarse a tu agenda.
        </Text>
      </Box>
    </Container>
  );
};

export default About;
