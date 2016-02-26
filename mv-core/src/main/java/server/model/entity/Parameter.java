package server.model.entity;

import java.io.Serializable;
import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="parameter")
public class Parameter implements Serializable {

	private static final long serialVersionUID = -439891173175530385L;

	@Id
	@GeneratedValue
	@Column(name="prtid")
	private long id;
	
	@Column(name="prtname",nullable=false)
	private String name;
	
	@Column(name="prtdescription",nullable=false)
	private String description;

	@Column(name="prtcreatedate",nullable=false)
	@Temporal(TemporalType.TIMESTAMP)
	private Calendar createDate = Calendar.getInstance();

	@Column(name="prtstartdate",nullable=false)
	@Temporal(TemporalType.TIMESTAMP)
	private Calendar startDate = Calendar.getInstance();

	@Column(name="prtenddate",nullable=true)
	@Temporal(TemporalType.TIMESTAMP)
	private Calendar endDate;

	@Column(name="prtdisable",nullable=false)
	private boolean disable;
	
	@Column(name="prttid", unique=false)	
	private long prttid;
	
	@OneToOne(optional=false)
	@JoinColumn(name="prttid",referencedColumnName="prttid",insertable=false,updatable=false)
	private ParameterType parameterType;
	
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

	public Calendar getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Calendar createDate) {
		this.createDate = createDate;
	}

	public Calendar getStartDate() {
		return startDate;
	}

	public void setStartDate(Calendar startDate) {
		this.startDate = startDate;
	}

	public Calendar getEndDate() {
		return endDate;
	}

	public void setEndDate(Calendar endDate) {
		this.endDate = endDate;
	}

	public boolean isDisable() {
		return disable;
	}

	public void setDisable(boolean disable) {
		this.disable = disable;
	}
	
	public ParameterType getParameterType() {
		return parameterType;
	}

	public void setParameterType(ParameterType parameterType) {
		this.parameterType = parameterType;
	}

	public long getPrttid() {
		return prttid;
	}

	public void setPrttid(long prttid) {
		this.prttid = prttid;
	}	
}