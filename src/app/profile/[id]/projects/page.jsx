import React from 'react';
import AgentProjectPage from '@/src/components/profile/agent-projects/AgentProjectsPage';
import { GLOBAL_SEO } from '@/src/constants/global/seo';

const pathname = '/profile';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = {
  metadataBase: new URL('https://www.realbuyerz.com/'),
  title: filteredData?.title,
  description: filteredData?.description,
  keywords: [`Real Buyers`, `Property Real Estate`, `Sell Buy Rent Property`],
  author: `Real Buyers`,
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
    authors: ['Real Buyers', 'Mehdi Raza'],
    siteName: `Real Buyers: Descriptions`,
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
    siteId: `@realbuyerz`,
    creator: `@realbuyerz`,
    images: [`${filteredData?.image}`],
  },
};

const Page = () => {
  return (
    <>
      <AgentProjectPage />
    </>
  );
};

export default Page;
