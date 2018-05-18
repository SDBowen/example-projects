// Init GitHub
const gitHub = new GitHub;

// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listner
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP call
    gitHub.getUser(userText).then(data => {
        if(data.profile.message === 'Not Found') {
            // Show alert
            ui.showAlert('User not found', 'alert alert-danger');
        } else {
            // Show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos)
        }
    });
    } else {
        // Clear profile
        ui.clearProfile();
    }
});
