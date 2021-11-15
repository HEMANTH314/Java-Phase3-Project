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
public class StockPriceContoller {
	@Autowired
	private StockPricerepo stkprrepo;
	
	@CrossOrigin
	@RequestMapping(value = "/stock-price-service/stockPrices/",method=RequestMethod.GET, headers = "Accept=application/json"  )
	public ResponseEntity<Object> getstkprs() {
		List<StockPrice> stkprlist = stkprrepo.findAll();
		return  ResponseEntity.ok(stkprlist);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/stock-price-service/stockPrices/{id}",method=RequestMethod.GET, headers = "Accept=application/json"  )
	public ResponseEntity<Object> getbyidstkpr(@PathVariable @RequestBody int id) {
		StockPrice stkpr = stkprrepo.findById(id).orElse(null);
		return  ResponseEntity.ok(stkpr);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/stock-price-service/stockPrices/",method=RequestMethod.POST, headers = "Accept=application/json"  )
	public ResponseEntity<Object> addstkpr(@RequestBody List<StockPrice> stkprclist) {
		for(StockPrice i :stkprclist) {
		stkprrepo.save(i);
		}
		return  ResponseEntity.ok(stkprclist);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/stock-price-service/stockPrices/",method=RequestMethod.PUT, headers = "Accept=application/json"  )
	public ResponseEntity<Object> updatedstkpr(@RequestBody StockPrice stkprc) {
		StockPrice stkprupdated = stkprrepo.save(stkprc);
		return  ResponseEntity.ok(stkprupdated);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/stock-price-service/stockPrices/{id}",method=RequestMethod.DELETE, headers = "Accept=application/json"  )
	public ResponseEntity<Object> deletestkpr(@PathVariable @RequestBody int id) {
		StockPrice stkprdelete = stkprrepo.findById(id).orElse(null);
		stkprrepo.deleteById(id);
		return  ResponseEntity.ok(stkprdelete);
	}
}
