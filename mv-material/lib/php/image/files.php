<?php
 	//echo "<meta HTTP-EQUIV='refresh' CONTENT='10'>"; //update frame 5 in 5 seconds
	 
	 
 
	$img_dir = "upload/thumbnail/";
	$dir = dirname(__FILE__).'/upload/thumbnail/';
	 
	$images = scandir($img_dir);
	 
	$tagImage = "";
	$name = "name='imageFile[]'";
	$width = "width='150px'";
	$height = "height='150px'";
	
	foreach($images as $img) 	{ 
		if($img === '.' || $img === '..') {continue;} 		
	
		if ((preg_match('/.jpg/',$img))  ||  (preg_match('/.gif/',$img)) || (preg_match('/.tiff/',$img)) || (preg_match('/.png/',$img))) {
			$type = pathinfo($dir.$img, PATHINFO_EXTENSION);
			$data = file_get_contents($dir.$img);
			$base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
			$tagImage .='<img src="'.$base64.'" '.$width.$height.' title="'.$img.'">'; 
		} else { 
			continue; 
		}	
	}
	 
	echo $tagImage ;
?>