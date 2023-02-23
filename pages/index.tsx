import $ from 'jquery';
import {NextPage} from "next";
import Head from "next/head";
import React, {useState} from "react";
import Navbar from "@/components/Navbar/Navbar";
import ImageSelector from "@/components/ImageSelector/ImageSelector";
import {SelectorSeparatorForSmallScreens, SelectorWrapper} from "@/styles/Index.styles";
import {SelectorItem} from "@/components/ImageSelector/ImageSelector.styles";
import {Divider} from "@mui/material";
import {BsCameraFill as CameraIcon} from "react-icons/bs";
import {BsFillCloudArrowUpFill as UploadIcon} from "react-icons/bs";


const selectionLinks = {
    'charlize': 'https://i.ytimg.com/vi/rT0wQVXV0Bg/maxresdefault.jpg',
    'brad': 'https://nextluxury.com/wp-content/uploads/brad-pitt-9.png',
    'liberty': 'https://a.cdn-hotels.com/gdcs/production158/d702/bf1b39df-2e3c-4c61-8153-b75a6e1e7f96.jpg',
    'mona_lisa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    'starry_night': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    'last_supper': 'https://th-thumbnailer.cdn-si-edu.com/qj3_MtAWcYepybIqjyQPejRwHKg=/1072x720/filters:no_upscale():focal(563x157:564x158)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/83/00/8300994b-7b19-4333-9e8d-a46eb4c2be6d/2020_jun22_lastsupper.jpg',
    'sketch': 'https://images.unsplash.com/photo-1602738328654-51ab2ae6c4ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2tldGNoJTIwYXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
}


const Index: NextPage = () => {
    const [contentSrc, setContentSrc] = useState<string | undefined>(undefined);
    const [styleSrc, setStyleSrc] = useState<string | undefined>(undefined);

    function triggerContentUpload() {
        $('#content-upload').trigger('click');
    }

    function triggerContentCamera() {
        $('#content-upload-camera').trigger('click');
    }

    function triggerStyleUpload() {
        $('#style-upload').trigger('click');
    }

    function handleContentUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files === null) return;
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setContentSrc(url);
    }

    function handleStyleUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files === null) return;
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setStyleSrc(url);
    }

    function handleContentSelection(value: string) {
        // @ts-ignore
        let src = selectionLinks[value];
        setContentSrc(src);
    }

    function handleStyleSelection(value: string) {
        // @ts-ignore
        let src = selectionLinks[value];
        setStyleSrc(src);
    }

    return (
        <div>

            <Head>
                <title>Hornbill</title>
            </Head>

            <Navbar />

            <SelectorWrapper>

                <ImageSelector name="Content" imgSrc={contentSrc} onChange={handleContentSelection}>

                    <SelectorItem value="charlize">
                        Charlize Theron
                    </SelectorItem>

                    <SelectorItem value="brad">
                        Brad Pitt
                    </SelectorItem>

                    <SelectorItem value="liberty">
                        Statue of Liberty
                    </SelectorItem>

                    <Divider />

                    <SelectorItem value="photo" onClick={triggerContentCamera}>
                        <input
                            id="content-upload-camera"
                            type="file"
                            capture="user"
                            role="button"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleContentUpload}
                        />
                        <CameraIcon />
                        Take Photo
                    </SelectorItem>

                    <SelectorItem value="upload" onClick={triggerContentUpload}>
                        <input
                            id="content-upload"
                            type="file"
                            role="button"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleContentUpload}
                        />
                        <UploadIcon />
                        Upload
                    </SelectorItem>

                </ImageSelector>

                <SelectorSeparatorForSmallScreens />

                <ImageSelector name="Style" imgSrc={styleSrc} onChange={handleStyleSelection}>

                    <SelectorItem value="mona_lisa">
                        Mona Lisa
                    </SelectorItem>

                    <SelectorItem value="starry_night">
                        The Starry Night
                    </SelectorItem>

                    <SelectorItem value="last_supper">
                        The Last Supper
                    </SelectorItem>

                    <SelectorItem value="sketch">
                        Sketch
                    </SelectorItem>

                    <Divider />

                    <SelectorItem value="upload" onClick={triggerStyleUpload}>
                        <input
                            id="style-upload"
                            type="file"
                            role="button"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleStyleUpload}
                        />
                        <UploadIcon />
                        Upload
                    </SelectorItem>

                </ImageSelector>

            </SelectorWrapper>

        </div>
    );
}


export default Index;
