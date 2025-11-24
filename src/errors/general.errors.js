const notAllowedFieldsToUpdateError = (res) => {
    return res.status(500).send("One or more fields can not be edited.");
}

module.exports = {
    notAllowedFieldsToUpdateError,
};