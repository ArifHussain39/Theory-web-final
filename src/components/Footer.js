import React from 'react';
import logo from '../assets/BrandLogo.png';
export default function Footer() {


    return (
        <div >
            <br />
            <br />
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <img src={logo} alt="" />
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <h6 style={{ color: 'white', marginRight: '5px' }} >Web3Makr</h6>
                    <h6 style={{ color: 'gray', marginRight: '5px' }} >White paper</h6>
                    <h6 style={{ color: 'gray', marginRight: '5px' }} >Services</h6>
                    <h6 style={{ color: 'gray', marginRight: '5px' }} >Tools</h6>
                    <h6 style={{ color: 'gray', marginRight: '5px' }} >Contact Us</h6>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-lg-6">
                    <h6 style={{ color: 'gray', marginLeft: '50px' }}> Copyright 2022 © Web3Makr</h6>
                </div>
                <div className="col-lg-6 d-flex justify-content-end" >
                    <div style={{marginRight:'20px',marginTop:'-20px',}} >
                        <i class="bi bi-instagram"  style={{marginRight:'10px'}} ></i>

                        <i class="bi bi-twitter" style={{marginRight:'10px'}} ></i>
                        <i class="bi bi-facebook" style={{marginRight:'10px'}} ></i>
                    </div>

                </div>
            </div>
        </div>
    )
}
