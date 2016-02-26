package server.model.persistence.repository;

import java.util.HashMap;
import java.util.List;

import server.model.entity.Parameter;

/**
 * Repository Parameter
 * 
 * @author charleston.anjos
 *
 */
public class ParameterRepository extends JpaGenericRepository<Parameter, Long>{
	
	/**
	 * Function find parameter by constant
	 * 
	 * @author charleston.anjos
	 * 
	 * @param constant
	 * @return List<Parameter>
	 */
	public List<Parameter> findByConstant(String constant){
		
		String jpql = "SELECT "
						+ "prt "												
					+ "FROM "
						+ "Parameter prt "
					+ "WHERE prt.id IS NOT NULL "
						+ "AND prt.disable = :paramDisableParameter "
						+ "AND prt.startDate <= CURRENT_TIMESTAMP "
						+ "AND (prt.endDate >= CURRENT_TIMESTAMP OR prt.endDate IS NULL) "
						+ "AND prt.parameterType.constant = :paramConstant "
						+ "AND prt.parameterType.disable = :paramDisableParameterType "
					+ "ORDER BY prt.name ASC";

		HashMap<String, Object> params = new HashMap<String, Object>();
		
		params.put("paramDisableParameter", false);
		params.put("paramConstant", constant);
		params.put("paramDisableParameterType", false);
		
		return (List<Parameter>) findByJPQL(jpql, params);
	}
	
}