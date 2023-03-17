import fs from 'fs/promises';
import path from 'path';

import { DataStructure } from '../types/globalTypes';

async function getAllData() {
   const filePath = path.join(process.cwd(), 'public/data', 'demoBase.json');
   const jsonData = await fs.readFile(filePath, 'utf-8');
   const data: DataStructure = JSON.parse(jsonData);

   return data;
}

//Czytelnia Page
export async function czytelniaGetAll() {
   const allData = await getAllData();

   return allData.czytelnia;
}
// Opłaty Page
export async function oplatyGetAll() {
   const allData = await getAllData();

   return allData.oplaty;
}
// Czynności Page
export async function czynnosciGetAll() {
   const allData = await getAllData();

   return allData.czynnosci;
}
// ONas Page
export async function oNasGetAll() {
   const allData = await getAllData();

   return allData.oNas;
}
// Rodo Page
export async function rodoGetAll() {
   const allData = await getAllData();

   return allData.rodo;
}

export async function kontaktGetAll() {
   const allData = await getAllData();

   return allData.kontakt;
}
