package server.util.serialize;

import java.io.IOException;

import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.JsonSerializer;
import org.codehaus.jackson.map.SerializerProvider;

import server.model.entity.Video;

/**
 * Class to Serialize Object Util
 * 
 * @author charleston.anjos
 *
 * @param <T> Class
 */
public class VideoSerialize extends JsonSerializer<Video>{
	
	@Override
    public void serialize(Video video, JsonGenerator jgen, SerializerProvider provider) 
      throws IOException, JsonProcessingException {
        jgen.writeStartObject();
        jgen.writeNumberField("id", video.getId());
        jgen.writeStringField("itemName", video.getName());
        jgen.writeEndObject();
    }
}
