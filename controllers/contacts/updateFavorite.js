const Contact = require("../../models/contact");
const HttpError = require("../../utils/HttpError");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!req.body) {
    return res.status(400).json({ message: "missing field favorite" });
  }
  if (!data) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(data);
};

module.exports = updateFavorite;
