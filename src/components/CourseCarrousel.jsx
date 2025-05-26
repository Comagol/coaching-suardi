import React from "react";
import { Box, Text, Image, Container, Flex, IconButton, Grid, useBreakpointValue } from "@chakra-ui/react";
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
  const isMobile = useBreakpointValue({ base: true, md: false });
  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? courses.length - slidesToShow : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + slidesToShow >= courses.length ? 0 : prev + 1));
  };

  const visibleCourses = courses.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
      <Text 
        fontSize={{ base: "2xl", md: "3xl" }} 
        fontWeight="bold" 
        mb={{ base: 6, md: 8 }} 
        textAlign="center">
        Workshops y Cursos
      </Text>

      <Box position="relative">
        {/* Botones de navegación */}
        <IconButton
          aria-label="Anterior"
          icon={<ChevronLeftIcon />}
          position="absolute"
          left={{ base: "-2", md: "-4" }}
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
          onClick={prevSlide}
          display={{ base: "none", md: "flex" }}
          size={{ base: "sm", md: "md" }}
        />

        {/* Grid de cursos */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: `repeat(${slidesToShow}, 1fr)`,
          }}
          gap={{ base: 4, md: 6 }}
          px={{ base: 0, md: 8 }}
        >
          {visibleCourses.map((course) => (
            <Link key={course.id} to={course.link}>
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.02)" }}
                height="100%"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  objectFit="cover"
                  width="100%"
                  height={{ base: "200px", md: "250px", lg: "300px" }}
                />
                <Box p={{ base: 3, md: 4 }} textAlign="center">
                  <Text 
                    fontSize={{ base: "lg", md: "xl" }} 
                    fontWeight="bold">
                    {course.title}
                  </Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Grid>

        <IconButton
          aria-label="Siguiente"
          icon={<ChevronRightIcon />}
          position="absolute"
          right={{ base: "-2", md: "-4" }}
          top="50%"
          transform="translateY(-50%)"
          zIndex="1"
          onClick={nextSlide}
          display={{ base: "none", md: "flex" }}
          size={{ base: "sm", md: "md" }}
        />

        {/* Indicadores de navegación para móvil */}
        {isMobile && (
          <Flex justify="center" mt={4} gap={2}>
            {courses.map((_, index) => (
              <Box
                key={index}
                w={2}
                h={2}
                borderRadius="full"
                bg={index === currentIndex ? "blue.500" : "gray.200"}
                cursor="pointer"
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </Flex>
        )}
      </Box>
    </Container>
  );
};

export default CourseCarousel;
