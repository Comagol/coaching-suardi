import React from 'react'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.800')}
      color={useColorModeValue('gray.200')}
      py={6}>
      <Container
      bg="gray.800"
      color="white"
        as={Stack}
        maxW={'6xl'}
        spacing={6}
        align={'center'}
        textAlign={'center'}>
        <Text fontSize={'sm'}>© 2024 Coaching Suardi. Todos los derechos reservados</Text>
        <Stack direction={'row'} spacing={4}>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube size={20} />
          </SocialButton>
          <SocialButton label={'Instagram'} target="_blank" href={'https://www.instagram.com/gabisuardicoach/'}>
            <FaInstagram size={20} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
