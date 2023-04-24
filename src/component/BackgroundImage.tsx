import { Fragment } from "react";
import Image from 'next/image'

import classes from '../styles/common.module.css';

const BackgroundImageComp = ({image}:any) => {
    return (
        <Fragment>
            <span className={classes.imageAfter}>
                <Image className={classes.staticBackground} src={image} alt={'Home page background '}/>
            </span>
        </Fragment>
    );
};

export default BackgroundImageComp;