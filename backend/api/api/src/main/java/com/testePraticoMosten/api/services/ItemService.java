package com.testePraticoMosten.api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.testePraticoMosten.api.model.Item;
import com.testePraticoMosten.api.repositories.ItemRepository;

@Service
public class ItemService {

	private ItemRepository ir;
	
	public ItemService ( ItemRepository itemRepository) {
		this.ir = itemRepository;
	}
	
	public List<Item> listarTodos(){
		return ir.findAll();
		}
	
	public Item adicionar(Item item) {
		return ir.save(item);
	}
	
	public void deletar (Long id) {
		Item item = ir.findById(id).orElseThrow();
		ir.delete(item);
	}
	
	public Item votarGostei(Long id) {
		Item item = ir.findById(id).orElseThrow();
		item.setGostei(item.getGostei() + 1);
		return ir.save(item);
	}
	
	public Item votarNaoGostei(Long id) {
		Item item = ir.findById(id).orElseThrow();
		item.setNaoGostei(item.getNaoGostei() + 1);
		return ir.save(item);
	}
	
	public Integer totalGostei() {
		return ir.totalGostei();
	}
	
	public Integer totalNaoGostei() {
		return ir.totalNaoGostei();
	}
	
}
