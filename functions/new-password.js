/* Import faunaDB sdk */
const faunadb = require("faunadb");
const { generateHint, generatePassword } = require("./utils/passwords");

const q = faunadb.query;

exports.handler = async () => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });

  const password = generatePassword();
  const hint = generateHint(password);

  const passwordRecord = {
    data: {
      hint,
      password,
    },
  };

  try {
    await client.query(q.Create(q.Ref("classes/passwords"), passwordRecord));

    return {
      statusCode: 200,
      body: JSON.stringify(passwordRecord),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};
