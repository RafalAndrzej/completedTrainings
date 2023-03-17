import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
   return (
      <section className={classes.hero}>
         <div className={classes.image}>
            <Image
               src="/images/site/gp-3-89.svg"
               alt="An image showing Me"
               width={300}
               height={300}
            />
         </div>
         <h1>Hi, I am Max</h1>
         <p>
            I blog about web development - especially frondend frameworks like
            Angular or React.
         </p>
      </section>
   );
}

export default Hero;
