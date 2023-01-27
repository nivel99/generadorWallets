const Web3 = require('web3')
const fs = require('fs')

const _create = async () => {
    const web3 = new Web3('https://bsc-dataseed1.binance.org/')
    const { address, privateKey } = await web3.eth.accounts.create() 

    const keys = `Dirección: ${address}\nClave privada: ${privateKey}`
    fs.writeFileSync('wallet_keys.txt', keys);
    console.log('Wallet creada correctamente');
}

_create()