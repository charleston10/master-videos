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
@Table(name = "parametervideo")
public class ParameterVideo implements Serializable {

	private static final long serialVersionUID = -439891173175530385L;

	@Id
	@GeneratedValue
	@Column(name = "prtvid")
	private long id;

	@Column(name = "vidid",unique=false)
	private long vidid;

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

	public long getVidid() {
		return vidid;
	}

	public void setVidid(long vidid) {
		this.vidid = vidid;
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