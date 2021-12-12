import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Background from '../components/background';
import { theme } from '../theme/default';
import 'focus-visible/dist/focus-visible';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps}/>
      <Background/>
    </ChakraProvider>
  );
};

export default MyApp;
