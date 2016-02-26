package server.model.persistence.repository;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import server.model.persistence.JpaPersistence;
import server.model.persistence.PersistenceException;
import server.model.persistence.dao.IGenericDao;

/**
 * 
 * @author charleston.anjos
 *
 * @param <T> Entity
 * @param <K> Type PrimaryKey of Class
 */
public class JpaGenericRepository<T extends Serializable, K extends Serializable> implements IGenericDao<T, K> {
	
	JpaPersistence jpaPersistence;
	
	@PersistenceContext
	private EntityManager entityManager;

	private Class<T> persistentClass;

	@SuppressWarnings("unchecked")
	public JpaGenericRepository() {
		
		jpaPersistence = new JpaPersistence();
		
		this.entityManager = jpaPersistence.getEntityManager();
		
		Type[] typeArguments = ((ParameterizedType) this.getClass().getGenericSuperclass()).getActualTypeArguments();
		this.persistentClass = (Class<T>) typeArguments[0];
		
	}

	public JpaGenericRepository(EntityManager entityManager) {
		this();
	}

	@Override
	public void insert(T entity) {
		this.getEntityManager().getTransaction().begin();
		
		try{
			this.getEntityManager().persist(entity);
			this.getEntityManager().getTransaction().commit();
		}catch(PersistenceException pe){
			this.getEntityManager().getTransaction().rollback();
		}finally{
			this.getEntityManager().close();
		}
	}

	@Override
	public void update(T entity) {
		this.getEntityManager().getTransaction().begin();
		
		try{
			this.getEntityManager().merge(entity);
			this.getEntityManager().getTransaction().commit();
		}catch(PersistenceException pe){
			this.getEntityManager().getTransaction().rollback();
		}finally{
			this.getEntityManager().close();
		}
	}

	@Override
	public void delete(K id) {
		this.getEntityManager().getTransaction().begin();
		
		try{
			this.getEntityManager().remove(this.getEntityManager().getReference(this.getPersistentClass(), id));
			this.getEntityManager().getTransaction().commit();
		}catch(PersistenceException pe){
			this.getEntityManager().getTransaction().rollback();
		}finally{
			this.getEntityManager().close();
		}		
	}
	
	@Override
	public T findById(K id) {
		return this
				.getEntityManager()
				.find(this.getPersistentClass(), id);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<T> findAll() {
		return (List<T>) this.findByJPQL("FROM " + this.getPersistentClass().getSimpleName());
	}

	@Override
	public List<?> findByJPQL(String jpql, Object... params) {
		return this
				.createQuery(jpql, params)				
				.getResultList();
	}

	@Override
	public List<?> findByJPQL(String jpql, Map<String, Object> params) {
		return this
				.createQueryWithNamedParameter(jpql, params)
				.getResultList();		
	}
	
	public List<?> findByJPQLwithLimit(String jpql, Map<String, Object> params,int init, int max) {
		return this
				.createQueryWithNamedParameter(jpql, params)
				.setFirstResult(init)
				.setMaxResults(max)
				.getResultList();
	}
	
	@Override
	public Object findSingleResultByJPQL(String jpql, Object... params) {
		return this
				.createQuery(jpql, params)
				.getSingleResult();
	}
	
	@Override
	public Object findSingleResultByJPQL(String jpql, Map<String, Object> params) {
		return this.createQueryWithNamedParameter(jpql, params).getSingleResult();
	}

	protected Class<T> getPersistentClass() {
		if (this.persistentClass == null) {
			throw new IllegalStateException("PersistentClass has not been set on DAO before usage");
		}
		return this.persistentClass;
	}

	protected void setPersistentClass(Class<T> persistentClass) {
		this.persistentClass = persistentClass;
	}

	protected EntityManager getEntityManager() {
		if (this.entityManager == null) {
			throw new IllegalStateException("EntityManager has not been set on DAO before usage");
		}
		return this.entityManager;
	}

	protected void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public int count() {
		String jpql = "SELECT COUNT(*) FROM " + this.getPersistentClass().getSimpleName();
		return Integer.parseInt(this.createQuery(jpql).getSingleResult().toString());
	}

	private Query createQuery(String jpql, Object... params) {
		Query query = this.getEntityManager().createQuery(jpql);
		int i = 0;
		for (Object object : params) {			
			query.setParameter(++i, object);
		}
		return query;
	}

	private Query createQueryWithNamedParameter(String jpql, Map<String, Object> params) {
		Query query = this.getEntityManager().createQuery(jpql);
		Object[] keys = params.keySet().toArray();
		for (Object key : keys) {
			query.setParameter(key.toString(), params.get(key));
		}
		return query;
	}
	
	public boolean executeQuery(String jpql, Object... params){
		int result = 0;
		this.getEntityManager().getTransaction().begin();
		
		try{
			result = this.createQuery(jpql, params).executeUpdate();
			this.getEntityManager().getTransaction().commit();
		}catch(PersistenceException pe){
			this.getEntityManager().getTransaction().rollback();
		}finally{
			this.getEntityManager().close();
		}
		
		return (result == 1) ? true : false;
	}
}
