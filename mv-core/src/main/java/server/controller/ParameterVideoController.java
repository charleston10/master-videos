package server.controller;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import server.model.entity.ParameterVideo;
import server.model.persistence.repository.ParameterVideoRepository;

/**
 * 
 * @author charleston.anjos
 *
 */
@Path("/parametervideo")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ParameterVideoController {

	private ParameterVideoRepository parameterVideoRepository;

	public ParameterVideoController() {
		parameterVideoRepository = new ParameterVideoRepository();
	}
	
	@GET
	public List<ParameterVideo> list(){
		return parameterVideoRepository.findAll();
	}
}