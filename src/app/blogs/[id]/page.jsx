import React from 'react';
import ComingSoon from '@/src/components/global/ComingSoon';
import { BLOGS_SEO } from '@/src/constants/global/seo';

export async function generateMetadata({ params }) {
  const slug = params?.blog;
  const filteredData =
    BLOGS_SEO?.find((item) => item?.path === slug) || BLOGS_SEO[0];
  const metadata = {
    metadataBase: new URL('https://www.realbuyerz.com/'),
    title: filteredData?.title,
    description: filteredData?.description,
    keywords: [`Real Buyerz`, `Property Real Estate`, `Sell Buy Rent Property`],
    author: `Real Buyerz`,
    alternates: {
      canonical: `https://www.realbuyerz.com/blogs/${filteredData?.path}`,
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

  return metadata;
}

const Page = () => {
  return <ComingSoon />;
};

export default Page;
