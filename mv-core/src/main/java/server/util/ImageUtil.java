package server.util;


import org.apache.commons.codec.binary.Base64;

/**
 * Class Util to Image
 * 
 * @author charleston.anjos
 * @since 2015-06-21
 *
 */
public class ImageUtil {
	
	/**
	 * Encodes the byte array into base64 string
	 *
	 * @param imageByteArray - byte array
	 * @return String a {@link java.lang.String}
	 */
	public static String encodeImage(byte[] imageByteArray) {
		return Base64.encodeBase64String(imageByteArray);
	}
	
	/**
	 * Decodes the base64 string into byte array
	 *
	 * @param imageDataString - a {@link java.lang.String}
	 * @return byte array
	 */
	public static byte[] decodeImage(String imageDataString) {
		return Base64.decodeBase64(imageDataString);
	}	
}