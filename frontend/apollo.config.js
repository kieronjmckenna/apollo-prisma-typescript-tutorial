module.exports = {
  client: {
    includes: ['./src/client/**/**'],
    service: {
      name: "apollo-prisma-typescript-tutorial",
      url: "http://localhost:4000/",
      skipSSLValidation: true 
    }
  }  
};