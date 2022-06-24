let { flights } = require('../models/Flight')

let lastId = 100

exports.getAllFlights = (req, res) => {
    return res.status(200).json(flights)
}

exports.getOneFlight = (req, res) => {
    const id = Number(req.params.id);
    const flight = flights.find(flight => flight.id === id)
    if (flight) {
        res.status(200).json(flight)
    } else {
        res.status(404).json({
            error: "Flight does not exist"
        })

    }
}

exports.addNewFlight = (req, res) => {
    lastId++
    if (!req.body.title) {
        return res.status(400).json({
            error: 'Missing flight name!'
        })
    }
    const newFlight = {
        id: lastId,
        title: req.body.title,
        time: req.body.time || new Date().toLocaleTimeString(),
        price: req.body.price,
        date: req.body.date || new Date().toLocaleDateString(),
    };
    flights.push(newFlight);

    res.json(newFlight)


}

exports.updateFlight = (req, res) => {
    const id = Number(req.params.id);
    const flight = flights.find(flight => flight.id === id)

    flight.title = req.body.title
    flight.price = req.body.price
    flight.time = req.body.time || new Date().toLocaleTimeString()
    flight.date = req.body.date || new Date().toLocaleTimeString()

    res.json(flight)
}

exports.deleteFlight = (req, res) => {
    const id = Number(req.params.id);
    const flight = flights.find(flight => flight.id === id)

    if (!flight) {
        return res.status(500).json({
            error: 'Flight doesnt exist'
        })
    }
    flights = flights.filter((flight) => flight.id !== id)
    res.status(200).json({
        result: `${flight.title} deleted`
    })
}

