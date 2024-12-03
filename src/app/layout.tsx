import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Javi Rodriguez - Full-stack developer",
    description: "Javi Rodriguez: Full-stack developer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;  }>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/src/app/favicon.ico" sizes="any"/>
            </head>
            <body className={``}>
                {children}
            </body>
        </html>
    );
}
