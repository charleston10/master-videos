package server.util;

public class LogUtil {
	
	private static LogUtil logSingleton;
	
	public LogUtil getInstance(){
		logSingleton = (logSingleton==null) ? new LogUtil() : logSingleton;
		return logSingleton;
	}

	public static void LOG(String type,String log){
		switch (type) {
			case "E":
				System.err.println(log);
			break;
	
			default:
				System.out.println(log);
		}
	}
}
