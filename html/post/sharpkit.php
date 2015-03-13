<?php
//replace this for our own server implement with MVC framework
if(isset($_POST["code"])) {
    
       $ch = curl_init(); 
       curl_setopt($ch, CURLOPT_URL, "http://sharpkit.net/Live.aspx?ajax=1"); 
       curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
       curl_setopt($ch, CURLOPT_POSTFIELDS, "cs=".urlencode($_POST["code"])); 
       $output = curl_exec($ch); 
       curl_close($ch);   

     
       
       echo $output;
}

 
