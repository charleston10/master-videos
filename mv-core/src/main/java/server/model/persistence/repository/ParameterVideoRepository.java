package server.model.persistence.repository;

import java.util.HashMap;

import server.model.entity.ParameterVideo;

/**
 * Repository ParameterVideo
 * 
 * @author charleston.anjos
 *
 */
public class ParameterVideoRepository extends JpaGenericRepository<ParameterVideo, Long> {

	/**
	 * Function to delete video
	 * 
	 * @author charleston.anjos
	 * 
	 * @param id
	 */
	public void deleteByVideo(Long id){
		
		String jpql = "DELETE FROM ParameterVideo WHERE vidid = :paramVideo";
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		
		params.put("paramVideo", id);
		
		executeQuery(jpql,params);
	}
}