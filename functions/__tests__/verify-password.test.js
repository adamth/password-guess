const faunadb = require("faunadb");
const { handler } = require("../verify-password");

describe("verify-password", () => {
  let response;
  let event = {
    body: JSON.stringify({
      hint: "87654321",
      userAnswer: "87654321",
    }),
  };
  const mockedClient = {
    query: () => ({
      data: {
        password: "12345678",
        hint: "87654321",
      },
    }),
  };
  beforeEach(async () => {
    faunadb.Client = jest.fn().mockImplementation(() => {
      return mockedClient;
    });
    response = await handler(event);
  });

  it("returns a successful response", () => {
    console.log(response);
    expect(response.statusCode).toEqual(200);
  });

  it("returns valid json body", () => {
    expect(JSON.parse(response.body)).toBeTruthy();
  });
});
