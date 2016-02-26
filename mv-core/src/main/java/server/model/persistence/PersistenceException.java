package server.model.persistence;

/**
 * Class of Exception persist
 * 
 * @author charleston.anjos
 *
 */
public class PersistenceException extends RuntimeException {

	private static final long serialVersionUID = 836440581494268732L;

	public PersistenceException() {
		super();
	}

	public PersistenceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public PersistenceException(String message, Throwable cause) {
		super(message, cause);
	}

	public PersistenceException(String message) {
		super(message);
	}

	public PersistenceException(Throwable cause) {
		super(cause);
	}

}
