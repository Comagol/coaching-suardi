import React, { useState } from "react";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Container,
  Text,
  useToast,
  VStack,
  Heading,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Contact = () => {
  const toast = useToast();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    asunto: "",
    servicio: "",
  });

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast({
      title: "Consulta enviada",
      description: "Nos pondremos en contacto contigo pronto.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setFormData({
      nombre: "",
      apellido: "",
      telefono: "",
      asunto: "",
      servicio: "",
    });
  };

  return (
    <ChakraProvider>
      <Container maxW="container.md" py={{ base: 8, md: 12 }}>
        <VStack spacing={{ base: 6, md: 8 }} align="stretch">
          <Box textAlign="center">
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl" }}
              color={useColorModeValue('gray.800', 'gray.200')}
              mb={2}
            >
              ¿En qué te puedo ayudar?
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              Completa el formulario y nos pondremos en contacto contigo
            </Text>
          </Box>

          <Box
            as="form"
            onSubmit={handleSubmit}
            p={{ base: 4, md: 8 }}
            bg={bgColor}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={borderColor}
            shadow="md"
          >
            <VStack spacing={{ base: 4, md: 6 }}>
              <FormControl isRequired>
                <FormLabel fontSize={{ base: "sm", md: "md" }}>Nombre:</FormLabel>
                <Input
                  name="nombre"
                  placeholder="Pedro"
                  value={formData.nombre}
                  onChange={handleChange}
                  size={{ base: "sm", md: "md" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize={{ base: "sm", md: "md" }}>Apellido:</FormLabel>
                <Input
                  name="apellido"
                  placeholder="Pérez"
                  value={formData.apellido}
                  onChange={handleChange}
                  size={{ base: "sm", md: "md" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize={{ base: "sm", md: "md" }}>Teléfono:</FormLabel>
                <Input
                  name="telefono"
                  placeholder="011 1234 5678"
                  value={formData.telefono}
                  onChange={handleChange}
                  size={{ base: "sm", md: "md" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize={{ base: "sm", md: "md" }}>Asunto:</FormLabel>
                <Textarea
                  name="asunto"
                  placeholder="Escribe tu consulta aquí..."
                  value={formData.asunto}
                  onChange={handleChange}
                  size={{ base: "sm", md: "md" }}
                  rows={4}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize={{ base: "sm", md: "md" }}>Servicio:</FormLabel>
                <Select
                  name="servicio"
                  placeholder="Selecciona un servicio"
                  icon={<ChevronDownIcon />}
                  value={formData.servicio}
                  onChange={handleChange}
                  size={{ base: "sm", md: "md" }}
                >
                  <option value="amor propio">Amor Propio</option>
                  <option value="vocacional">Vocacional</option>
                  <option value="reinventate">Reinventate</option>
                  <option value="profesional">Profesional</option>
                </Select>
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                size={{ base: "md", md: "lg" }}
                mt={4}
              >
                Enviar
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Contact;
