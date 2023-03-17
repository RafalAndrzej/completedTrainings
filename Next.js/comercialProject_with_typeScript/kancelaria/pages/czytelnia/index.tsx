import { GetStaticProps, InferGetStaticPropsType } from 'next';

import React from 'react';

import { getPlaiceholder } from 'plaiceholder';

import AllEvents from '../../components/pageContent/pageSections/czytelnia/AllEvents';

import { czytelniaGetAll } from '../../helpers/api-util';
import { DataStructureCzytelnia } from '../../types/czytelniaTypes';

const Czytelnia = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
   return <AllEvents pageContent={props.pageContent} />;
};

export const getStaticProps: GetStaticProps<{ pageContent: DataStructureCzytelnia[] }> = async () => {
   const pageContent = await czytelniaGetAll();

   // console.log(pageContent);

   const base64 = async function (src: string) {
      const { base64 } = await getPlaiceholder(src);
      return base64;
   };

   pageContent.map((el) => {
      base64(el.imgSrc).then((src) => {
         console.log({ ...el, blurImg: src });
         const moje = { ...el, blurImg: src };
         return moje;
      });
   });

   return {
      props: { pageContent },
   };
};

export default Czytelnia;
