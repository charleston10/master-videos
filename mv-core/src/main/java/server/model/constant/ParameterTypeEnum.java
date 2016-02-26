package server.model.constant;

/**
 * Constant in ENUM for the System with relation the parameter
 * 
 * @author charleston.anjos
 *
 */
public enum ParameterTypeEnum {

	VERSION {
		@Override
		public String toString() {
			return "PARAMETER_TYPE_VERSION";
		}
	},
	REVISION {
		@Override
		public String toString() {
			return "PARAMETER_TYPE_REVISION";
		}
	},
	CLASSIFICATION {
		@Override
		public String toString() {
			return "PARAMETER_TYPE_CLASSIFICATION";
		}
	},
	STATUS {
		@Override
		public String toString() {
			return "PARAMETER_TYPE_STATUS";
		}
	},
	PERMISSION {
		@Override
		public String toString() {
			return "PARAMETER_TYPE_PERMISSION";
		}
	},
	PROGRAMMING_LANGUAGE {
		@Override
		public String toString() {
			return "PARAMETER_TYPE_PROGRAMMING_LANGUAGE";
		}
	},
	TAG {
		@Override
		public String toString() {
			return "PARAMETER_TYPE_TAG";
		}
	},
	VIDEO {
		@Override
		public String toString() {
			return "PARAMETER_TYPE_VIDEO";
		}
	},
	MENU {
		@Override
		public String toString() {
			return "PARAMETER_TYPE_MENU";
		}
	},
}