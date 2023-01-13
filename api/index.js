const { ApolloServer } = require("apollo-server");
const UsersAPI = require("./user/datasource/user");
const userResolvers = require("./user/resolvers/userResolvers");
const userSchema = require('./user/schema/user.graphql')




const typeDefs = [userSchema]
const resolvers = [userResolvers]

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      UsersAPI: new UsersAPI() 
    }
  }
})

server.listen().then(({url}) => {
  console.log(`Server ON in Port ${url}`)
})