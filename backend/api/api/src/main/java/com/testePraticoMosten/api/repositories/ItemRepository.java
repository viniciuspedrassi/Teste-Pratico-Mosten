package com.testePraticoMosten.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.testePraticoMosten.api.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

	@Query("SELECT SUM(i.gostei) FROM Item i")
	Integer totalGostei();

	@Query("SELECT SUM(i.naoGostei) FROM Item i")
	Integer totalNaoGostei();
}
