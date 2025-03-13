import styles from './card.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard'
import Rating from '@mui/material/Rating';

export default function Card({venueName, imgSrc,description,rating ,onRatingChange}: 
    {venueName:string, imgSrc:string, description:string, rating:number,onRatingChange: (venueName: string, newRating: number) => void;}){
    return (
        <InteractiveCard contentName={venueName}>
        <div >
       
                <Image 
                src={imgSrc}
                alt={venueName} 
                width={350} 
                height={200}
                style={{ objectFit: "cover" }}  
                />
           

            <h3 className={styles.name}>{venueName}</h3>
            <Rating
                    id={`${venueName} Rating`}
                    name={`${venueName} Rating`}
                    data-testid={`${venueName} Rating`}
                    value={rating} 
                    onChange={(event, newValue) => onRatingChange(venueName, newValue ?? 0)}
                />
            
          
        </div>
        </InteractiveCard>
    );
}