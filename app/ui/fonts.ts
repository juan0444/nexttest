// next/font/google 모듈에서 Inter 글꼴을 가져와서 inter로 export

import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});