package server.model.constant;

/**
 * Constant in ENUM for the System
 * 
 * @author charleston.anjos
 *
 */
public enum ApplicationEnum {
	NAME {
		@Override
		public String toString() {
			return "MasterVideos";
		}
	},
	NAME_GOOGLE_DRIVE {
		@Override
		public String toString() {
			return "Driver API Excript";
		}
	},
	NAME_FLICKR {
		@Override
		public String toString(){
			return "Flickr API Excript";
		}
	}
}
