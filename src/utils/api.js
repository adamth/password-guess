/* Api methods to call /functions */

export const newPassword = () => {
  return fetch("/.netlify/functions/new-password", {
    method: "GET",
  });
};

export const verifyPassword = (data) => {
  return fetch("/.netlify/functions/verify-password", {
    body: JSON.stringify(data),
    method: "POST",
  });
};
