import React, { Fragment } from "react";

import Head from 'next/head'


// Components
import Navbar from './Navbar';

export default function LayoutComponent({ children }: React.PropsWithChildren<{}>) {
    return (
        <Fragment>

            <Head>
                <title>Gokulan Portfolio / CV</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <div className="contentWrapper">
                <Navbar />
                {children}
            </div>
        </Fragment>
    );
};