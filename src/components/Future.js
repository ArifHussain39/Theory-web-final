import React from 'react';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';
import f5 from '../assets/f5.png';
import f6 from '../assets/f6.png';

const YourComponent = () => {


    return (
        <div className='container'>
            <div className="row">
                <div className='text-center text-white'>
                    <br /><br />
                    <h1 
                    style={{fontSize:'60px'}}
                     >
                        The Future of Web3 NoCode
                    </h1>
                    <p
                    style={{fontSize:'25px'}}
                    >
                        Web3Makr allows you to incorporate top ranked blockchain platforms into your work through the drag and drop feature.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 text-white">

                    <br />
                    <h1>
                        Multichain
                    </h1>
                    <br />
                    <h1>
                        Dashboard
                    </h1>
                    <br />
                    <h1>
                        Tool
                    </h1>
                </div>
                <div className="col-lg-8 text-white">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={f1} alt="" width={'150px'} />
                            
                            <img src={f2} alt="" width={'150px'}/>

                        </div>
                        <div className="col-lg-4">
                            <img src={f3} alt="" width={'150px'} />
                            
                            <img src={f4} alt=""width={'150px'} />
                            
                          
                        </div>
                        <div className="col-lg-4">
                            <img src={f5} alt=""width={'150px'} />
                            
                            <img src={f6} alt="" width={'150px'}/>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default YourComponent;
