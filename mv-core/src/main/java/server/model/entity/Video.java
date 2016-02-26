package server.model.entity;

import java.io.Serializable;
import java.util.Calendar;
import java.util.List;

import javax.persistence.CascadeType;
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

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@Entity
@Table(name = "video")
@JsonIgnoreProperties(ignoreUnknown  = true)
public class Video implements Serializable {

	private static final long serialVersionUID = -5742152535185889257L;

	@Id
	@GeneratedValue
	@Column(name = "vidid")
	private long id;

	@Column(name = "vidname", nullable = false)
	private String name;

	@Column(name = "vidtitle", nullable = false)
	private String title;

	@Column(name = "viddescription", nullable = false)
	private String description;

	@Column(name = "vidcreatedate", nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Calendar createDate = Calendar.getInstance();

	@Column(name = "vidurl", nullable = false)
	private String url;

	@Column(name = "viddisable", nullable = false)
	private boolean disable;
	
	@Column(name = "vidfriendurl", nullable = false)
	private String friendUrl;

	@Column(name = "crsid", nullable = true)
	private long crsid;

	@Column(name = "imgid", nullable = true)
	private long imgid;

	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "imgid", referencedColumnName = "imgid", insertable = false, updatable = false)
	private Image image;

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "vidid", referencedColumnName = "vidid", insertable = false, updatable = false)
	private List<ParameterVideo> parameters;

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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public boolean isDisable() {
		return disable;
	}

	public void setDisable(boolean disable) {
		this.disable = disable;
	}

	public Calendar getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Calendar createDate) {
		this.createDate = createDate;
	}

	public long getImgid() {
		return imgid;
	}

	public void setImgid(long imgid) {
		this.imgid = imgid;
	}

	public long getCrsid() {
		return crsid;
	}

	public void setCrsid(long crsid) {
		this.crsid = crsid;
	}

	public String getFriendUrl() {
		return friendUrl;
	}

	public void setFriendUrl(String friendUrl) {
		this.friendUrl = friendUrl;
	}

	public List<ParameterVideo> getParameters() {
		return parameters;
	}

	public void setParameters(List<ParameterVideo> parameters) {
		this.parameters = parameters;
	}

	public Image getImage() {
		return image;
	}

	public void setImage(Image image) {
		this.image = image;
	}
}