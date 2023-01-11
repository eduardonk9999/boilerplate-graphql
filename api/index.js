const { ApolloServer } = require("apollo-server");
const userSchema = require('./user/schema/user.graphql')


const users = [
  {
    nome: "Ana",
    ativo: true
  }
]

const typeDefs = [userSchema]
const resolvers = {}

const server = new ApolloServer({
  typeDefs,
  resolvers
})