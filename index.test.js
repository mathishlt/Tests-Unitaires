const request = require("supertest");
const app = require("./index");

describe("GET /", () => {});

describe("POST /s1/exercice1", () => {
  test("Test 1 exo 1 s1", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: 2,
        n2: 2,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 4 }]);
        done();
      });
  });

  test("Test 2 exo 1 s1", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: 0,
        n2: 2,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 3 exo 1 s1", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: 2,
        n2: 0,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 4 exo 1 s1", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: 0,
        n2: 0,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 5 exo 1 s1", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: undefined,
        n2: 2,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 6 exo 1 s1", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: 4,
        n2: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 7 exo 1 s1", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: undefined,
        n2: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });
});

describe("POST /s1/exercice2", () => {
  test("Test 1 exo 2 s1", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({
        n1: 5,
        n2: 2,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 3 }]);
        done();
      });
  });

  test("Test 2 exo 2 s1", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({
        n1: undefined,
        n2: 2,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 3 exo 2 s1", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({
        n1: 2,
        n2: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 4 exo 2 s1", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({
        n1: undefined,
        n2: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });
});

describe("POST /s1/exercice3", () => {
  test("Test 1 exo 3 s1", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({
        n1: 5,
        n2: 5,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 25 }]);
        done();
      });
  });
  test("Test 2 exo 3 s1", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({
        n1: undefined,
        n2: 2,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 3 exo 3 s1", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({
        n1: 2,
        n2: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 4 exo 3 s1", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({
        n1: undefined,
        n2: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });
});

describe("POST /s1/exercice4", () => {
  test("Test 1 exo 4 s1", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: 10,
        n2: 2,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 5 }]);
        done();
      });
  });

  test("Test 2 exo 4 s1", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: undefined,
        n2: 2,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 3 exo 4 s1", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: 2,
        n2: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 4 exo 5 s1", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: undefined,
        n2: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });
});

describe("POST /s1/exercice5", () => {
  test("Test 1 exo 5 s1", (done) => {
    request(app)
      .post("/s1/exercice5")
      .send({
        n1: 10,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 3628800 }]);
        done();
      });
  });
  test("Test 2 exo 5 s1", (done) => {
    request(app)
      .post("/s1/exercice5")
      .send({
        n1: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });
});

describe("POST /s1/exercice6", () => {
  test("Test 1 exo 6 s1", (done) => {
    request(app)
      .post("/s1/exercice6")
      .send({
        n1: 137,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "impair" }]);
        done();
      });
  });
  test("Test 2 exo 2 s1", (done) => {
    request(app)
      .post("/s1/exercice6")
      .send({
        n1: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });
});

describe("POST /s1/exercice7", () => {
  test("Test 1 exo 7 s1", (done) => {
    request(app)
      .post("/s1/exercice7")
      .send({
        n1: 30,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 86 }]);
        done();
      });
  });

  test("Test 2 exo 7 s1", (done) => {
    request(app)
      .post("/s1/exercice7")
      .send({
        n1: null,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });
});

describe("POST /s1/exercice8", () => {
  test("Test 1 exo 8 s1", (done) => {
    request(app)
      .post("/s1/exercice8")
      .send({
        n1: 5,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 78.53981633974483 }]);
        done();
      });
  });
  test("Test 1 exo 8 s1", (done) => {
    request(app)
      .post("/s1/exercice8")
      .send({
        n1: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });
});

describe("POST /s1/exercice9", () => {
  test("Test 1 exo 9 s1", (done) => {
    request(app)
      .post("/s1/exercice9")
      .send({
        n1: "kayak",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: true }]);
        done();
      });
  });
});

describe("POST /s1/exercice10", () => {
  test("Test 1 exo 10 s1", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: 48,
        n2: 18,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 6 }]);
        done();
      });
  });

  test("Test 1 exo 10 s1", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: undefined,
        n2: 18,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 1 exo 10 s1", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: 48,
        n2: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });

  test("Test 1 exo 10 s1", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: undefined,
        n2: undefined,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre valide" },
        ]);
        done();
      });
  });
});

