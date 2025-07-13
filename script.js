
      const btn = document.getElementById("btn");
      btn.addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const gender = document.querySelector(
          'input[name="gender"]:checked'
        ).value;
        const course = document.getElementById("course").value;
        const email = document.getElementById("email").value;
        const data = document.getElementById("data");
        const row = document.createElement("tr");
        row.innerHTML =
          "<td>" +
          name +
          "</td>" +
          "<td>" +
          age +
          "</td>" +
          "<td>" +
          gender +
          "</td>" +
          "<td>" +
          course +
          "</td>" +
          "<td>" +
          email +
          "</td>" +
          "<td><button onclick='deleteRow(this)'>Delete</button></td>";
        data.append(row);
      });
      function deleteRow(button) {
        const row = button.closest("tr");
        row.remove();
      }
    