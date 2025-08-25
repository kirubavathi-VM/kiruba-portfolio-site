import { Meta } from "@/libs/ui";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types/page";
import { DEFAULT_META_DATA } from "@/constants/meta-data";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const metaProps = Component.metadata || DEFAULT_META_DATA;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Meta {...metaProps} />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
