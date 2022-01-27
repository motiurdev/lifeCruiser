import React from 'react';
import gallary1 from '../../../images/gallary/1.jpg'
import gallary2 from '../../../images/gallary/2.jpg'
import gallary3 from '../../../images/gallary/3.jpg'
import gallary4 from '../../../images/gallary/4.jpg'
import gallary5 from '../../../images/gallary/5.jpg'
import gallary6 from '../../../images/gallary/6.jpg'
import gallary7 from '../../../images/gallary/7.jpg'
import gallary8 from '../../../images/gallary/8.jpg'

const Gallary = () => {
    return (
        <div>
            <h1 className='py-5 text-center'>Photo Gallary</h1>
            <div class="px-3">
                <div class="row">
                    <div class="col-12 col-md-3 m-0 p-0">
                        <img src={gallary1} alt="" className='img-fluid' />
                    </div>
                    <div class="col-12 col-md-3 m-0 p-0">
                        <img src={gallary2} alt="" className='img-fluid' />
                    </div>
                    <div class="col-12 col-md-3 m-0 p-0">
                        <img src={gallary3} alt="" className='img-fluid' />
                    </div>
                    <div class="col-12 col-md-3 m-0 p-0">
                        <img src={gallary4} alt="" className='img-fluid' />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-3 m-0 p-0">
                        <img src={gallary5} alt="" className='img-fluid' />
                    </div>
                    <div class="col-12 col-md-3 m-0 p-0">
                        <img src={gallary6} alt="" className='img-fluid' />
                    </div>
                    <div class="col-12 col-md-3 m-0 p-0">
                        <img src={gallary7} alt="" className='img-fluid' />
                    </div>
                    <div class="col-12 col-md-3 m-0 p-0">
                        <img src={gallary8} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;