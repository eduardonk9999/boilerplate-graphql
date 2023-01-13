
const arrayUser = [
  {
    nome: "Ana",
    ativo: true
  },
  {
    nome: "Paula",
    ativo: true
  }
]

const userResolvers = {
  Query: {
    users: () => arrayUser,
    primeiroUser: () => arrayUser[1]
  }
}

module.exports = userResolvers