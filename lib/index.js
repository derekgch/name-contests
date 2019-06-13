const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

// Read the query from the command line arguments
// const query = process.argv[2];
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

// The root query type is where in the data graph
// we can start asking questions
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'world'
    }
  }
});

const ncSchema = new GraphQLSchema({
  query: RootQueryType
  // mutation: ...
});


const app = require('express')();

// const ncSchema = require('../schema');
// const { graphql } = require('graphql');
const graphqlHTTP = require('express-graphql')

// Execute the query against the defined server schema
// graphql(ncSchema, query).then(result => {
//   console.log(result);
// });

app.use('/ab', graphqlHTTP({
  schema: ncSchema,
  graphiql: true,
  // validationRules:
}
))
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>{
  console.log(`The server is listening on PORT ${PORT}`)
})


