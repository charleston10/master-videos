package server.model.entity.abstracts;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@MappedSuperclass
public abstract class Lesson {
		
	@Column(name="name")
	private String name;
	
	@Column(name="description")
	private String description;
	
	@Column(name="createDate")
	@Temporal(TemporalType.TIMESTAMP)
	private Calendar createDate = Calendar.getInstance();
	
	@Column(name="disable")
	private boolean disable;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Calendar getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Calendar createDate) {
		this.createDate = createDate;
	}

	public boolean isDisable() {
		return disable;
	}

	public void setDisable(boolean disable) {
		this.disable = disable;
	}	
}