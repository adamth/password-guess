const generatePassword = () => {
  // get 8 random characters
  return Math.random().toString().slice(2, 10);
};

const generateHint = (password) => {
  // create a new array made up of the input value with the characters randomly shuffled
  const possibleHint = password
    .split("")
    .reduce((acc, character) => {
      // determine which slots are empty
      const availableSlots = acc
        .map((value, i) => (!!value ? null : i))
        .filter((value) => value !== null);

      // grab a random available slot from the available slots array
      const nextSlot =
        availableSlots[Math.floor(Math.random() * availableSlots.length)];

      // insert the the character of the input value in the random available slot
      acc[nextSlot] = character;
      return acc;
    }, new Array(password.length).fill(undefined))
    .join("");

  // check to make sure that the generated hint is different to the input value
  if (possibleHint !== password) {
    return possibleHint;
  } else {
    generateHint(password);
  }
};

const verifyPassword = (password, userAnswer) => {
  // first check to see if the guess is a direct match
  if (password.password === userAnswer) {
    return {
      correct: true,
      hint: password.hint,
      answer: password.password,
    };
  }

  // check each character or the password to see if any characters of the guess are in the correct position
  const highlight = password.password
    .split("")
    .map((character, i) => (userAnswer[i] === character ? i.toString() : null))
    .filter(Boolean);

  return {
    correct: false,
    highlight,
    hint: password.hint,
    answer: userAnswer,
  };
};

module.exports = {
  generateHint,
  generatePassword,
  verifyPassword,
};
