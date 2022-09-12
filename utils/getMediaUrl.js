export function getStrapiUrl(path = "") {
    return `http://localhost:1337${path}`;
  }
  
export default function getStrapiMedia(media) {
    const { url } = media;
    const image = url.startsWith("/") ? getStrapiUrl(url) : url;
    return image;
  }
  