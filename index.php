<!DOCTYPE html>
<html>
<head>
	<title>Hasil Belajar</title>
  <link rel="stylesheet" href="./ProgramCSS/style.css"> 
  <script src="./ProgramJS/script1.js"></script>
  
</head>
<body>
	<div class="cover">
		<div id="foto"></div>
		<div id="header">Curriculum Vitae</div>
		<div id="kiri">
			<div id="coverMenu">
				<button class="Submenu" onclick="myFunction()" style="width: 100px;">Pendidikan</button>
				<button class="Submenu" onclick="myFunction2()"style="width: 100px;">Organisasi</button>
				<button class="Submenu" onclick="myFunction3()" style="width: 100px;">Pengalaman</button>
				<button class="Submenu" onclick="myFunction4()" style="width: 120px">Personal Skill</button>
			</div>
			<div id="content"><?php include ('./ProgramPHP/edu.php');?></div>
		</div>
		<div id="kanan">
			<div class="about">
				<div class="isiAbout" > <span class="blink"> About Me </span></div>
			</div>
			
			<div id="Tentang" class="Tentang"><?php include ('./ProgramPHP/tentang.php');?></div>
			<div class="Kontak">
				<div class="DesainKontak" > <span class="blink"> Contacs </span></div>
			</div>
			
			<div id="infoKontak" class="infoKontak"><?php include ('./ProgramPHP/kontak.php');?></div>
		</div>
		<marquee  scrolldelay="100" title="Ini Muncul Saat Hover" behavior="slide" onmouseover="this.stop()" onmouseout="this.start()"><a style="color: white;" href="https://posciety.com" target="_blank">Selamat Datang di Curriculum Vitae saya , Semoga anda terhibur </a></marquee>

	</div>
</body>
</html>