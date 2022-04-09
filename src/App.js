import React from 'react';

//chakra-ui
import { Container, Flex } from '@chakra-ui/react';

//components
import Details from './Details';
import Cart from './Cart';

const App = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 10, 20]}
        direction={{ base: 'column', md: 'row' }}
      >
        {/* // 0 - 479px (base), 480px - 768px (sm), 768px++ (md) */}
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default App;
