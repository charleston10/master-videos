package server.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name="parametertype")
public class ParameterType implements Serializable{

	private static final long serialVersionUID = -439891173175530385L;
	
	@Id
	@GeneratedValue
	@Column(name="prttid")
	private long id;
	
	@Column(name="prttname",nullable=false)
	private String name;	
	
	@Column(name="prttdescription",nullable=false)
	private String description;
	
	@Column(name="prttconstant",nullable=false)
	private String constant;
	
	@Column(name="prttvisible",nullable=false)
	private boolean visible;
	
	@Column(name="prttdisable",nullable=false)
	private boolean disable;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

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

	public String getConstant() {
		return constant;
	}

	public void setConstant(String constant) {
		this.constant = constant;
	}

	public boolean isVisible() {
		return visible;
	}

	public void setVisible(boolean visible) {
		this.visible = visible;
	}

	public boolean isDisable() {
		return disable;
	}

	public void setDisable(boolean disable) {
		this.disable = disable;
	}
}