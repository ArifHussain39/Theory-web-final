
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import icon from '../assets/Play.png'
import HeroImg from '../assets/HeroImg.png'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hero() {
    return (
        <>
            <div className='text-center text-white' >

                <h1 >
                    <span style={{
                        fontSize: '90px',
                        marginTop: '50px',
                    }} > Web3Makr Redefining </span><br />How You Create
                </h1>
                <br />
                <p style={{ color: 'gray' , fontSize:'25px'}} >
                    Unlock the blockchain potential to create Web3 Applications
                </p>
                <img
                    src={icon} alt="" width={"50px"}
                    style={{

                    }} />
                <br />
                <br />

                <img src={HeroImg} alt="" />

            </div>
        </>

    )
}
