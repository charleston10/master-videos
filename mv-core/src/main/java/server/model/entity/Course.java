package server.model.entity;

import java.io.Serializable;
import java.util.Calendar;
import java.util.List;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import org.codehaus.jackson.annotate.JsonAutoDetect;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonProperty;
import org.codehaus.jackson.map.annotate.JsonSerialize;

import server.model.entity.abstracts.Lesson;

@Entity
@Table(
	name="course", 
	uniqueConstraints = @UniqueConstraint(columnNames = { "crsfriendurl" })
)
@AttributeOverrides({
		@AttributeOverride(name="name",column=@Column(name="crsname",nullable=false)),
		@AttributeOverride(name="description",column=@Column(name="crsdescription",nullable=false)),
		@AttributeOverride(name="createDate",column=@Column(name="crscreateDate",nullable=false)),
		@AttributeOverride(name="disable",column=@Column(name="crsdisable",nullable=false))
})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "ignoreUnknown "})
public class Course extends Lesson implements Serializable {

	private static final long serialVersionUID = -1605930516447452095L;

	@Id
	@GeneratedValue
	@Column(name = "crsid")
	private long id;
	
	@Column(name = "crsstartdate", nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Calendar startDate = Calendar.getInstance();

	@Column(name = "crsenddate", nullable = true)
	@Temporal(TemporalType.TIMESTAMP)
	private Calendar endDate;
	
	@Column(name = "imgid", nullable = false)
	private String imgid;
	
	@Column(name = "crsfriendurl", nullable = false)
	private String friendUrl;
	
	@OneToOne(optional = true)
	@JoinColumn(name = "imgid", referencedColumnName = "imgid", insertable = false, updatable = false)
	private Image image;
//	
//	@OneToMany(fetch=FetchType.LAZY)
//	@JoinColumn(name = "crsid", referencedColumnName = "crsid", insertable = false, updatable = false)
//	private List<Video> videos;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public String getImgid() {
		return imgid;
	}

	public void setImgid(String imgid) {
		this.imgid = imgid;
	}

	public String getFriendUrl() {
		return friendUrl;
	}

	public void setFriendUrl(String friendUrl) {
		this.friendUrl = friendUrl;
	}
//
//	public List<Video> getVideos() {
//		return videos;
//	}
//
//	public void setVideos(List<Video> videos) {
//		this.videos = videos;
//	}
//
	public Image getImage() {
		return image;
	}

	public void setImage(Image image) {
		this.image = image;
	}
}