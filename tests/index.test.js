const request = require("supertest");
const { app } = require("../index.js");

describe("Route: Capsules", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
describe("Route: Capsules/Serial", function () {
  it("should have a truthy value", function () {
    app.get("");
    axios
      .get("https://api.spacexdata.com/v4/capsules/C101")
      .then(function (req, res) {
        let test = req.params.serial;
      })
      .expect(response.data.serial)
      .toBe(truthy);
  });
});
describe("Route: Company", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/company").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/company")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
describe("Route: Cores", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/cores").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/cores")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
describe("Route: Crew", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/crew").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/crew")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
describe("Route: Dragons", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/dragons").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/dragons")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
describe("Route: Landpads", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/landpads").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/landpads")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
describe("Route: Launches", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/launches").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/launches")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
describe("Route: Launchpads", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/launchpads").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/launchpads")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
describe("Route: Payloads", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/payloads").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/payloads")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
describe("Route: Roadster", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/roadster").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/roadster")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
describe("Route: Rockets", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/rockets").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/rockets")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
describe("Route: Ships", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/ships").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/ships")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
describe("Route: Starlink", function () {
  it("should return a 200 page", function (done) {
    request(app).get("/starlink").expect(200, done);
  });
  it("should return a data object in JSON", function () {
    request(app)
      .get("/starlink")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});
