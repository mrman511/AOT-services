import Image from "next/image";
import Services from "./ServiceList";
import bannerImage from '../../../public/images/banner-Image-purple.png';

export default function Hero({ styles }){

  return(
    <section className={ styles.hero }>
      <div className={ styles.imageContainer }>
        <Image  src={ bannerImage } fill alt="AOT services" placeholder="shimmer" />
      </div>
      
      <Services styles={ styles } />
    </section>
  );
}