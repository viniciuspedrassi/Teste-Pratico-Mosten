package com.testePraticoMosten.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.testePraticoMosten.api.model.Item;
import com.testePraticoMosten.api.services.ItemService;

@RestController
@RequestMapping("/api/itens")
public class ItemController {

	private ItemService itemService;

	public ItemController(ItemService itemService) {
		this.itemService = itemService;
	}

	@GetMapping
	public List<Item> listarTodos() {
		return itemService.listarTodos();
	}

	@PostMapping
	public Item adicionar(@RequestBody Item item) {
		return itemService.adicionar(item);
	}
	
	@DeleteMapping("/{id}")
	public void deletar(@PathVariable Long id) {
	itemService.deletar(id);
	}

	@PutMapping("/{id}/gostei")
	public Item votarGostei(@PathVariable Long id) {
		return itemService.votarGostei(id);
	}

	@PutMapping("/{id}/nao-gostei")
	public Item votarNaoGostei(@PathVariable Long id) {
		return itemService.votarNaoGostei(id);
	}

	@GetMapping("/total-gostei")
	public Integer totalGostei() {
		return itemService.totalGostei();
	}

	@GetMapping("/total-nao-gostei")
	public Integer totalNaoGostei() {
		return itemService.totalNaoGostei();
	}

}
