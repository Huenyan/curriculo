<?php
	if(isset($_POST['btn'])){
		$name=$_POST['nome'];
		$email=$_POST['email'];
		$phone=$_POST['telefone'];
		$msg=$_POST['texto'];

		$to='ronyanlu@gmail.com';
		$subject='Form Submission';
		$message="Name :".$name."\n"."Phone :".$phone."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>