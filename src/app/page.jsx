import React from 'react';
import HomePage from '@/src/components/home/Homepage';
import { GLOBAL_SEO } from '@/src/constants/global/seo';

const pathname = '/';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = {
  metadataBase: new URL('https://www.realbuyerz.com/'),
  title: filteredData?.title,
  description: filteredData?.description,
  keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
  author: `eSpark Talent`,
  alternates: {
    canonical: `https://www.realbuyerz.com${filteredData?.path}`,
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
    },
  },
  robots: `index, follow`,
  openGraph: {
    metadataBase: new URL('https://www.realbuyerz.com/'),
    title: filteredData?.title,
    description: filteredData?.description,
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['Real Buyerz', 'Mehdi Raza'],
    siteName: `Real Buyerz: Descriptions`,
    locale: `en_US`,
    images: [
      {
        url: filteredData?.image,
        alt: filteredData?.title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    metadataBase: new URL('https://www.realbuyerz.com/'),
    title: filteredData?.title,
    description: filteredData?.description,
    siteId: `@RealBuyerz`,
    creator: `@RealBuyerz`,
    images: [`${filteredData?.image}`],
  },
};

const Page = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Page;
