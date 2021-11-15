package com.example.WebApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class  UserController {
	@Autowired
	Userrepository userrepo;
	@CrossOrigin
	@RequestMapping(value = "/signup",method=RequestMethod.POST, headers = "Accept=application/json")
	
	public  ResponseEntity<Object> signup(@RequestBody User user){
		User usrsaved = userrepo.save(user);
		return ResponseEntity.ok(usrsaved);
	}
	
	@CrossOrigin
	//@PostMapping("/login")
	@RequestMapping(value = "/login",method=RequestMethod.POST, headers = "Accept=application/json")
	public ResponseEntity<User> login(@RequestBody User user){
	//public String login(@RequestBody User user) {
		User usr = userrepo.findById(user.getId()).orElse(user);//username(user.getusername()).orElse(null);
		if(usr.getAdmin()==null) {
			usr.setAdmin(false);
		}
		usr.setConfirmed(true);
		User updatedUser = userrepo.save(usr);
		return ResponseEntity.ok(updatedUser);
	}
	
	
}