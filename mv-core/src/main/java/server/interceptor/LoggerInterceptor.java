package server.interceptor;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import org.jboss.resteasy.annotations.interception.ServerInterceptor;
import org.jboss.resteasy.logging.Logger;

/**
 * Class for register log of access in server
 * 
 * @author charleston.anjos
 */

@Provider
@ServerInterceptor
public class LoggerInterceptor implements ContainerRequestFilter {	
	
	private final Logger LOG = Logger.getLogger(LoggerInterceptor.class);
	
	public void filter(ContainerRequestContext requestContext) throws IOException {	
		
		LOG.info("Access Request");	
		LOG.info(requestContext.getHeaderString("origin"));	
		LOG.info(requestContext.getHeaderString("user-agent"));
		LOG.info(requestContext.getMethod());
		LOG.info(requestContext.getUriInfo().getAbsolutePath().toString());
		
		/*if(!requestContext.getHeaderString("host").equalsIgnoreCase("localhost:8057")){
			LOG.warn("User cannot access the resource.");
			requestContext
					.abortWith(Response
                    .status(Response.Status.UNAUTHORIZED)
                    .entity("Access Denied!"
                    		+ "\n"
                    		+ "User cannot access the resource.")
                    .build());
			
		}*/
	}	
}
