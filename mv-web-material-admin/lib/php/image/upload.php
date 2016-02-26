<?php

DEFINE("PATH_UPLOAD","upload/");
DEFINE("PATH_UPLOAD_THUMB","upload/thumbnail/");

function createThumbs( $pathToImages, $pathToThumbs, $thumbWidth ) 
{
  // open the directory
  $dir = opendir( $pathToImages );

  // loop through it, looking for any/all JPG files:
  while (false !== ($fname = readdir( $dir ))) {
    // parse path for the extension
    $info = pathinfo($pathToImages . $fname);
    // continue only if this is a JPEG image
    if ( strtolower($info['extension']) == 'jpg' ) 
    {
      //echo "Creating thumbnail for {$fname} <br />";

      // load image and get image size
      $img = imagecreatefromjpeg( "{$pathToImages}{$fname}" );
      $width = imagesx( $img );
      $height = imagesy( $img );

      // calculate thumbnail size
      $new_width = $thumbWidth;
      $new_height = floor( $height * ( $thumbWidth / $width ) );

      // create a new temporary image
      $tmp_img = imagecreatetruecolor( $new_width, $new_height );

      // copy and resize old image into new image 
      imagecopyresized($tmp_img, $img, 0, 0, 0, 0, $new_width, $new_height, $width, $height );

      // save thumbnail into a file
      imagejpeg( $tmp_img, "{$pathToThumbs}{$fname}" );
    }
  }
  // close the directory
  closedir( $dir );
}
// call createThumb function and pass to it as parameters the path 
// to the directory that contains images, the path to the directory
// in which thumbnails will be placed and the thumbnail's width. 
// We are assuming that the path will be a relative path working 
// both in the filesystem, and through the web for links



function generateRandomString($length = 10) {
	
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
	
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

if ( !empty( $_FILES ) ) {
    $local = PATH_UPLOAD;
    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];	
  	$nameFile = generateRandomString(); //$_FILES[ 'file' ][ 'name' ]
  	$ext = end(explode('.', $_FILES['file']['name']));
    $uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . $local . DIRECTORY_SEPARATOR .$nameFile.'.'.$ext ;
  
    move_uploaded_file( $tempPath, $uploadPath );
  
    $answer = array( 'answer' => 'File transfer completed' );
    $json = json_encode( $answer );
    
    echo $json;
} else {
    echo 'No files';
}

/* create thumbnail 300px*/
createThumbs(PATH_UPLOAD,PATH_UPLOAD_THUMB,300);

?>