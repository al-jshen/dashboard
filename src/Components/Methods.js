const Alpaca = require('@alpacahq/alpaca-trade-api');

// alpaca.getAccount()
//     .then((acc) => {
//         console.log(acc);
//     })

// const client = alpaca.websocket;
//
// client.onConnect(() => {
//   console.log("Connected")
//   client.subscribe(['trade_updates', 'account_updates']);
// })
//
// client.onDisconnect(() => {
//   console.log("Disconnected");
// })
//
// client.onStateChange(newState => {
//   console.log(`State changed to ${newState}`);
// })
//
// client.onOrderUpdate(data => {
//   console.log(`Order updates: ${JSON.stringify(data)}`);
// })
// client.onAccountUpdate(data => {
//   console.log(`Account updates: ${JSON.stringify(data)}`);
// })
// client.onStockTrades(function(subject, data) {
//   console.log(`Stock trades: ${subject}, ${data}`);
// })
// client.onStockQuotes(function(subject, data) {
//   console.log(`Stock quotes: ${subject}, ${data}`);
// })

// client.connect()

// function getPortfolio() {
//     alpaca.getPositions()
//     .then((portfolio) => {
//         portfolio.forEach((pos) => {
//             console.log(`${pos.exchange}: ${pos.symbol} | ${pos.qty} @ ${pos.avg_entry_price} AVG | Currently ${pos.current_price} | Mkt Val: ${pos.market_value}`)
//         })
//     })
// }

async function VerifyLogin(keyID, secretKey) {

    // let stat = null;

    const alpaca = new Alpaca({
        keyId: keyID,
        secretKey: secretKey,
        paper: true
    })

    let promise = alpaca.getAccount();
    let result = await promise;
    return result
    // alpaca.getAccount()
    // .then((acc) => {
    //     // console.log('Success')
    //     stat = acc
    // })
    // .catch((err) => {
    //     // console.log(err.message)
    //     stat = null
    // })
    //
    // return stat
}

function wrapper() {
    return VerifyLogin('PKX4H4EHHXSLN6F4MVU', 'muM6EPCzCSArzTPPUaiiblpeLGMgZy3XH2kAs77T');
}

wrapper().then(console.log).catch('err')
