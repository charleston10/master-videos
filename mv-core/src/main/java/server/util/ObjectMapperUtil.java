package server.util;

import org.codehaus.jackson.map.ObjectMapper;

public final class ObjectMapperUtil {
	
	private ObjectMapperUtil() {
		super();
	}
	
	// TODO: Config the objectMapper
	public static ObjectMapper newUnwrappedInstance() {
		final ObjectMapper objectMapper = new ObjectMapper();

//		objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
//		objectMapper.configure(DeserializationFeature.FAIL_ON_NULL_FOR_PRIMITIVES, false);
//		objectMapper.configure(DeserializationFeature.FAIL_ON_NUMBERS_FOR_ENUMS, false);
//		objectMapper.configure(DeserializationFeature.FAIL_ON_INVALID_SUBTYPE, false);
//		objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, false);
//		objectMapper.configure(DeserializationFeature.UNWRAP_ROOT_VALUE, false);
//		objectMapper.configure(SerializationFeature.EAGER_SERIALIZER_FETCH, true);
//		objectMapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);

		return objectMapper;
	}

	public static ObjectMapper newWrappedInstance() {
		final ObjectMapper objectMapper = new ObjectMapper();

//		objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
//		objectMapper.configure(DeserializationFeature.FAIL_ON_NULL_FOR_PRIMITIVES, false);
//		objectMapper.configure(DeserializationFeature.FAIL_ON_NUMBERS_FOR_ENUMS, false);
//		objectMapper.configure(DeserializationFeature.FAIL_ON_INVALID_SUBTYPE, false);
//		objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, false);
//		objectMapper.configure(DeserializationFeature.UNWRAP_ROOT_VALUE, true);
//		objectMapper.configure(SerializationFeature.EAGER_SERIALIZER_FETCH, true);
//		objectMapper.configure(SerializationFeature.WRAP_ROOT_VALUE, true);

		return objectMapper;
	}
	
}
