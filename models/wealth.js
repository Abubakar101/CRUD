const db = require("../db/config");

const Wealth = {};

Wealth.findAll = () => {
  return db.query("SELECT * FROM wealths ORDER BY id ASC");
};

Wealth.create = wealth => {
  return db.one(
    `
    INSERT 
    INTO wealths
    (wealth, population, age, ethnicity, neighborhood)
    VALUES ($/wealth/, $/population/, $/age/, $/ethnicity/, $/neighborhood/)
    RETURNING *
  `,
    wealth
  );
};

Wealth.update = (wealth) => {
  return db.one(
    `
    UPDATE wealths SET
    wealth = $/wealth/,
    population = $/population/,
    age = $/age/,
    ethnicity = $/ethnicity/,
    neighborhood = $/neighborhood/
    WHERE id = $/id/
    RETURNING *
  `,
    wealth
  );
};

Wealth.destroy = id => {
  return db.none(
    `
    DELETE FROM wealths WHERE id = $1`,
    [id]
  );
};

module.exports = Wealth;
