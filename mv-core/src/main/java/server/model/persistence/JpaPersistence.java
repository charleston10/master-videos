package server.model.persistence;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 * JPA Persistence
 * 
 * @author charleston.anjos
 *
 */
public class JpaPersistence{
	
	private static EntityManagerFactory emf;

	public JpaPersistence(){
		if(emf==null){
			emf = Persistence.createEntityManagerFactory("webapp");
		}
	}
	
	public EntityManager getEntityManager() {
		return emf.createEntityManager();
	}

	public void close(EntityManager em) {
		if(em != null){
			em.close();
		}
	}
}