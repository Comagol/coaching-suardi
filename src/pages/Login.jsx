import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <Container maxW="md" py={10}>
      <Box textAlign="center" mb={6}>
        <Text fontSize="2xl" fontWeight="bold">
          Iniciar Sesión
        </Text>
      </Box>

      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Ingrese su email" />
        </FormControl>

        <FormControl>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" placeholder="Ingrese su contraseña" />
        </FormControl>

        <Button colorScheme="blue" w="full">
          Iniciar sesión
        </Button>

        <Button leftIcon={<FcGoogle />} variant="outline" w="full">
          Iniciar con Google
        </Button>
      </VStack>

      <Box textAlign="center" mt={4}>
        <Link color="blue.500">¿Olvidaste tu contraseña?</Link>
      </Box>
      <Box textAlign="center" mt={2}>
        <Text>
          ¿No tienes cuenta? <Link color="blue.500">Regístrate aquí</Link>
        </Text>
      </Box>
    </Container>
  );
};

export default Login;
