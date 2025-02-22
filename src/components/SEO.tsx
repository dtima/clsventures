
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

const SEO = ({ title, description, canonical, image = "/og-image.png" }: SEOProps) => {
  const siteName = "CLS Ventures";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SEO;
