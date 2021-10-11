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
