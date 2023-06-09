import React, {FC} from 'react';
import './screen-divisions.scss';
const ScreenDivisions:FC = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="section">Zona 1</div>
                <div className="section">Zona 2</div>
            </div>
            <div className="row">
                <div className="section">Zona 3</div>
                <div className="section">Zona 4</div>
            </div>
        </div>
    );
};

export default ScreenDivisions;
