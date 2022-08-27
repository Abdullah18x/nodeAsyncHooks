const db = require("../models/index");
const ah = require('../hook');

const createUser = async (body) => {
    const context = ah.getRequestContext()
    console.log(context)
    return db.User.create(body)
}

module.exports = {createUser}