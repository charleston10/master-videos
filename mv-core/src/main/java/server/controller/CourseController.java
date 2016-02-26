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
import server.model.entity.Course;
import server.model.persistence.repository.CourseRepository;

/**
 * REST Controller Course
 * 
 * @author charleston.anjos 
 */
@Path("/course")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CourseController {
	
	private CourseRepository courseRepository;
	
	public CourseController(){
		courseRepository = new CourseRepository();
	}
	
	@GET	
	public List<Course> list(@DefaultValue("true") @QueryParam("withImage") boolean withImage){
		return courseRepository.findAll();
	}
	
	@GET
	@Path("/{id}")
	public Course content(@PathParam("id") Long id){
		return courseRepository.findById(id);
	}
	
	@POST
	public Response insert(Course course){
		try{
			courseRepository.insert(course);
			return Response.status(200).build();
		}catch(ServerException se){			
			return Response.status(500).build();
		}	
	}
	
	@DELETE
	@Path("/{id}")
	public Response delete(@PathParam("id") long id){
		try{
			courseRepository.delete(id);
			return Response.status(200).build();
		}catch(ServerException se){			
			return Response.status(500).build();
		}		
	}
	
	@PUT	
	public Response update(Course course){
		try{
			courseRepository.update(course);
			return Response.status(200).build();
		}catch(ServerException se){			
			return Response.status(500).build();
		}	
	}
}