import React from 'react'
import { Box, Grid, Image, Text, useColorModeValue } from '@chakra-ui/react'
import coach from "../assets/images/coach.jpg"

const CoachSection = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      gap={6}
      alignItems="center"
      p={4}>
      
      {/* Imagen ocupa toda la primera columna */}
      <Image
        src={coach}
        alt="Coach"
        borderRadius="100%"
        objectFit="cover"
        objectPosition="top"
        w="100%"
        h={{ base: '300px', md: '100%' }}
      />

      {/* Información de la coach */}
      <Box textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue('gray.800', 'gray.200')}>
          Gabriela Suardi
        </Text>
        <Text fontSize="md" mt={2} color={useColorModeValue('gray.600', 'gray.400')}>
          Breve descripción sobre la coach y los talleres que ofrece. Explora el crecimiento personal y profesional a través de sesiones dinámicas y enriquecedoras.
        </Text>
      </Box>

    </Grid>
  )
}

export default CoachSection
