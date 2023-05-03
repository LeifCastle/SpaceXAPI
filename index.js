const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/company")
    .then(function (response) {
      res.render("index", { company: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.json({ message: "Data not found, please try again later!" });
    });
});
app.get("/capsules", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/capsules")
    .then(function (response) {
      res.render("capsules", { capsules: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/capsules/:serial", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/capsules")
    .then(function (response) {
      response.data.forEach((capsule) => {
        if (capsule.serial === req.params.serial.toUpperCase()) {
          return res.json(capsule);
        }
      });
      res.json("Capsule not found");
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/company", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/company")
    .then(function (response) {
      res.json({ data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/cores", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/cores")
    .then(function (response) {
      res.render("cores", { cores: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/cores/:serial", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/cores")
    .then(function (response) {
      response.data.forEach((core) => {
        if (core.serial === req.params.serial) {
          return res.json(core);
        }
      });
      res.json("Core not found");
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/crew", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/crew")
    .then(function (response) {
      res.render("crew", { crew: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/crew/:name", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/crew")
    .then(function (response) {
      response.data.forEach((crewMember) => {
        const spacedName = crewMember.name.split(" ");
        const noSpacedName = spacedName[0] + spacedName[1];
        if (req.params.name === noSpacedName) {
          return res.json(crewMember);
        }
      });
      res.json("Crew Member not found");
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/dragons", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/dragons")
    .then(function (response) {
      res.render("dragons", { dragons: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/dragons/:name", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/dragons")
    .then(function (response) {
      let output = "Dragon not found";
      response.data.forEach((dragon) => {
        const spacedName = dragon.name.split(" ");
        const noSpacedName = spacedName[0] + spacedName[1];
        if (req.params.name === noSpacedName) {
          output = dragon;
        }
      });
      res.json(output);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/landpads", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/landpads")
    .then(function (response) {
      res.render("landpads", { landpads: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/landpads/:name", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/landpads")
    .then(function (response) {
      let output = "Landpad not found";
      response.data.forEach((landpad) => {
        if (req.params.name === landpad.name) {
          output = landpad;
        }
      });
      res.json(output);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/launches", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/launches")
    .then(function (response) {
      res.render("launches", { launches: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/launches/:flight", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/launches")
    .then(function (response) {
      let output = "Launch not found";
      response.data.forEach((launch) => {
        if (parseInt(req.params.flight) === launch.flight_number) {
          output = launch;
        }
        console.log(req.params.flight);
      });
      res.json(output);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/launchpads", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/launchpads")
    .then(function (response) {
      res.render("launchpads", { launchpads: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/launchpads/:region", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/launchpads")
    .then(function (response) {
      let output = ["Launchpad not found"];
      response.data.forEach((launchpad) => {
        if (removeSpace(launchpad.region) === req.params.region) {
          output.push(launchpad);
        }
      });
      if (output.length > 1) {
        output.shift();
      }
      res.json(output);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/payloads", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/payloads")
    .then(function (response) {
      res.render("payloads", { payloads: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/payloads/:name", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/payloads")
    .then(function (response) {
      let output = "Payload not found";
      response.data.forEach((payload) => {
        if (payload.name === req.params.name) {
          output = payload;
        }
      });
      res.json(output);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/roadster", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/roadster")
    .then(function (response) {
      res.json({ data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/rockets", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/rockets")
    .then(function (response) {
      res.render("rockets", { rockets: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/rockets/:name", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/rockets")
    .then(function (response) {
      let output = "Rocket not found";
      response.data.forEach((rocket) => {
        if (req.params.name === removeSpace(rocket.name)) {
          output = rocket;
        }
      });
      res.json(output);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/ships", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/ships")
    .then(function (response) {
      res.json({ data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/ships/:name", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/ships")
    .then(function (response) {
      let output = "Ship not found";
      response.data.forEach((ship) => {
        if (req.params.name === removeSpace(ship.name)) {
          output = ship;
        }
      });
      res.json(output);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/starlink", function (req, res) {
  axios
    .get("https://api.spacexdata.com/v4/starlink")
    .then(function (response) {
      res.json({ data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/search", function (req, res) {
  axios
    .get(`https://api.spacexdata.com/v4/${req.query.name}`)
    .then(function (response) {
      let result = [];
      for (let key in req.query) {
        response.data.forEach((capsule) => {
          if (capsule[key] === req.query[key]) {
            result.push(capsule);
          }
        });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.json(`Not found in ${req.query.name}`);
      }
    });
});

app.get("*", function (req, res) {
  res.json(`No data found for ${req.params[0]}`);
});

function removeSpace(string) {
  return string
    .split("")
    .map((character) => {
      if (character === " ") {
        return "_";
      } else {
        return character;
      }
    })
    .join("");
}

//PORT
const PORT = 8000;
app.listen(PORT, () => console.log("Server running on port: ", PORT));

module.exports = {
  app,
};
