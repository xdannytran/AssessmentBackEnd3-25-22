const fortune = require('./db.json')

module.exports= {
    
    getFortune: (req,res) => {
        res.status(200).send(fortune)
    },

    createFortune: (req,res) => {
        res.status(200).send(fortune)
    },

    updateFortune: (req,res) => {
        res.status(200).send(fortune)
    }

}

