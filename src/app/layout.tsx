import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const openRunde = localFont({
	src: [
		{
			path: "./fonts/OpenRunde-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/OpenRunde-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/OpenRunde-Semibold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/OpenRunde-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-open-runde",
});

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Banorte | Onboarding Digital",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${openRunde.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
