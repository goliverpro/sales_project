package com.dev.dsvendas.repositories;

import com.dev.dsvendas.entities.Sale;
import com.dev.dsvendas.entities.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
