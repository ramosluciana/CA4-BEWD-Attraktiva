// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://ca4user1:1Re$u4ac@ca4-lyweg.mongodb.net/static?retryWrites=true&w=majority",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dwv21pssh/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};