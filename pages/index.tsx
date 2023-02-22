import {NextPage} from "next";
import Navbar from "@/components/Navbar/Navbar";
import ImageSelector from "@/components/ImageSelector/ImageSelector";
import {SelectorSeparatorForSmallScreens, SelectorWrapper} from "@/styles/Index.styles";
import Head from "next/head";


const Index: NextPage = () => {
    return (
        <div>

            <Head>
                <title>Hornbill</title>
            </Head>

            <Navbar />

            <SelectorWrapper>

                <ImageSelector
                    name="Content"
                    values={[ ]}

                />

                <SelectorSeparatorForSmallScreens />

                <ImageSelector
                    name="Style"
                    values={[ ]}
                />

            </SelectorWrapper>

        </div>
    );
}


export default Index;
