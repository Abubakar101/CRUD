const Wealth = require("../models/wealth");

const wealthController = {};

wealthController.index = (req, res) => {
  Wealth.findAll()
    .then(wealths => {
      res.render("wealths/wealth-index", {
        message: "ok",
        data: wealths
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

wealthController.create = (req, res) => {
  Wealth.create({
    wealth: req.body.wealth,
    population: req.body.population,
    age: req.body.age,
    ethnicity: req.body.ethnicity,
    neighborhood: req.body.neighborhood
  })
    .then(() => {
      res.redirect("/wealths");
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

wealthController.update = (req, res) => {
  Wealth.update(
    {
      wealth: req.body.wealth,
      population: req.body.population,
      age: req.body.age,
      ethnicity: req.body.ethnicity,
      neighborhood: req.body.neighborhood,
      id: req.params.id
    },
    req.params.id
  )
    .then(() => {
      res.redirect("/wealths");
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

wealthController.delete = (req, res) => {
  Wealth.destroy(req.params.id)
    .then(() => {
      res.redirect("/wealths");
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = wealthController;
