const sdk = require('api')('@opensea/v2.0#9eqy6x159l3n6xcgf');

sdk.retrieveListingsTestnets(
    {
        asset_contract_address: '0x23774Ea0CA2469b569511C514dA5fEcDd64319fF',
        limit: '1',
        token_ids: ['10']

    }
)
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));