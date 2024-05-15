import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import Layout from "@/components/Layout";
import { LucidProvider } from "@/contexts/LucidContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <LucidProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </LucidProvider>
    </AppCacheProvider>
  );
}
