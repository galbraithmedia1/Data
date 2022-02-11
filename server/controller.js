let globalId = 0;
const galaxys = require('./db.json')

module.exports = {
  getGalaxy: (req, res) => {
    res(200).send(galaxys);
  },

  deleteGalaxy: (req, res) => {
    let = index = galaxys.findIndex((ele) => {
      ele.id === +req.params.id;
    });
    galaxys.splice(index, 1);
    res.status(200).send(galaxys);
  },

  createGalaxy: (req, res) => {
    let { names, distance, imageURL } = req.body;
    let newGalaxy = {
      id: globalId,
      names,
      distance,
      imageURL,
    };
    galaxys.push(newGalaxy);
    res.status(200).send(galaxys);
    globalId++;
  },

  updateGalaxy: (req, res) => {
    let { id } = req.params;
    let { type } = req.body;
    let index = galaxys.findIndex((ele) => +ele.id === +id);

    if (galaxys[index].distance <= 10000 && type === "minus") {
      galaxys[index].distance = 0;

      res.status(200).send(galaxys);
    } else if (type === "plus") {
      galaxys[index].distance += 10000;
      res.status(200).send(galaxys);
    } else if (type === "minus") {
      galaxys[index].distance -= 10000;
      res.status(200).send(galaxys);
    } else {
      res.sendStatus(400).send("not working");
    }
  },
};
