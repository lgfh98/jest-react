const text = "Hola Mundo";
const fruits = ["🍎", "🍏", "🍇", "🍉", "🍌", "🍊"];

test("Debe contener un texto", () => {
  expect(text).toMatch(/Mundo/);
});

test("¿Tenemos banana?", () => {
  expect(fruits).toContain("🍌");
});

test("Mayor que", () => {
  expect(10).toBeGreaterThan(9);
});

test("Es verdadero?", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, cb) => {
  cb(str.split("").reverse().join(""));
};

test("Probando Callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("String vacio"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Probando una promesa", () => {
  reverseString2("Hola").then((str) => {
    expect(str).toBe("aloH");
  });
});

test("Probando async/await", async () => {
  const str = await reverseString2("Hola");
  expect(str).toBe("aloH");
});

afterEach(() => console.log("Despues de cada prueba"));
afterAll(() => console.log("Despues de todas las pruebas"));

beforeEach(() => console.log("Antes de cada prueba"));
beforeAll(() => console.log("Antes todas las prueba"));
