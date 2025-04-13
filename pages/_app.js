import Layout from "../src/app/layout";
import { ReduxProvider } from "../src/app/provider";
import { wrapper } from "../src/app/store/index";

export default function MyApp({ Component, pageProps }) {
    const { store, props } = wrapper.useWrappedStore(pageProps);
    return (
        <ReduxProvider store={store}> 
            <Layout>
                <Component {...props} />
            </Layout>
        </ReduxProvider>
    )
}