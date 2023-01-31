// твои решения
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

fetch("https://this-site-doesnt-exists.intocode")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(typeof data);
  })
  .catch((error) => {
    console.log(error);
  });

fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((dat) => {
    console.log(dat.data.length);
  })
  .catch((error) => {
    console.log(error);
  });

fetch("https://reqres.in/api/users/1")
  .then((res) => res.json())
  .then((ata) => {
    console.log(ata.data.email);
  })
  .catch((error) => {
    console.log(error);
  });

fetch("https://reqres.in/api/users", {
  method: "POST",
  body: JSON.stringify({ first_name: "intocode" }),
  headers: { "Content-type": "application/json" },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const parametr = {
  method: "POST",
  body: JSON.stringify({ first_name: "intocode" }),
  headers: { "Content-type": "application/json" },
};

fetch("https://reqres.in/api/users", parametr)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

fetch("https://reqres.in/api/users", {
  method: "POST",
  body: JSON.stringify({
    last_name: "into",
    first_name: "code",
  }),
  headers: { "Content-type": "application/json" },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data.id, data.createdAt);
  })
  .catch((error) => {
    console.log(error);
  });

fetch("https://reqres.in/api/users/5", {
  method: "DELETE",
}).then((data) => {
  if (data.status === 204) {
    console.log("пользователь с id 5 успешно удален");
  }
});

fetch("https://reqres.in/api/users/3", {
  method: "PATCH",
  body: JSON.stringify({ name: "интукод" }),
  headers: { "Content-type": "application/json" },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
