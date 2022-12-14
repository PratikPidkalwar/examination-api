const paperModel = require('../models/paperModel');

const createPapper = async (req, res) => {
    try {
        let body = req.body;
        let { question, option, answer, document } = body;

        const createData = await paperModel.create(body);

        if (!createData) {
            return res.status(400).send({ status: false, message: "Bad Request" })
        }

        return res.status(201).send({ status: true, message: "successfull", data: createData });


    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = { createPapper };