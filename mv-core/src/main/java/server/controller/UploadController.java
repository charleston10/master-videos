package server.controller;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;

import server.model.entity.Image;
import server.model.persistence.repository.ImageRepository;
import server.util.ImageUtil;

/**
 * 
 * @author charleston.anjos
 *
 */

@Path("/upload")
public class UploadController {
	
	private ImageRepository imageRepository;
	
	public UploadController(){
		imageRepository = new ImageRepository();
	}
	
		
	@POST
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public void upload(@MultipartForm Image image){
		//create image in base 64
		image.setBase64(ImageUtil.encodeImage(image.getBlob()));
		
		imageRepository.insert(image);
	}
}