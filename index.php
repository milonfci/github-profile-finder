<!DOCTYPE html>
<html lang="en">
<head>
    <title>Github Profile Finder</title>

    <!-- Bootstrap core CSS -->
    <link href="https://bootswatch.com/simplex/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css"/>
</head>

<body>

<nav class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Github Profile Finder</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>

<div class="container">

    <div class="searchContainer">
        <h1>Search Github User's:</h1>
        <p class="lead">Enter a username to fetch a user profile info and repos.</p>
        <input type="text" class="form-control" placeholder="Github Username" id="UserName"/>
    </div>
    <br/>

    <div id="profile">
<!--        Profile info will goes here-->
    </div>
</div><!-- /.container -->
<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/custom.js"></script>
</body>
</html>
