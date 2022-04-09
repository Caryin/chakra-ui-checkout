import React from 'react';
import MickeyBB from './images/mickeybearbrick.jpg';

//chakra-ui
import {
  VStack,
  HStack,
  Stack,
  Heading,
  Text,
  Button,
  AspectRatio,
  Image,
  Divider,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading alignSelf="flex-start" size="2xl">
          Your cart
        </Heading>
        <Text>
          If the price is too hard on your eyes,{' '}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>

      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src={MickeyBB} alt="mickey bearbrick" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="stretch">
            <Heading size="md">Mickey Bearbrick</Heading>
            <Text color={secondaryTextColor}>Mickeybb Pink 2280</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $400.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full" py={2}>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$400.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$25.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes</Text>
          <Heading size="sm">$24.00</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full" py={2}>
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$449.00</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
