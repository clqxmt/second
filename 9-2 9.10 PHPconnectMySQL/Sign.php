<?php
    header("content-type:text/html;charset=utf-8");
    session_start();
    $account="H51917";
    $password="123456";
    if(isset($_SESSION["user"]) && $_SESSION["user"]=="H51917"){
        echo "您已登录";
        
    }else{
        if($_GET["account"]==$account && $_GET["pwd"]==$password){
            $_SESSION["user"]=$account;
            echo "用户名和密码正确";
        }
    }
?>