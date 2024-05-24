import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider, Stack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} p={4}>
        {/* Blog Posts Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Blog Title</Heading>
          <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec libero fermentum, a dictum magna gravida. Integer nec libero nec nulla facilisis tincidunt.</Text>
          <Divider my={4} />
          <Heading as="h2" size="xl" mb={4}>Another Blog Title</Heading>
          <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec libero fermentum, a dictum magna gravida. Integer nec libero nec nulla facilisis tincidunt.</Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.100" borderRadius="md" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>Recent Posts</Heading>
          <VStack align="start" spacing={2}>
            <Link href="#">Post 1</Link>
            <Link href="#">Post 2</Link>
            <Link href="#">Post 3</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="blue.600" color="white" p={4} mt={8}>
        <Flex justifyContent="center" alignItems="center">
          <HStack spacing={4}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;