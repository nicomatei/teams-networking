function displayTeams(teams) {
  console.warn("display", teams);

  var teamsHTML = "";
  teams.forEach(function (team) {
    teamsHTML += `
    <tr>
      <td>${team.promotion}</td>
      <td>${team.members}</td>
      <td>${team.name}</td>
      <td><a href="${team.url}">open</a></td>
      <td>
                <button type="submit">💾</button>
                <button type="reset">❌</button>
              </td>
    </tr> `;
  });
  console.info(teamsHTML);
  document.querySelector("table tbody").innerHTML = teamsHTML;
}

function loadTeams() {
  fetch("data/teams.json")
    .then(function (r) {
      console.info(r);
      return r.json();
    })
    .then(function (teams) {
      displayTeams(teams);
    });
}

loadTeams();
