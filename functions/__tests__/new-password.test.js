import { handler } from "../new-password";

describe("handler", () => {
  let response;

  beforeEach(async () => {
    response = await handler();
  });

  it("returns a successful response", () => {
    expect.hasAssertions();

    expect(response.statusCode).toEqual(200);
  });
});
