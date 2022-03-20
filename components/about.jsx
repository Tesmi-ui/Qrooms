import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import about from '..components/about';

import Footer from './Footer';
import Navbar from './Navbar';

export default function about({ children }) {
    return (
        <>
            <Head>
                <title>roominfo</title>
            </Head>
            <Box maxWidth='1280px' m='auto'>
                <header>
                    <Navbar />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    );
}