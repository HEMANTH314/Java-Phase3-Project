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
public class StocEchangeController {
	@Autowired
	private StockExchangerepo stkexrepo;
	
	@CrossOrigin
	@RequestMapping(value = "/stockExchanges/",method=RequestMethod.GET, headers = "Accept=application/json"  )
	public ResponseEntity<Object> getstkexs() {
		List<StockExchange> stkexlist =	stkexrepo.findAll();
		return  ResponseEntity.ok(stkexlist);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/stockExchanges/{id}",method=RequestMethod.GET, headers = "Accept=application/json"  )
	public ResponseEntity<Object> getbyidstkex(@PathVariable @RequestBody int id) {
		StockExchange stkex = stkexrepo.findById(id).orElse(null);
		return  ResponseEntity.ok(stkex);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/stockExchanges/",method=RequestMethod.POST, headers = "Accept=application/json"  )
	public ResponseEntity<Object> addstkex(@RequestBody StockExchange stkex) {
		StockExchange stkexsaved = stkexrepo.save(stkex);
		return  ResponseEntity.ok(stkexsaved);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/stockExchanges/",method=RequestMethod.PUT, headers = "Accept=application/json"  )
	public ResponseEntity<Object> updatedstkex(@RequestBody StockExchange stkex) {
		StockExchange stkexupdated = stkexrepo.save(stkex);
		return  ResponseEntity.ok(stkexupdated);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/stockExchanges/{id}",method=RequestMethod.DELETE, headers = "Accept=application/json"  )
	public ResponseEntity<Object> deletestkex(@PathVariable @RequestBody int id) {
		StockExchange stkexdelete = stkexrepo.findById(id).orElse(null);
		stkexrepo.deleteById(id);
		return  ResponseEntity.ok(stkexdelete);
	}
}
