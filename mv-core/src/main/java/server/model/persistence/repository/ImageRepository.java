package server.model.persistence.repository;

import java.util.HashMap;
import java.util.List;

import server.model.entity.Image;

/**
 * Repository Image
 * 
 * @author charleston.anjos
 *
 */
public class ImageRepository extends JpaGenericRepository<Image, Long> {
	
	/**
	 * List all image per Folder with Limit and Max
	 * 
	 * @author Charleston Anjos <charleston.anjos@gmail.com>
	 * 
	 * @param integer init of register
	 * @param integer max of register
	 * @param integer prtid is parameter folder
	 * 
	 * @return List<Image>
	 */
	public List<Image> listByPage(int init, int max, int prtid){
		
		String jpql  =
					 " FROM Image "
					+ "WHERE prtid = :paramPrtid ";					
		
		HashMap<String, Object> params = new HashMap<String, Object>();
		
		params.put("paramPrtid", prtid);		
		
		return  (List<Image>) findByJPQLwithLimit(jpql, params, init, max);
	}
	
	/**
	 * Function that count image by parameter
	 * 
	 * @author charleston.anjos
	 * 
	 * @param prtid
	 * @return integer
	 */
	public int countPerParameter(int prtid){
		
		String jpql = "SELECT "
						+ "id "					
					+ "FROM Image "
					+ "WHERE prtid = :paramPrtid ";					

		HashMap<String, Object> params = new HashMap<String, Object>();

		params.put("paramPrtid", prtid);
		
		return findByJPQL(jpql, params).size();
	}
}