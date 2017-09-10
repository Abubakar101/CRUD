\c wealths_db_dev;
DROP TABLE wealths;

CREATE TABLE IF NOT EXISTS wealths (
  id SERIAL PRIMARY KEY,
  wealth VARCHAR(255),
  population VARCHAR(255),
  age VARCHAR(255),
  ethnicity VARCHAR(255),
  neighborhood VARCHAR(255)
);