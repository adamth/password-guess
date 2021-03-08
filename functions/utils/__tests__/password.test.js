const {
  generatePassword,
  verifyPassword,
  generateHint,
} = require("../passwords");

describe("generatePassword", () => {
  it("returns 8 characters", () => {
    expect(generatePassword().length).toBe(8);
  });
});

describe("verifyPassword", () => {
  const password = {
    hint: "12345678",
    password: "87654321",
  };
  const incorrectInput = "123456";
  const slightlyCorrectInput = "77553311";
  const correctInput = "87654321";

  describe("when input is incorrect", () => {
    const value = verifyPassword(password, incorrectInput);
    it("returns an incorrect response", () => {
      expect(value.correct).toBe(false);
    });

    it("returns no highlights", () => {
      expect(value.highlight.length).toBe(0);
    });

    it("returns the users answer", () => {
      expect(value.answer).toBe(incorrectInput);
    });
  });

  describe("when input has some correct values", () => {
    const value = verifyPassword(password, slightlyCorrectInput);
    it("returns an incorrect response", () => {
      expect(value.correct).toBe(false);
    });

    it("returns highlights corresponding to correct values", () => {
      expect(value.highlight).toEqual(["1", "3", "5", "7"]);
    });
  });

  describe("when input has correct values", () => {
    const value = verifyPassword(password, correctInput);
    it("returns an correct response", () => {
      expect(value.correct).toBe(true);
    });

    it("returns no highlight", () => {
      expect(value.highlight).toEqual([]);
    });
  });
});

describe("generateHint", () => {
  const password = "12345678";
  it("returns a string of the same length as the input", () => {
    expect(generateHint(password).length).toBe(8);
  });

  it("returns a different string", () => {
    expect(generateHint(password)).not.toEqual(password);
  });

  it("returns a string containing all characters of input", () => {
    const result = generateHint(password);
    result.split("").map((character) => {
      expect(password.includes(character)).toBe(true);
    });
  });
});
