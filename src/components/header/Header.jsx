import React from 'react';
import './Header.css';
//========================================= Navbar declaration 
import  Navbar  from './Navbar';

const Header = () => {
    return (
        <div className='headerSection'>
            {/*===================================== Using  Navbar  */}
            <Navbar />
            {/* ====================================Header Content  */}
            <div className="container bg-info p-4">
                <div className="content">
                <h3>High Impact Social Worker selection</h3>
                <p>Oxford University Press publishes a range of top-tier journals in the field of social work. To keep up to date with the latest research your peers are reading and citing, browse our selection of high impact social worker articles below.</p>
                <h4 className='fw-bolder'>Total Budget : 80000 Dollar</h4>
            </div>
            </div>
        </div>
    );
};

export default Header;