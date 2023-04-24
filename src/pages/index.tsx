import { Fragment } from 'react'

import Link from 'next/link';
import Image from 'next/image';

import TypeComponent from '../component/TypeWritter';
import BgImage from '../component/BackgroundImage';

import classes from '@/styles/Home.module.css'

// Static images
import BackgroundImage from '../assets/landing_bg.jpg';
import profPic from '../assets/pic_01.jpeg';

export default function Home() {
  return (
    <Fragment>
      <div className={`${classes.homeContainer}`}>
        <BgImage image={BackgroundImage}/>
        <div className={classes.homeContent}>
          <div className={classes.heloContent}>
            <TypeComponent />
            <h1><span>{`Howdy, I'm`}</span><br></br> {`Gokul`} <span>.</span></h1>
            <p>
              {`Passion and diligence are two traits that I believe most reflect me as an individual. I love 
                            to generate new ideas and devise feasible solutions to broadly relevant problems.`}</p>
            <p className='mt-10'>{`I enjoy embracing the lessons 
                            learned from failure, stand up and continue to grow.`}
            </p>
            <Link href="/about" className={`knowmore`}> know more <i className="fa fa-angle-double-right"></i></Link>
          </div>
          <div className={classes.heloPic}>
            <div className={classes.outlayer}>
              <Image src={profPic} alt="My profile" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
