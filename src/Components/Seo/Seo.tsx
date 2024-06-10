import { memo } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
function SEO({
  title,
  description,
  name,
  type,
  ogKeywords,
  metaKeywords,
  ogTitle,
  ogDescription,
}: any) {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta name="description" content={description} />
        {metaKeywords && (
          <meta name="keywords" content={metaKeywords.toString} />
        )}

        <meta property="og:type" content={type} />
        <meta property="og:title" content={ogTitle || title} />
        <meta
          property="og:description"
          content={ogDescription || description}
        />
        {ogKeywords && <meta property="og:keywords" content={ogKeywords} />}

        <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
}
export default memo(SEO);