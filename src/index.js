import './index.css';

import {getUsers, deleteUser} from './api/userApi';

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

  const deleteLinks = global.document.getElementsByClassName('delete-user');

  // must use Array.from to create real array from DOM collection
  // getElementsByClassName only returns an "array like" object.
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
