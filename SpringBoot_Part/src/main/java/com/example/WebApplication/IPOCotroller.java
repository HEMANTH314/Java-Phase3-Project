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
public class IPOCotroller {
	@Autowired
	private IPOrepo iporepo;
	
	@CrossOrigin
	@RequestMapping(value = "/ipos/",method=RequestMethod.GET, headers = "Accept=application/json"  )
	public ResponseEntity<Object> getipos() {
		List<IPO> ipolist =	iporepo.findAll();
		return  ResponseEntity.ok(ipolist);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/ipos/{id}",method=RequestMethod.GET, headers = "Accept=application/json"  )
	public ResponseEntity<Object> getbyidipo(@PathVariable @RequestBody int id) {
		IPO ipo = iporepo.findById(id).orElse(null);
		return  ResponseEntity.ok(ipo);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/ipos/",method=RequestMethod.POST, headers = "Accept=application/json"  )
	public ResponseEntity<Object> addipo(@RequestBody IPO ipo) {
		IPO iposaved = iporepo.save(ipo);
		return  ResponseEntity.ok(iposaved);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/ipos/",method=RequestMethod.PUT, headers = "Accept=application/json"  )
	public ResponseEntity<Object> updatedipo(@RequestBody IPO ipo) {
		IPO ipoupdated = iporepo.save(ipo);
		return  ResponseEntity.ok(ipoupdated);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/ipos/{id}",method=RequestMethod.DELETE, headers = "Accept=application/json"  )
	public ResponseEntity<Object> deleteipo(@PathVariable @RequestBody int id) {
		IPO ipodelete = iporepo.findById(id).orElse(null);
		iporepo.deleteById(id);
		return  ResponseEntity.ok(ipodelete);
	}
}
