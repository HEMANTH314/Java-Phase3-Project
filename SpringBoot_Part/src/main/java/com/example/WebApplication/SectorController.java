package com.example.WebApplication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SectorController {
	@Autowired
	private Sectorrepo secrepo;
	
	@CrossOrigin
	@RequestMapping(value = "/sectors",method=RequestMethod.GET, headers = "Accept=application/json"  )
	public  ResponseEntity<Object> getsectors(){
		List<Sector> sctrsaved = secrepo.findAll();
		return ResponseEntity.ok(sctrsaved);
	}
	
	@CrossOrigin
	@GetMapping(value = "/sectors/{id}",headers = "Accept=application/json"  )
	//@RequestMapping(path = "/sectors/{id}",method=RequestMethod.DELETE, headers = "Accept=application/json"  )
	public  ResponseEntity<Object> getbyidsector(@PathVariable @RequestBody Integer id){
		Sector sctr= secrepo.findById(id).orElse(null);
		return ResponseEntity.ok(sctr);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/sectors",method=RequestMethod.POST, headers = "Accept=application/json"  )
	public  ResponseEntity<Object> addsector(@RequestBody Sector sector){
		Sector sctrsaved = secrepo.save(sector);
		return ResponseEntity.ok(sctrsaved);
	}
	
	@CrossOrigin
	@PutMapping(value = "/sectors",headers = "Accept=application/json"  )
	public ResponseEntity<Object> updatesector(@RequestBody Sector sector){
		Sector sctrupdated = secrepo.save(sector);
		return ResponseEntity.ok(sctrupdated);
	}
	
	@CrossOrigin
	@DeleteMapping(value = "/sectors/{id}",headers = "Accept=application/json"  )
	//@RequestMapping(path = "/sectors/{id}",method=RequestMethod.DELETE, headers = "Accept=application/json"  )
	public  ResponseEntity<Object> deletesector(@PathVariable @RequestBody Integer id){
		Sector sctrdelete = secrepo.findById(id).orElse(null);
		secrepo.deleteById(id);
		return ResponseEntity.ok(sctrdelete);
	}
	
}
 