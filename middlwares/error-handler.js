const notFound = (req,res) => res.status(404).send('Rout dosnt exist stupid 7abacha')
const errorHandler = (req,res) => res.status(401).send('error mother fucker')


module.exports = { notFound , errorHandler }