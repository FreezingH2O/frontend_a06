import Image from "next/image";
import styles from './banner.module.css';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image className= {styles.cover} 
            src='/img/cover.jpg'
            alt="cover"
            fill = {true}
            objectFit="cover"/>

<h1>where every event finds its venue</h1>
<p>Discover the perfect space for your special moments. Whether it's a wedding, conference, or private party, we help you find the ideal venue with ease.</p>


        </div>
    );
}