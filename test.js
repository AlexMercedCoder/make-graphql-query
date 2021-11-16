const makeGraphQLQuery = require("./index");

const graphQLQuery = makeGraphQLQuery({
  url: "xxxxxxxxxxxxxxxxxxxx.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
});

graphQLQuery({
  query: `{
        habits {
          id
          habit
          count
        }
      }`,
})
.then(data => console.log(data.habits))
