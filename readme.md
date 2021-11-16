## make-graphql-query

The point of this library is to have a super simple way to make graphql queries that is framework agnostic.pub

- install `npm install make-graphql-query`

- create your query function

```js
const makeGraphQLQuery = require("make-graphql-query");

const graphQLQuery = makeGraphQLQuery({
  url: "xxxxxxxxxxxxxxxxxxxx.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
});
```

- make your queries or mutation, first argument takes two properties as arguments, query and variables (for graphql variables).

```js
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
```