package com.example.WebApplication;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Company {
	@Id
	@GeneratedValue
	private int id;
	private String companyName;
	private String code;
	private String turnover;
	private String ceo;
	private String boardOfDirectors;
	private String stockExchangeNames;
	private String sectorName;
	private String companyBrief;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getTurnover() {
		return turnover;
	}
	public void setTurnover(String turnover) {
		this.turnover = turnover;
	}
	public String getCeo() {
		return ceo;
	}
	public void setCeo(String ceo) {
		this.ceo = ceo;
	}
	public String getBoardOfDirectors() {
		return boardOfDirectors;
	}
	public void setBoardOfDirectors(String boardOfDirectors) {
		this.boardOfDirectors = boardOfDirectors;
	}
	public String getStockExchangeNames() {
		return stockExchangeNames;
	}
	public void setStockExchangeNames(String stockExchangeNames) {
		this.stockExchangeNames = stockExchangeNames;
	}
	public String getSectorName() {
		return sectorName;
	}
	public void setSectorName(String sectorName) {
		this.sectorName = sectorName;
	}
	public String getCompanyBrief() {
		return companyBrief;
	}
	public void setCompanyBrief(String companyBrief) {
		this.companyBrief = companyBrief;
	}
	
}
