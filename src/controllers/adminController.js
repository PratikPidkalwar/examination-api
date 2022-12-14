const adminModel = require('../models/adminModel');

const createAdmin = async (req, res) => {
    try {
        let body = req.body;
        let { name, email, password } = body;

        const createData = await adminModel.create(body);

        if (!createData) {
            return res.status(400).send({ status: false, message: "Bad Request" })
        }

        return res.status(201).send({ status: true, message: "successfull", data: createData });


    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports={createAdmin};