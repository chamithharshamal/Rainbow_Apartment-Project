import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
    title: 'Rainbow Apartments | Luxury Living in Rathmalana, Sri Lanka',
    description: 'Experience elevated living with panoramic views of the sea, lagoon, and Bolgoda Lake.',
    keywords: ['Rainbow Apartments', 'Rathmalana', 'Sri Lanka', 'luxury apartments', 'sea view', 'Bolgoda Lake', 'real estate'],
    authors: [{ name: 'Rainbow Apartments' }],
    openGraph: {
        title: 'Rainbow Apartments - Luxury Living in Rathmalana',
        description: 'Experience elevated living with panoramic views of the sea, lagoon, and Bolgoda Lake.',
        type: 'website',
    },
    icons: {
        icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏢</text></svg>",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
