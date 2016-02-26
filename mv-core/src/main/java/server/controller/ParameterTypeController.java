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

import server.model.entity.Course;
import server.model.entity.ParameterType;
import server.model.persistence.repository.ParameterTypeRepository;

/**
 * 
 * @author charleston.anjos
 *
 */
@Path("/parametertype")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ParameterTypeController {
	
	ParameterTypeRepository parametertTypeRepository;
	
	public ParameterTypeController(){
		parametertTypeRepository = new ParameterTypeRepository();
	}

	@GET
	@Path("/")
	public List<ParameterType> list() {
		return parametertTypeRepository.findAll();		
	}
	
	@GET
	@Path("/{id}")
	public ParameterType content(@PathParam("id") Long id){
		return parametertTypeRepository.findById(id);
	}

	@PUT
	public void save(ParameterType parameterType) {
		parametertTypeRepository.insert(parameterType);
	}

	@POST
	public void update(ParameterType parameterType) {
		parametertTypeRepository.update(parameterType);
	}

	@DELETE
	public void remove(ParameterType parameterType) {
		parametertTypeRepository.delete(parameterType.getId());
	}
}