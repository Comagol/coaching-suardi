import React, { useState } from "react";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Contact = () => {
  const toast = useToast();

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
    
    // Muestra un alert de Chakra UI
    toast({
      title: "Consulta enviada",
      description: "Nos pondremos en contacto contigo pronto.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Limpia el formulario
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
      <Flex direction="column" align="center" p={4} w="100%">
        <Text fontSize="2xl" mb={4} m="20px">
          ¿En qué te puedo ayudar?
        </Text>
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
          <FormControl isRequired mb={3}>
            <FormLabel>Nombre:</FormLabel>
            <Input
              name="nombre"
              placeholder="Pedro"
              value={formData.nombre}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired mb={3}>
            <FormLabel>Apellido:</FormLabel>
            <Input
              name="apellido"
              placeholder="Pérez"
              value={formData.apellido}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired mb={3}>
            <FormLabel>Teléfono:</FormLabel>
            <Input
              name="telefono"
              placeholder="011 1234 5678"
              value={formData.telefono}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired mb={3}>
            <FormLabel>Asunto:</FormLabel>
            <Textarea
              name="asunto"
              placeholder="Escribe tu consulta aquí..."
              value={formData.asunto}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired mb={3}>
            <FormLabel>Servicio:</FormLabel>
            <Select
              name="servicio"
              placeholder="Selecciona un servicio"
              icon={<ChevronDownIcon />}
              value={formData.servicio}
              onChange={handleChange}
            >
              <option value="amor propio" w="100%">Amor Propio</option>
              <option value="vocacional">Vocacional</option>
              <option value="reinventate">Reinventate</option>
              <option value="profesional">Profesional</option>
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="blue" width="100%">
            Enviar
          </Button>
        </form>
      </Flex>
    </ChakraProvider>
  );
};

export default Contact;
