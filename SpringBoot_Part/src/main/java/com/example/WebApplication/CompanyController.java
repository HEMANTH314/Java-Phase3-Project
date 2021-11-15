package com.example.WebApplication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CompanyController {
	@Autowired
	private Companyrepo cmprepo;
	
	@CrossOrigin
	@RequestMapping(value = "/company-service/companies/",method=RequestMethod.GET, headers = "Accept=application/json"  )
	public ResponseEntity<Object> getcompanies() {
		List<Company> cmplist = cmprepo.findAll();
		return  ResponseEntity.ok(cmplist);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/company-service/companies/{id}",method=RequestMethod.GET, headers = "Accept=application/json"  )
	public ResponseEntity<Object> getbyidcompany(@PathVariable @RequestBody int id) {
		Company cmp = cmprepo.findById(id).orElse(null);
		return  ResponseEntity.ok(cmp);
	}
	
	
	@CrossOrigin
	//@PostMapping("http://localhost:8080/company-service/companies/")
	@RequestMapping(value = "/company-service/companies/",method=RequestMethod.POST, headers = "Accept=application/json"  )
	public ResponseEntity<Object> createcompany(@RequestBody Company cmp) {
		Company cmpsaved = cmprepo.save(cmp);
		return  ResponseEntity.ok(cmpsaved);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/company-service/companies/",method=RequestMethod.PUT, headers = "Accept=application/json"  )
	public ResponseEntity<Object> updatecompany(@RequestBody Company cmp) {
		
		Company cmpupdated = cmprepo.save(cmp);
		return  ResponseEntity.ok(cmpupdated);
	}
	
	
	@CrossOrigin
	@RequestMapping(value = "/company-service/companies/{id}",method=RequestMethod.DELETE, headers = "Accept=application/json"  )
	public ResponseEntity<Object> deletecompany(@PathVariable @RequestBody int id) {
		Company cmpdelete = cmprepo.findById(id).orElse(null);
		cmprepo.deleteById(id);
		return  ResponseEntity.ok(cmpdelete);
	}
	
	
}
