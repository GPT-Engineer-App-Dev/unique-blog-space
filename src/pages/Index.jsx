import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#home" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
          <Link href="#about" _hover={{ textDecoration: "none", color: "blue.300" }}>About</Link>
          <Link href="#contact" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} p={4}>
        {/* Blog Posts Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Blog Posts</Heading>
          <Box mb={8}>
            <Heading as="h3" size="lg">First Blog Post</Heading>
            <Text mt={2}>This is the content of the first blog post. It's a brief introduction to the blog.</Text>
          </Box>
          <Box mb={8}>
            <Heading as="h3" size="lg">Second Blog Post</Heading>
            <Text mt={2}>This is the content of the second blog post. It provides more insights and details.</Text>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.100" p={4} ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>Recent Posts</Heading>
          <VStack align="start" spacing={2}>
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.500" }}>First Blog Post</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.500" }}>Second Blog Post</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" bg="blue.800" color="white" p={4} justifyContent="center" alignItems="center">
        <HStack spacing={4}>
          <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;