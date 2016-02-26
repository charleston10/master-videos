package server.interceptor;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.ext.Provider;
import javax.ws.rs.ext.WriterInterceptor;
import javax.ws.rs.ext.WriterInterceptorContext;

import org.jboss.resteasy.annotations.interception.ServerInterceptor;

/**
 * Charset Provider Interceptor 
 * 
 * @author Charleston Anjos
 *
 */
@Provider
@ServerInterceptor
public class CharsetInterceptor implements WriterInterceptor {

	@Override
	public void aroundWriteTo(WriterInterceptorContext context) throws IOException, WebApplicationException {
		String keyHeader = "Content-Type";
		List<Object> contents = context.getHeaders().get(keyHeader);
		context.getHeaders().remove(keyHeader);

		for (Object object : contents) {
			context.getHeaders().add(keyHeader, object.toString() + "; charset=utf-8");
		}

		context.proceed();
	}
}