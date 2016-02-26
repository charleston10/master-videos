package server.controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import server.model.entity.Image;
import server.model.persistence.repository.ImageRepository;

/**
 * REST Controller Image
 * 
 * @author charleston.anjos 
 * 
 */

@Path("/image")
@Produces(MediaType.APPLICATION_JSON)
public class ImageController {

	private ImageRepository imageRepository;
	
	public ImageController(){
		imageRepository = new ImageRepository();
	}
	
	@GET
	@Path("/{id}")
	public Image list(@PathParam("id") long id){
		return imageRepository.findById(id);
	}
	
	@GET
	@Path("/limit")
	public List<Image> listPerPage(
			@QueryParam("init") int init,
			@QueryParam("max") int max,
			@QueryParam("prtid") int prtid){
		
		return imageRepository.listByPage(init, max, prtid);		
	}
	
	@GET
	@Path("/total")
	public int total(){
		return imageRepository.count();
	}
	
	@GET
	@Path("/total/{prtid}")
	public int countPerParameter(@PathParam("prtid") int prtid){
		return imageRepository.countPerParameter(prtid);
	}
}