/* Import faunaDB sdk */
const faunadb = require("faunadb");
const { verifyPassword } = require("./utils/passwords");

const q = faunadb.query;

exports.handler = async (event) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });

  try {
    const { hint, userAnswer } = JSON.parse(event.body);
    const { data: password } = await client.query(
      q.Get(q.Match(q.Index("password_by_hint"), hint.toString()))
    );

    const response = verifyPassword(password, userAnswer);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};