describe("POST /s2/exercice1", () => {
  test("Test 1 exo 1 s2", async () => {
    const dateActuelle = new Date();
    const année = dateActuelle.getFullYear() - 10;
    const mois = ("0" + (dateActuelle.getMonth() + 1)).slice(-2);
    const jour = ("0" + dateActuelle.getDate()).slice(-2);
    const dateAttendue = `${année}-${mois}-${jour}`;

    const response = await request(app).post("/s2/exercice1").expect(200);

    expect(response.body[0].reponse).toBe(dateAttendue);
  });
});

describe("POST /s2/exercice2", () => {
  test("Test 1 exo 2 s2'", async () => {
    // Vous devez envoyer une date valide dans le corps de la requête.
    const dateAEnvoyer = new Date(2023, 10, 2); // pour 2 Novembre 2023
    const dateFormateeAttendue = "02/11/2023";

    const response = await request(app)
      .post("/s2/exercice2")
      .send({ date: dateAEnvoyer.toISOString() }) // Supposant que le corps de la requête attend une date ISO.
      .expect(200);

    expect(response.body[0].reponse).toBe(dateFormateeAttendue);
  });
});

describe("POST /s2/exercice3", () => {
  test("Test 1 exo 3 s2", async () => {
    // Créez deux dates valides à envoyer dans le corps de la requête.
    timestamp1 = new Date(2023, 10, 2); // 2 Novembre 2023
    timestamp2 = new Date(2023, 11, 5); // 5 Décembre 2023
    const differenceEnMillisecondes = timestamp2 - timestamp1; // Différence en jours entre les deux dates
    const differenceAttendue =
      differenceEnMillisecondes / (1000 * 60 * 60 * 24);

    const response = await request(app)
      .post("/s2/exercice3")
      .send({
        date1: timestamp1.toISOString(),
        date2: timestamp2.toISOString(),
      })
      .expect(200);

    expect(response.body[0].reponse).toBe(differenceAttendue);
  });
});

describe("POST /s2/exercice4", () => {
  test("Test 1 exo 4 s2", async () => {
    const date = new Date("2023-03-05").toISOString();
    const jours = 3;
    const calculateDate = new Date("2023-03-08").toISOString();

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date, jours });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe(calculateDate);
  });
});

describe("POST /s2/exercice5", () => {
  test("Test 1 exo 5 s2", async () => {
    const annee = 2024;

    const response = await request(app).post("/s2/exercice5").send({ annee });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe(true);
  });
});

describe("POST /s2/exercice6", () => {
  test("Test 1 exo 6 s2", async () => {
    const response = await request(app)
      .post("/s2/exercice6")
      .send({ date: "2023-11-15" }); // Utilisez une date en format ISO-8601

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe("2023-11-01");
  });
});

describe("POST /s2/exercice7", () => {
  test("Test 1 exo 7 s2", async () => {
    const response = await request(app)
      .post("/s2/exercice7")
      .send({ date: "2023-02-15" }); // Utilisez une date en format ISO-8601

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe("2023-02-28");
  });
});

describe("POST /s2/exercice8", () => {
  test("Test 1 exo 8 s2", async () => {
    const response = await request(app)
      .post("/s2/exercice8")
      .send({ heures: 5, minutes: 5 });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe("05:05");
  });
});

describe("POST /s2/exercice9", () => {
  test("Test 1 exo 9 s2", async () => {
    debut1 = new Date("2023-03-05").toISOString();
    fin1 = new Date("2023-03-30").toISOString();
    debut2 = new Date("2023-03-15").toISOString();
    fin2 = new Date("2023-04-07").toISOString();

    const response = await request(app)
      .post("/s2/exercice9")
      .send({ debut1, fin1, debut2, fin2 });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toBe(true);
  });
});

describe("POST /s2/exercice10", () => {
  test("Test 1 exo 10 s2", async () => {
    const response = await request(app)
      .post("/s2/exercice10")
      .send({ dateNaissance: "2001-03-08" });

    expect(response.statusCode).toBe(200);
    expect(response.body.reponse).toEqual(22);
  });
});
