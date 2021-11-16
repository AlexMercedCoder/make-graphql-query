const axios = require("axios")

const makeGraphQLQuery = ({url, headers}) => {

    const query = async ({query, variables}) => {
        const response = await axios({
            url,
            headers: {
                "Content-Type":"application/json",
                ...headers
            },
            method: "post",
            data: JSON.stringify({query, variables})
        })

        return await response.data.data
    }

    return query

}

module.exports = makeGraphQLQuery