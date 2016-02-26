package server.controller;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import server.ServerException;
import server.model.entity.Parameter;
import server.model.persistence.repository.ParameterRepository;

/**
 * 
 * @author charleston.anjos
 *
 */

@Path("/parameter")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ParameterController {
	
	private ParameterRepository parameterRepository;
	
	public ParameterController(){
		parameterRepository = new ParameterRepository();
	}
	
	@GET
	@Path("/")
	public List<Parameter> list(){
		return parameterRepository.findAll();
	}
	
	@GET
	@Path("/constant/{constant}")
	public List<Parameter> listByConstant(@PathParam("constant") String constant){
		return  parameterRepository.findByConstant(constant);
	}
	
	@POST
	@Path("/")
	public Response insert(Parameter parameter){
		try{
			parameterRepository.insert(parameter);
			return Response.status(200).build();
		}catch(ServerException se){			
			return Response.status(500).build();
		}		
	}
	
	@PUT
	@Path("/")
	public Response update(Parameter parameter){
		try{
			parameterRepository.update(parameter);
			return Response.status(200).build();
		}catch(ServerException se){			
			return Response.status(500).build();
		}		
	}
	
	@DELETE
	@Path("/{id}")
	public Response delete(@PathParam("id") long id){
		try{
			parameterRepository.delete(id);
			return Response.status(200).build();
		}catch(ServerException se){			
			return Response.status(500).build();
		}		
	}
}