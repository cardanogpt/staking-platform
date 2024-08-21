import "@/styles/globals.css";
import type { AppProps } from "next/app";
/* 
Removed AppCacheProvider to fix Delayed Styling Bug
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";- 

*/
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import Layout from "@/components/Layout";
import { LucidProvider } from "@/contexts/LucidContext";
import { ErrorProvider } from "@/contexts/ErrorContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ErrorProvider>
			<LucidProvider>
				<ThemeProvider theme={theme}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</LucidProvider>
		</ErrorProvider>
	);
}
