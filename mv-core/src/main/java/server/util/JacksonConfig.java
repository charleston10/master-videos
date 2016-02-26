package server.util;

import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;

import org.codehaus.jackson.Version;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.module.SimpleModule;

import server.util.serialize.VideoSerialize;

@Provider
public class JacksonConfig implements ContextResolver<ObjectMapper> {

    private ObjectMapper objectMapper;

    public JacksonConfig() {
        objectMapper = new ObjectMapper();
        SimpleModule module = new SimpleModule("server", new Version(1, 0, 0, null));
//        module.addSerializer(VideoSerialize.class, new VideoSerialize());
        objectMapper.registerModule(module);
    }

    public ObjectMapper getContext(Class<?> objectType) {
        return objectMapper;
    }

}