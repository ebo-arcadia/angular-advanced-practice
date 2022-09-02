const techGadgetsList = [
    {
        brand: 'Apple',
        model: 'iWatch 8',
        ram: '16GB',
        storage: {
            type: 'SSD',
            capacity: '1000',
            storage: '1TB'
        },
        os: 'Watch OS',
        price: '$1000',
    },
    {
        brand: 'Dell',
        model: 'Surface Pro',
        ram: '32GB',
        storage: {
            type: 'Hard disk',
            capacity: '500',
            storage: '2TB'
        },
        os: 'Lunix 2',
        price: '$3500',
    },
]

// more efficient finding 
const getAppleProduct = techGadgetsList.find(gadget => gadget.brand === 'Apple');
console.log("Apple product os: ",getAppleProduct.os)
getAppleProduct.price = '$123_000_000'
console.log("Set apple watch price to rediculous high! ", getAppleProduct.price)

// shorten lengthy if statement / match | switch case
const devTechStacks = {
    frontend: 'react, angular, vue, jinja2 temple',
    backend: 'node, python, flask',
    database: 'relational, non-sql, filebase, multi, cache',
    security: 'oAuth, JTW, IAM, secret manager, SHA-256',
    development: 'CI/CD, cloud native, k8, container, docker'
}

const aDevStack = 'frontend';
const selectedDevStack = devTechStacks[aDevStack] || 'it is not a dev stack';
console.info("select a dev stack: ", selectedDevStack)

const anotherDevStack = 'DNS';
const selectedAnotherDevStack = devTechStacks[anotherDevStack] || 'it is not a dev stack';
console.info("should return not a stack: ", selectedAnotherDevStack)