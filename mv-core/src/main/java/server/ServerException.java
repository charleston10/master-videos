package server;

/**
 * Class of Exception Server
 * 
 * @author charleston.anjos
 *
 */
public class ServerException extends RuntimeException {

	private static final long serialVersionUID = -6284270602396834471L;

	public ServerException() {
		super();
	}

	public ServerException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public ServerException(String message, Throwable cause) {
		super(message, cause);
	}

	public ServerException(String message) {
		super(message);
	}

	public ServerException(Throwable cause) {
		super(cause);
	}

}
