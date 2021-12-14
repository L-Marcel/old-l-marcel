import { AppProps } from 'next/app';
import BackgroundImage from '../components/BackgroundImage';
import { theme } from '../theme/default';
import 'focus-visible/dist/focus-visible';
import { AllProviders } from '../contexts/AllProviders';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AllProviders theme={theme}>
      <Component {...pageProps}/>
      <BackgroundImage/>
    </AllProviders>
  );
};

export default MyApp;
