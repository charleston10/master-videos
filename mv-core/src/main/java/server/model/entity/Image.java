package server.model.entity;

import java.io.Serializable;
import java.util.Calendar;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.ws.rs.FormParam;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.jboss.resteasy.annotations.providers.multipart.PartType;

@Entity
@Table(name="image")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Image implements Serializable {
	
	private static final long serialVersionUID = 4823300001217426362L;

	@Id
	@GeneratedValue
	@Column(name = "imgid")
	private long id;	

	@Column(name = "imgname", nullable = true)
	private String name;
	
	@Column(name = "imgcreatedate", nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Calendar createDate = Calendar.getInstance();
	
	@Lob 
	@Basic(fetch = FetchType.LAZY)
	@Column(name = "imgbyte", nullable = false)
	private byte[] blob;	
	
	@Lob
	@Basic(fetch = FetchType.LAZY)		
	@Column(name = "imgbase64", nullable = false, columnDefinition = "LONGTEXT")
	private String base64;

	@Column(name="imgmimetype")
	private String mimetype;
	
	@Column(name="imgsize")
	private String size;
	
	@Column(name="prtid") //descrive the folder of image
	private int prtid;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	@FormParam("name")
	public void setName(String name) {
		this.name = name;
	}

	public Calendar getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Calendar createDate) {
		this.createDate = createDate;
	}	

	public byte[] getBlob() {
		return blob;
	}

	@FormParam("file")
	@PartType("application/octet-stream")
	public void setBlob(byte[] blob) {
		this.blob = blob;
	}	
	
	public String getBase64() {		
		return base64;
	}

	public void setBase64(String base64) {
		this.base64 = base64;
	}
	
	public String getMimetype() {
		return mimetype;
	}

	@FormParam("type")
	public void setMimetype(String mimetype) {
		this.mimetype = mimetype;
	}
	
	public String getSize() {
		return size;
	}

	@FormParam("size")
	public void setSize(String size) {
		this.size = size;
	}

	public int getPrtid() {
		return prtid;
	}

	@FormParam("folder")
	public void setPrtid(int prtid) {
		this.prtid = prtid;
	}
}