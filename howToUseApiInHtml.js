fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((todo) => {
      const ApiData = `<td>${todo.id}</td><td>${todo.title}</td><td>${
        todo.completed ? "Yes" : "No"
      }</td>`;
      document.querySelector("tbody").insertAdjacentHTML("beforeend", ApiData);
    });
    console.log(data);
  })

  // .then(data =>{
  //     data.foreach(todo => {
  //         const row = document.getElementById('user-id');
  //         const idCell = document.getElementById('title');
  //     })
  //     console.log(data);
  // })

  // .then(data =>{
  //     const todosTableBody = document.getElementById('todosTableBody');
  //     data.foreach(todo => {
  //         const row = document.createElement('tr');
  //     })
  // })

//   .then(data => {
//           const todosTableBody = document.getElementById('todosTableBody');

//           data.forEach(todo => {
//             const row = document.createElement('tr');

//             const idCell = document.createElement('td');
//             idCell.textContent = todo.id;
//             row.appendChild(idCell);

//             const titleCell = document.createElement('td');
//             titleCell.textContent = todo.title;
//             row.appendChild(titleCell);

//             const completedCell = document.createElement('td');
//             completedCell.textContent = todo.completed ? 'Yes' : 'No';
//             row.appendChild(completedCell);

//             todosTableBody.appendChild(row);
//           });
//           console.log(data);
//         })
  .catch((error) => console.log(error));

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(data => {
//     const todosTableBody = document.getElementById('todosTableBody');

//     data.forEach(todo => {
//       const row = document.createElement('tr');

//       const idCell = document.createElement('td');
//       idCell.textContent = todo.id;
//       row.appendChild(idCell);

//       const titleCell = document.createElement('td');
//       titleCell.textContent = todo.title;
//       row.appendChild(titleCell);

//       const completedCell = document.createElement('td');
//       completedCell.textContent = todo.completed ? 'Yes' : 'No';
//       row.appendChild(completedCell);

//       todosTableBody.appendChild(row);
//     });
//   })
//   .catch(error => console.error('Error:', error));
