import { useState } from "react";
import { Form, Link } from "react-router-dom";
import { Box, Flex, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Spacer, Image, HStack, useBreakpointValue, Badge } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import logo from "../assets/images/Logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { cart } = useCart();

  const NavLinks = () => (
    <HStack spacing={6} display={{ base: "none", md: "flex" }}>
      <Link to="/" _hover={{ color: "gray.300" }}>Inicio</Link>
      <Link to="/services" _hover={{ color: "gray.300" }}>Servicios</Link>
      <Link to="/about" _hover={{ color: "gray.300" }}>Sobre la Coach</Link>
      <Link to="/contact" _hover={{ color: "gray.300" }}>Contacto</Link>
      <Link to="/login" _hover={{ color: "gray.300" }}>Iniciar sesión</Link>
    </HStack>
  );

  return (
    <Box bg="gray.800" color="white" px={4} py={3}>
      <Flex align="center" justify="space-between" maxW="container.xl" mx="auto">
        {/* Logo */}
        <Box fontSize="xl" fontWeight="bold">
          <Link to="/">
            <Image 
              src={logo}
              alt="Logo"
              width={{ base: "60px", md: "80px" }}
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
              borderRadius="100%"
              m="20px"
            />
          </Link>
        </Box>

        {/* Navegación para desktop */}
        <NavLinks />

        <Spacer />

        {/* Carrito de compras */}
        <Box position="relative">
          <IconButton
            as={Link}
            to="/cart"
            icon={<FiShoppingCart />}
            variant="ghost"
            colorScheme="whiteAlpha"
            aria-label="Carrito de compras"
            mr={2}
          />
          {cart.length > 0 && (
            <Badge
              position="absolute"
              top="-1"
              right="-1"
              colorScheme="red"
              borderRadius="full"
              minW="20px"
              textAlign="center"
            >
              {cart.length}
            </Badge>
          )}
        </Box>

        {/* Menú Hamburguesa solo para móvil */}
        {isMobile && (
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            colorScheme="whiteAlpha"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          />
        )}
      </Flex>

      {/* Drawer para el menú móvil */}
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
