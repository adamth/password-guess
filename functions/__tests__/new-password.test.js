const faunadb = require("faunadb");
const { handler } = require("../new-password");

const mockedClient = {
  query: () => ({
    data: {
      password: "12345678",
      hint: "87654321",
    },
  }),
};

describe("handler", () => {
  let response;

  beforeEach(async () => {
    faunadb.Client = jest.fn().mockImplementation(() => {
      return mockedClient;
    });
    response = await handler();
  });

  it("returns a successful response", () => {
    expect(response.statusCode).toEqual(200);
  });

  it("returns a new password hint", () => {
    expect(JSON.parse(response.body).data.hint.length).toBe(8);
  });
});
