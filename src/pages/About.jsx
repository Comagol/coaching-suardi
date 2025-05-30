import React, { useEffect, useState } from "react";
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
import aboutData from "../data/about.json";

const About = () => {
  const [coachImage, setCoachImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const imageModule = await import(aboutData.coach.image.replace('/src', '..'));
      setCoachImage(imageModule.default);
    };
    loadImage();
  }, []);

  return (
    <Container maxW={"container.md"} py={8}>
      {/* Sección: ¿Quién soy? */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={6}
        alignItems="center"
      >
        <Image
          src={coachImage}
          alt={aboutData.coach.name}
          borderRadius="lg"
          boxSize={{ base: "100%", md: "300px" }}
          objectFit="cover"
        />
        <VStack align="start" spacing={3}>
          <Heading size="lg">¿Quién soy?</Heading>
          <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")}>
            {aboutData.coach.description}
          </Text>
        </VStack>
      </Stack>

      {/* Sección: ¿Por qué elegir mis servicios? */}
      <Box py={10}>
        <Heading size="lg" mb={4}>
          {aboutData.whyChooseUs.title}
        </Heading>
        <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")}>
          {aboutData.whyChooseUs.benefits.map((benefit, index) => (
            <React.Fragment key={index}>
              {benefit}
              {index < aboutData.whyChooseUs.benefits.length - 1 && <br />}
            </React.Fragment>
          ))}
        </Text>
      </Box>

      {/* Sección: Modalidad del servicio */}
      <Box py={10}>
        <Heading size="lg" mb={4}>
          {aboutData.serviceModality.title}
        </Heading>
        <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")}>
          {aboutData.serviceModality.options.map((option, index) => (
            <React.Fragment key={index}>
              {option}
              {index < aboutData.serviceModality.options.length - 1 && <br />}
            </React.Fragment>
          ))}
        </Text>
      </Box>
    </Container>
  );
};

export default About;
