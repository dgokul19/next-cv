import { Fragment } from "react";

import Link from 'next/link';
import Image from 'next/image';

import classes from '../styles/common.module.css';

import LogoGokul from '@/assets/my_logo.jpeg';

export default function Navbar() {
    return (
        <Fragment>
            <div className={classes.navbarContainer}>
                <ul>
                   <li><Link href={`about`}>About</Link></li> 
                   <li><Link href={`resume`}>Resume</Link></li> 
                   <li className={classes.logo_li}><Link href={`/`}><Image src={LogoGokul} alt={`Gokul Logo`}/></Link></li> 
                   <li><Link href={`Portfolio`}>Portfolio</Link></li> 
                   <li><Link href={`blog`}>Blog</Link></li> 
                </ul>
            </div>
        </Fragment>
    );

};