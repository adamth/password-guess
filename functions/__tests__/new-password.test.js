const { handler } = require("../new-password");

describe("handler", () => {
  let response;

  beforeEach(async () => {
    response = await handler();
  });

  it("returns a successful response", () => {
    expect(response.statusCode).toEqual(200);
  });

  it("returns a new password hint", () => {
    expect(JSON.parse(response.body).data.hint.length).toBe(8);
  });
});
