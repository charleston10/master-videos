package server.controller;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import server.ServerException;
import server.model.entity.Video;
import server.model.persistence.repository.VideoRepository;

/**
 * REST Controller Video
 * 
 * @author charleston.anjos 
 * 
 */
@Path("/video")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class VideoController {
	
	private VideoRepository videoRepository;
	
	public VideoController() {
		videoRepository = new VideoRepository();
	}

	@GET
	public List<Video> list(
			@DefaultValue("true") @QueryParam("withImage") boolean withImage){
		
		return videoRepository.findAll();
	}	
	
	@GET
	@Path("/{id}")
	public Video content(@PathParam("id") long id){
		return videoRepository.findById(id);
	}
	
	@POST	
	public Response insert(Video video){
		try{
			videoRepository.insert(video);
			return Response.status(200).build();
		}catch(ServerException se){			
			return Response.status(500).build();
		}	
	}
	
	@DELETE
	@Path("/{id}")
	public Response delete(@PathParam("id") long id){
		try{
			videoRepository.delete(id);
			return Response.status(200).build();
		}catch(ServerException se){			
			return Response.status(500).build();
		}		
	}
	
	@PUT
	public Response update(Video video){
		try{
			videoRepository.update(video);
			return Response.status(200).build();
		}catch(ServerException se){			
			return Response.status(500).build();
		}		
	}
}