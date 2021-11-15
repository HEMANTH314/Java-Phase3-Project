package com.example.WebApplication;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Companyrepo extends JpaRepository<Company, Integer> {

}
