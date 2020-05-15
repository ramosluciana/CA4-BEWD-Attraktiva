
//detect whether we're in a production or a development environment
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://deployment-url.now.sh"
    : "http://localhost:3000";

export default baseUrl;
