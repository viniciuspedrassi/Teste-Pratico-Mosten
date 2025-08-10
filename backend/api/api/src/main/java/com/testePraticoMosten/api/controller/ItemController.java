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
import com.testePraticoMosten.api.repositories.ItemRepository;

@RestController
@RequestMapping("/api/itens")
public class ItemController {

	private ItemRepository ir;

	public ItemController(ItemRepository itemRepository) {
		this.ir = itemRepository;
	}

	@GetMapping
	public List<Item> listarTodos() {
		return ir.findAll();
	}

	@PostMapping
	public Item adicionar(@RequestBody Item item) {
		return ir.save(item);
	}
	
	@DeleteMapping("/{id}")
	public void deletar(@PathVariable Long id) {
	Item item = ir.findById(id).orElseThrow();
    ir.delete(item);
	}

	@PutMapping("/{id}/gostei")
	public Item votarGostei(@PathVariable Long id) {
		Item item = ir.findById(id).orElseThrow();
		item.setGostei(item.getGostei() + 1);
		return ir.save(item);
	}

	@PutMapping("/{id}/nao-gostei")
	public Item votarNaoGostei(@PathVariable Long id) {
		Item item = ir.findById(id).orElseThrow();
		item.setNaoGostei(item.getNaoGostei() + 1);
		return ir.save(item);
	}

	@GetMapping("/total-gostei")
	public Integer totalGostei() {
		return ir.totalGostei();
	}

	@GetMapping("/total-nao-gostei")
	public Integer totalNaoGostei() {
		return ir.totalNaoGostei();
	}

}
