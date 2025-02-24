import { useState } from "react";
import { Form, Link } from "react-router-dom";
import { Box, Flex, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Spacer, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../assets/images/Logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box bg="gray.800" color="white" px={4} py={3}>
      <Flex align="center" justify="space-between">
        {/* Logo */}
        <Box fontSize="xl" fontWeight="bold">
          <Link to="/">
            <Image 
              src={logo}
              alt="Logo"
              width="80px"
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
              borderRadius="100%"
            />
          </Link>
        </Box>

        <Spacer />

        {/* Carrito de compras */}
        <IconButton
          as={Link}
          to="/cart"
          icon={<FiShoppingCart />}
          variant="ghost"
          colorScheme="whiteAlpha"
          aria-label="Carrito de compras"
        />

        {/* Menú Hamburguesa */}
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          colorScheme="whiteAlpha"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        />
      </Flex>

      {/* Drawer para el menú */}
      <Drawer isOpen={isOpen} placement="left" onClose={() => setIsOpen(false)}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900" color="white" p={4}>
          <DrawerCloseButton />
          <VStack align="start" mt={10} spacing={4}>
            <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Servicios</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>Sobre la Coach</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contacto</Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>Iniciar sesión</Link>
          </VStack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
