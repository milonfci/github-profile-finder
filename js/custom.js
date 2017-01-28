$(document).ready(function () {
    $("#UserName").on('keyup', function (e) {
        let searchKey = e.target.value;

        $("#profile").html("Loading....");

        // Request on github
        $.ajax({
            url: 'https://api.github.com/users/' + searchKey,
            type: 'get',
            data: {
                client_id: '4552d390a91672205d80',
                client_secret: 'a28a7112ee724a2e148bffd5318e08a54bfa8a56'
            }
        }).done(function (user) {
            // To load latest repos
            $.ajax({
                url: 'https://api.github.com/users/'+searchKey+'/repos',
                type: 'get',
                data: {
                    client_id: '4552d390a91672205d80',
                    client_secret: 'a28a7112ee724a2e148bffd5318e08a54bfa8a56',
                    sort:'asc',
                    per_page:5
                }
            }).done(function(repos){
                $.each(repos, function(i,repo){
                    $("#repos").append(`
                        <div class="well">
                        <div class="row">
                        <div class="col-md-7">
                        <strong>${repo.name}: ${repo.description}</strong>
</div>
                        <div class="col-md-3">
                            <span class="label label-default">Forks: ${repo.forks_count}</span>
                            <span class="label label-primary">Wathers: ${repo.watchers_count}</span>
                            <span class="label label-success">Stars: ${repo.stargazers_count}</span>
</div>
                        <div class="col-md-2">
                        <a href="${repo.html_url}" target="_blank" class="btn btn-default">Repo Page</a>
</div>
</div>
</div>
                    `);
                })
            });
            $("#profile").html(`
                            <div class="panel panel-default">
                  <div class="panel-heading">${user.name}</div>
          git        <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="thumbnail avatar" src="${user.avatar_url}"/>
                                                <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
                        </div>
                        <div class="col-md-9">
                            <span class="label label-default">Public Repos: ${user.public_repos}</span>
                            <span class="label label-primary">Public Gists: ${user.public_gists}</span>
                            <span class="label label-success">Followers: ${user.followers}</span>
                            <span class="label label-info">Following: ${user.following}</span>
                            <br/><br/>
                            
                            <ul class="list-group">
                                <li class="list-group-item">Company: ${user.company}</li>
                                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                <li class="list-group-item">Location: ${user.location}</li>
                                <li class="list-group-item">Member Science: ${user.created_at}</li>
                            </ul>                                                        
                        </div>
                    </div>
                    <h3>Another Repos</h3>
                    <div id="repos"></div>
                  </div>
                </div>
            `);
        });

    })
});