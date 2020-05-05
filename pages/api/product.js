{/*Products API end point */}

import Product from '../../models/Product'

export default async (req, res) => {
    const { _id } = req.query //get id from the requested data
    const product = await Product.findOne({ _id }) //Find product according to its ID
    res.status(200).json(product)
}