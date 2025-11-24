const notFoundError = (res) => {
    return res.status(404).send('Data not found.')
}

const objectIdCastError = (res) => {
    return res.status(500).send('An error occurred trying recover this data from DB.')
}

module.exports = {
    notFoundError,
    objectIdCastError,
};