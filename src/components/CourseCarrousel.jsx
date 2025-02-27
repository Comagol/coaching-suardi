import React from "react";
import { Box, Text, Image, Container, Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import course1 from "../assets/images/course1.png";
import course2 from "../assets/images/course2.png";
import course3 from "../assets/images/course3.png";
import course4 from "../assets/images/course4.png";

// Datos de ejemplo de cursos/workshops
const courses = [
  { id: 1, title: "Amor Propio", image: course1, link: "/course/1" },
  { id: 2, title: "Vocacional", image: course2, link: "/course/2" },
  { id: 3, title: "Reinventate", image: course3, link: "/course/3" },
  { id: 4, title: "Profesional", image: course4, link: "/course/4" },
];

const CourseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container maxW="container.md" py={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
        Workshops y Cursos
      </Text>

      <Flex align="center" justify="center" position="relative">
        {/* Botón Izquierda */}
        <IconButton
          aria-label="Anterior"
          icon={<ChevronLeftIcon />}
          position="absolute"
          left="0"
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
          onClick={prevSlide}
        />

        {/* Imagen y Contenido */}
        <Link to={courses[currentIndex].link}>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Image
              src={courses[currentIndex].image}
              alt={courses[currentIndex].title}
              objectFit="cover"
              w="100%"
              h="250px"
            />
            <Box p={4} textAlign="center">
              <Text fontWeight="bold">{courses[currentIndex].title}</Text>
            </Box>
          </Box>
        </Link>

        {/* Botón Derecha */}
        <IconButton
          aria-label="Siguiente"
          icon={<ChevronRightIcon />}
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
          onClick={nextSlide}
        />
      </Flex>
    </Container>
  );
};

export default CourseCarousel;
