import { deflate } from "zlib";

//detect whether we're in a production or a development environment
const production = "https://deployment-url.now.sh";
const development = "http://localhost:3000";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? production
    : development;

export default baseUrl;



