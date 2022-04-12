const jwt = require('../lib/jwt')

function auth(req, res, next) {
    try {
        const {authorization: token} = req.headers
        console.log('token: ', token)

        const isValidToken = jwt.verify(token)

        
        console.log('isValidToken: ', isValidToken)
        
        if(!isValidToken) throw new Error('Not authorized D:')
        req.userCurrent = isValidToken.id
        next()
    } catch (error) {
        res.status(401)
        res.json({
            success: false,
            message: 'Not authorized',
            error: error.message
        })
    }
}

module.exports = auth