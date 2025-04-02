import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const SEO = ({ title, description, path = "", image }: SEOProps) => {
  const siteUrl = "https://ajndkr.github.io";
  const defaultImage = "/social-card.png"; // You'll need to add this image

  const seoData = {
    title: `${title} | Ajinkya Indulkar`,
    description,
    url: `${siteUrl}${path}`,
    image: image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`,
  };

  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoData.image} />
    </Helmet>
  );
};

export default SEO;
