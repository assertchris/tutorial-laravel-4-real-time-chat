<?php

Route::get("/", function()
{
    return View::make("index/index");
});