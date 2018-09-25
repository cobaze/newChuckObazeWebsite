<?php

error_reporting(E_ALL ^ E_NOTICE); ///// hide all notices from PHP

if(isset($_POST['submitted'])) {

    if(trim($_POST['contactName']) === '') {
        $nameError =  'You Forgot to Enter your Name!';
        $hasError = true;
    } else {
        $name = trim($_POST['contactName']);
    }


    if(trim($_POST['email']) === '')  {
        $emailError = 'You Forgot to Enter a Valid E-Mail Address.';
        $hasError = true;
    } else if (!preg_match("/^[[:alnum:]][a-z0-9_.-]*@[a-z0-9.-]+\.[a-z]{2,4}$/i", trim($_POST['email']))) {
        $emailError = 'You entered an invalid email address.';
        $hasError = true;
    } else {
        $email = trim($_POST['email']);
    }

    if(trim($_POST['comments']) === '') {
        $commentError = 'You forgot to enter a message!';
        $hasError = true;
    } else {
        if(function_exists('stripslashes')) {
            $comments = stripslashes(trim($_POST['comments']));
        } else {
            $comments = trim($_POST['comments']);
        }
    }

    if(!isset($hasError)) {

        $emailTo = 'obazechuck@gmail.com'; ///// YOUR email address /////
        $subject = 'Inquiry message from '.$name;
        $sendCopy = trim($_POST['sendCopy']);
        $body = "Name: $name \n\nEmail: $email \n\nMessage: $comments";
        $headers = 'From: ' .' <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

        mail($emailTo, $subject, $body, $headers);

        ///// sets boolean value to TRUE /////
        $emailSent = true;
    }
}
?>

<!doctype html>
<html class="no-js" lang="en">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<meta name="description" content="Graphic and Web Design Portfolio of Chuck Obaze. ">
		<meta name="keywords" content="Graphic Design, Web Design, Web Development, Logo Design, Brochures, Magazines">
		<title>Contact | Chuck Obaze Designs</title>
		<link rel="shortcut icon" href="imgs/chuckobaze-favicon16-6.png"/>
		<link rel="shortcut icon" href="imgs/chuckobaze-favicon32-2.png"/>
		<link rel="stylesheet" type="text/css" href="css/normalize.css">
		<link rel="stylesheet" type="text/css" href="css/chuck-designs.css"/>
		<!--[if lt IE 9]>
	      <script src="js/html5shiv.min.js"></script>
	      <script src="js/respond.min.js"></script>
	    <![endif]-->
		<link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css">
		<link href='https://fonts.googleapis.com/css?family=Vast+Shadow|Londrina+Outline|Londrina+Shadow|Sonsie+One|Exo+2:400,100,100italic,200,200italic,300,300italic,400italic,500,500italic,600italic,600,700,700italic,800italic,900,900italic,800' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Qwigley' rel='stylesheet' type='text/css'>
		<script src="js/modernizr.js"></script>
	</head>

	<body class="main-body">
		<div id="main-container"> <!-- Start Main Container -->

			<header class="main-header"> <!-- Start Main Header -->
				<a class="logo-link" href="index.html#home"><img src="imgs/chuck-obaze-logo-3.png" alt="Chuck Obaze Graphic and Web Design Logo"></a>
				<nav class="main-nav">
					<a href="#" id="lines"></a>
					<ul class="active-nav">
						<li class="home-nav"><a href="index.html">HOME</a></li>
						<li class="projects-nav"><a href="portfolio.html">PORTFOLIO</a></li>
						<li class="contact-nav"><a class="active-link"  href="contact.php">CONTACT</a></li>
					</ul>
				</nav>

			</header> <!-- End Main Header -->

			<div class="contact-bg"></div>
			<section class="top-contact-container"> <!-- Start Top Contact Container -->
				<div id="top-contact">
					<h1>GET IN TOUCH</h1>
				</div>
			</section> <!-- End Top Contact Container -->

			<section id="contact-container"> <!-- Start Contact Container -->
				<div id="contact">
					<h2>CONTACT ME<hr></h2>
					<p>If you need help, have a question, suggestion or want to hire me for a project, please feel free to contact me. Thanks</p>

					<?php if(isset($emailSent) && $emailSent == true) { ?>
                <div class="p1"><h3>Thank you. Your email was sent.</h3></div>
            <?php } else { ?>

            <?php if(isset($hasError) || isset($captchaError) ) { ?>
                        <h3 class="alert">There Was An Error Submitting The Form!</h3>
                    <?php } ?>

					<div id="form-holder"> <!-- Start form holder -->

						<form id="contact-us" action="<?php $_SERVER['PHP_SELF']?>" method="post">
                        <div class="formblock">
	                        <?php if($nameError != '') { ?>
                                <br /><span class="error"><h3><?php echo $nameError;?></h3></span>
                            <?php } ?>
                            <input type="text" name="contactName" id="contactName" value="<?php if(isset($_POST['contactName'])) echo $_POST['contactName'];?>" class="txt requiredField name" placeholder="Enter Your Name *" />
                        </div>

                        <div class="formblock">
	                        <?php if($emailError != '') { ?>
                                <br /><span class="error"><h3><?php echo $emailError;?></h3></span>
                            <?php } ?>
                            <input type="text" name="email" id="email" value="<?php if(isset($_POST['email']))  echo $_POST['email'];?>" class="txt requiredField email" placeholder="Enter Your E-Mail *"/>
                        </div>

                        <div class="formblock">
	                        <?php if($commentError != '') { ?>
                                <br /><span class="error"><h3><?php echo $commentError;?></h3></span>
                            <?php } ?>
                             <textarea placeholder="Enter Your Message *" name="comments" id="commentsText" class="txtarea requiredField" cols="60" rows="10"><?php if(isset($_POST['comments'])) { if(function_exists('stripslashes')) { echo stripslashes($_POST['comments']); } else { echo $_POST['comments']; } } ?></textarea>
                        </div>

                            <button name="submit" type="submit" class="subbutton">SEND MESSAGE</button>
                            <input type="hidden" name="submitted" id="submitted" value="true" />
                    </form>

					</div> <!-- End Form Holder -->

				</div> <!-- End Contact -->
				<?php } ?>

			</section> <!-- End Contact Container -->


			<footer class="main-footer"> <!-- Start Main footer -->
				<p>Copyright &copy; Chuck Obaze, 2016. All Rights Reserved</p>
			</footer> <!-- End Main footer -->

		</div> <!-- End Main Container -->

		<!-- Start jQuery Here -->
		<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
		<script type="text/javascript" src="js/jquery-ui.min.js"></script>
		<script type="text/javascript" src="js/coba.js"></script>
		<script>
			$(document).ready(function(){

				//Google Analytics Code START

				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

				ga('create', 'UA-69228170-1', 'auto');
				ga('send', 'pageview');

				//Google Analytics code END

				$(this).scrollTop(0);

				$(document.body).hide().fadeIn(1000);

				$(window).scroll(function(){

					if ($(window).scrollTop() > 1) {
						$('.main-header').css({ 'background-color': 'rgba(0, 0, 0, 0.6)'});
					} else {
						$('.main-header').css("background-color", "transparent");
					}

				});

				$(window).scroll(function(e){
				  parallax();
				});

				function parallax(){
				  var scrolled = $(window).scrollTop();
				  $('.contact-bg').css('top',-(scrolled*0.1)+'px');
				}
			});
		</script>
	</body>
</html>