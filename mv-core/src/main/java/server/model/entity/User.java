package server.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User implements Serializable {

	private static final long serialVersionUID = -439891173175530385L;
	
	@Id
	@GeneratedValue
	@Column(name="usrid")
	private long id;

	@Column(name="usrname",nullable=false)
	private String name;

	@Column(name="usrpassword",nullable=false)
	private String password;

	@Column(name="usremail",nullable=false)
	private String email;
	
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}	
}
