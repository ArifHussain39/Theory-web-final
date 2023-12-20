import React from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon7 from '../assets/icon7.png';
import Section2Img from '../assets/section2Img.png';
import section2 from '../assets/sec2.png';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Section2() {
    return (

        <>
            <div>
                <div className='container' style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '50px',
                    marginBottom: '50px'
                }} >
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                    <img src={icon4} alt="" />
                    <img src={icon5} alt="" />
                    <img src={icon6} alt="" />
                    <img src={icon7} alt="" />
                </div>


            </div>
            <div className='container' >

                <div className="row">
                    <div className="col-lg-4">
                        <h1 style={{
                            fontSize: '50px'
                        }}
                        >Create
                            your own Web3 Masterpiece </h1>
                        <p
                            style={{
                                fontSize: '25px',
                                color: 'gray'
                            }}
                        >
                            Most entrepreneurs want to create their own web3 sites, unfortunately, they dont know much about creating one. Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the hassle of leaving their favorite creation tools and by simple drag and drop functionality.
                        </p>
                        <button
                            style={{
                                backgroundColor: '#6F348E',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '10px',
                                fontSize: '20px',
                                fontWeight: 'bold'
                            }}
                        >
                            Start Building
                        </button>
                    </div>
                    <div className="col-lg-8 d-flex justify-content-center ">
                        <img style={{ boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)' }} src={Section2Img} alt="" width={"500px"} />
                    </div>
                </div>
                <br /><br /><br /><br />
                <div className="row">
                    <div className="col-lg-8 d-flex justify-content-center">
                        <img src={section2} alt="" width={"500px"} />
                    </div>
                    <div className="col-lg-4">
                        <h1 style={{
                            fontSize: '50px'
                        }}
                        >Can be changed to customizable ready made web3 dapps templates.
                        </h1>
                        <div>
                            <h3 style={{ color: 'gray' }} >
                                <span style={{ color: '#18ADE4' }} >01</span>  NFT(ERC721).
                            </h3>
                            <h3 style={{ color: 'gray' }} >
                                <span style={{ color: '#18ADE4' }} >02</span>  DEFI
                            </h3>
                            <h3 style={{ color: 'gray' }} >
                                <span style={{ color: '#18ADE4' }} >03</span>  Smart Contracts
                            </h3>
                            <h3 style={{ color: 'gray' }} >
                                <span style={{ color: '#18ADE4' }} >04</span>  GameFi
                            </h3>
                            <h3 style={{ color: 'gray' }} >
                                <span style={{ color: '#18ADE4' }} >05</span>  Metaverse
                            </h3>
                        </div>
                        <br /><br />
                        <button
                            style={{
                                backgroundColor: '#6F348E',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '10px',
                                fontSize: '20px',
                                fontWeight: 'bold'
                            }}
                        >
                            Start Building
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
