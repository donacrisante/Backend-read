import dbConnect from "../../../db/connect";
import Product from "../../../db/model/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const product = await Product.findById(request.query.id).populate("reviews");

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(product);
}
}
