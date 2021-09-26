import React from 'react';
import './Header.css';
import  Navbar  from './Navbar';

const Header = () => {
    return (
        <div className='headerSection'>
            <Navbar />
            <div className="container bg-info p-4">
                <div className="content">
                <h3>High Impact Social Work Research</h3>
                <p>Oxford University Press publishes a range of top-tier journals in the field of social work. To keep up to date with the latest research your peers are reading and citing, browse our selection of high impact social work articles below.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;