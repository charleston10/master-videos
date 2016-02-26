package server.model.miscellaneous;

import java.io.Serializable;

import org.codehaus.jackson.annotate.JsonProperty;

public class Tag implements Serializable {

	private static final long serialVersionUID = -439891173175530385L;

	@JsonProperty(value="tagId")
	private int id;

	@JsonProperty(value="tagName")
	private String name;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
