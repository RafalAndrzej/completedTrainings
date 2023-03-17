import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
   return (
      <Fragment>
         <Head>
            <title>Max Blog /</title>
            <meta
               name="description"
               content="I post about programing and web development."
            />
         </Head>
         <Hero />
         <FeaturedPosts posts={props.posts} />
      </Fragment>
   );
}

export function getStaticProps() {
   const featuredPosts = getFeaturedPosts();

   return {
      props: {
         posts: featuredPosts,
      },
      // revalidate: 60, nie ma potrzeby bo to ja robię blog a nie osoby poza kodem
   };
}

export default HomePage;
