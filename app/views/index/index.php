<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" type="text/css" href="<?php echo asset("css/bootstrap.3.0.0.css"); ?>" />
        <link rel="stylesheet" type="text/css" href="<?php echo asset("css/bootstrap.theme.3.0.0.css"); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Laravel 4 Chat</title>
    </head>
    <body>
        <script type="text/x-handlebars" data-template-name="index-index">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Laravel 4 Chat</h1>
                        <table class="table table-striped">
                            {{#each}}
                                <tr>
                                    <td>
                                        {{user}}
                                    </td>
                                    <td>
                                        {{text}}
                                    </td>
                                </tr>
                            {{/each}}
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="input-group">
                            <input type="text" class="form-control" />
                            <span class="input-group-btn">
                                <button class="btn btn-default">Send</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </script>
        <script type="text/javascript" src="<?php echo asset("js/jquery.1.9.1.js"); ?>"></script>
        <script type="text/javascript" src="<?php echo asset("js/handlebars.1.0.0.js"); ?>"></script>
        <script type="text/javascript" src="<?php echo asset("js/ember.1.1.1.js"); ?>"></script>
        <script type="text/javascript" src="<?php echo asset("js/ember.data.1.0.0.js"); ?>"></script>
        <script type="text/javascript" src="<?php echo asset("js/bootstrap.3.0.0.js"); ?>"></script>
        <script type="text/javascript" src="<?php echo asset("js/shared.js"); ?>"></script>
    </body>
</html>