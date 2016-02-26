package server.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "parameterimage")
public class ParameterImage implements Serializable {

	private static final long serialVersionUID = -439891173175530385L;

	@Id
	@GeneratedValue
	@Column(name = "prtimg")
	private long id;	

	@Column(name = "imgid")
	private long imgid;

	@Column(name = "prtid",unique=false)
	private long prtid;

	@OneToOne(optional=false)
	@JoinColumn(name = "prtid", referencedColumnName = "prtid", insertable = false, updatable = false)
	private Parameter parameter;	
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getImgid() {
		return imgid;
	}

	public void setImgid(long imgid) {
		this.imgid = imgid;
	}

	public long getPrtid() {
		return prtid;
	}

	public void setPrtid(long prtid) {
		this.prtid = prtid;
	}

	public Parameter getParameter() {
		return parameter;
	}

	public void setParameter(Parameter parameter) {
		this.parameter = parameter;
	}
}
