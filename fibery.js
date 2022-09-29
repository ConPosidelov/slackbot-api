const Fibery = require('fibery-unofficial')
const config = require("dotenv").config().parsed

const fibery = new Fibery({
    host: process.env.FIBERY_HOST || config.FIBERY_HOST,
    token: process.env.FIBERY_TOKEN || config.FIBERY_TOKEN
})

module.exports = {
    fibery
}
