import './index.css';

import {getUsers} from './api/getUsers';

// populate table of users from API call
getUsers().then(result => {
  let userBody = '';

  result.forEach(user => {
    userBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="delete-user">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = userBody;
});
