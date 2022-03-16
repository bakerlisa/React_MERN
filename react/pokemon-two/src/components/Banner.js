import React from 'react';
import styles from './css/BannerStyles.module.css';
import ball from './img/pokemon-ball.png';

const Banner = props =>{
    return(
        <div className={styles.banner}>
            <img src={ball} alt="Pokemon ball" className={styles.ball}/>
            <h1>Axios Pokemon API</h1>
            <p>Generate a list of the most clever beasts in all the land</p>
        </div>
    );
}

export default Banner;