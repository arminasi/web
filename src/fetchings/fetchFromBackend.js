export async function createUser(data) {
  fetch("http://192.168.5.159:9000/api/signUp", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

export async function loginUser(data) {
  const a = fetch("http://192.168.5.159:9000/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return a;
}
