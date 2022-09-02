import React from 'react';
import preloader from './../../../assets/images/preloader.gif'
import style from './Preloader.module.css'

let Preloader: React.FC = (props) => {
    return <div className={style.preloader}>
        <img className={ style.preloader } src={preloader} />
    </div>
}

export default Preloader;