/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package server.model.persistence.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * Interface of {@link GenericRepositoryJpa}.
 * 
 * @param <T>
 *            entity class
 * @param <K>
 *            tipo de chave
 * 
 * @author Charleston Anjos (charleston10)
 */
public interface IGenericDao<T extends Serializable, K extends Serializable> {

	void insert(T entity);

	void update(T entity);

	void delete(K id);

	T findById(K id);

	List<T> findAll();

	List<?> findByJPQL(String jpql, Object... params);

	List<?> findByJPQL(String jpql, Map<String, Object> params);
	
	List<?> findByJPQLwithLimit(String jpql, Map<String, Object> params,int init, int max);

	Object findSingleResultByJPQL(String jpql, Object... params);

	Object findSingleResultByJPQL(String jpql, Map<String, Object> params);

	int count();
	
	boolean executeQuery(String jpql, Object... params);
}