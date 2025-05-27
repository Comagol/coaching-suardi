import React from 'react'
import { Box, Grid, Image, Text, useColorModeValue, Container, VStack } from '@chakra-ui/react'
import coach from "../assets/images/coach.jpg"

const CoachSection = () => {
  return (
    <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={{ base: 8, md: 12 }}
        alignItems="center">
        
        <Box position="relative" width="100%" height={{ base: '300px', md: '400px', lg: '500px' }}>
          <Image
            src={coach}
            alt="Coach"
            borderRadius="100%"
            objectFit="cover"
            objectPosition="top"
            width="100%"
            height="100%"
            maxW={{ base: '250px', md: '350px', lg: '450px' }}
            mx="auto"
          />
        </Box>

        <VStack 
          spacing={{ base: 4, md: 6 }} 
          align={{ base: 'center', md: 'start' }}
          textAlign={{ base: 'center', md: 'left' }}
          px={{ base: 4, md: 0 }}>
          <Text 
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} 
            fontWeight="bold" 
            color={useColorModeValue('gray.800', 'gray.200')}>
            Gabriela Suardi
          </Text>
          <Text 
            fontSize={{ base: 'md', md: 'lg' }} 
            color={useColorModeValue('gray.600', 'gray.400')}
            lineHeight="tall">
            Breve descripción sobre la coach y los talleres que ofrece. Explora el crecimiento personal y profesional a través de sesiones dinámicas y enriquecedoras.
          </Text>
        </VStack>
      </Grid>
    </Container>
  )
}

export default CoachSection
