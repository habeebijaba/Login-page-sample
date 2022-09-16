var db = require('../config/connection')
const bcrypt = require('bcrypt')

module.exports = {
    signup: (data) => {
        return new Promise(async (resolve, reject) => {
            data.password = await bcrypt.hash(data.password, 10)
            db.get().collection('user').insertOne(data).then((req, res) => {
                resolve(data)
            })
        })
    },
    login: (data) => {
        return new Promise(async (resolve, reject) => {
            let loginStatus = false
            let response = {}
            let user = await db.get().collection('user').findOne({ email: data.email })
            if (user) {
                bcrypt.compare(data.password, user.password).then((status) => {
                    if (status) {
                        console.log("success");
                        response.user = user
                        response.status = true
                        resolve(response)
                    } else {
                        console.log("login failed");
                        resolve({ status: false })
                    }
                })
            } else {
                console.log("failed");
                resolve({ status: false })

            }
        })
    }
}