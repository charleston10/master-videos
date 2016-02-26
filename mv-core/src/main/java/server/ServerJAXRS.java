package server;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

/**
 * Application main
 * 
 * @author charleston.anjos *
 */
@ApplicationPath("api")
public class ServerJAXRS extends Application {
	
	public ServerJAXRS(){
		System.out.println("Server online");
	}
}