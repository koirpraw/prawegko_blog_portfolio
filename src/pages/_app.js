import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes';

import RootLayout from '@/components/layout';



function MyApp({ Component, pageProps }) {
  return (

    <ThemeProvider attribute="class">
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>

    </ThemeProvider>




  );
}

export default MyApp;