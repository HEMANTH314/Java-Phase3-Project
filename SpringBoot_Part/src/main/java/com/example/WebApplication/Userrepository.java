package com.example.WebApplication;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Userrepository extends JpaRepository<User, Long> {

	Optional<User> findByusername(String getusername);
 
	
}