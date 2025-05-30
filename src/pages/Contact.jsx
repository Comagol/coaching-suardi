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
import contactConfig from "../data/contact.json";

const Contact = () => {
  const toast = useToast();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // Estado del formulario
  const [formData, setFormData] = useState(
    contactConfig.formFields.reduce((acc, field) => ({
      ...acc,
      [field.name]: ""
    }), {})
  );

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast({
      title: contactConfig.successMessage.title,
      description: contactConfig.successMessage.description,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setFormData(
      contactConfig.formFields.reduce((acc, field) => ({
        ...acc,
        [field.name]: ""
      }), {})
    );
  };

  const renderFormField = (field) => {
    switch (field.type) {
      case "textarea":
        return (
          <Textarea
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            size={{ base: "sm", md: "md" }}
            rows={field.rows}
          />
        );
      case "select":
        return (
          <Select
            name={field.name}
            placeholder={field.placeholder}
            icon={<ChevronDownIcon />}
            value={formData[field.name]}
            onChange={handleChange}
            size={{ base: "sm", md: "md" }}
          >
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        );
      default:
        return (
          <Input
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            size={{ base: "sm", md: "md" }}
          />
        );
    }
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
              {contactConfig.title}
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {contactConfig.subtitle}
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
              {contactConfig.formFields.map((field) => (
                <FormControl key={field.name} isRequired={field.required}>
                  <FormLabel fontSize={{ base: "sm", md: "md" }}>
                    {field.label}
                  </FormLabel>
                  {renderFormField(field)}
                </FormControl>
              ))}

              <Button
                type="submit"
                colorScheme={contactConfig.submitButton.colorScheme}
                width="full"
                size={{ base: "md", md: "lg" }}
                mt={4}
              >
                {contactConfig.submitButton.text}
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Contact;
