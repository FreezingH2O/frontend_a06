import Image from "next/image";
import styles from './topMenu.module.css'
import TopMenuItem from "./TopMenuItem";

export default function TopMenu(){
    return (
        <div className={styles.topMenu}>
            <TopMenuItem title="Booking" pageRef="/booking"/>
            <Image className={styles.logo}
                src = '/img/logo.png'
                alt = "logo"
                width= {0}
                height = {0}
                sizes="100vh"
            />
        </div>
    );
}