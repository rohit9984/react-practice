package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/products") // Sabhi endpoints ka base URL
public class ProductController {

    // Data store karne ke liye ek simple list (Bina database ke practice ke liye)
    private final List<Product> products = new ArrayList<>();
    private final AtomicLong idCounter = new AtomicLong();

    // Constructor: Jab application start ho toh 2 sample items pehle se add ho jayein
    public ProductController() {
        products.add(new Product(idCounter.incrementAndGet(), "Mechanical Keyboard", 89.99));
        products.add(new Product(idCounter.incrementAndGet(), "Wireless Mouse", 49.99));
    }

    // -------------------------------------------------------------
    // 1. GET ALL PRODUCTS: http://localhost:8080/api/products
    // -------------------------------------------------------------
    @GetMapping
    public List<Product> getAllProducts() {
        return products; // Spring automatically is list ko JSON array bana dega
    }

    // -------------------------------------------------------------
    // 2. GET PRODUCT BY ID: http://localhost:8080/api/products/1
    // -------------------------------------------------------------
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        // List mein id match karein
        for (Product product : products) {
            if (product.id().equals(id)) {
                return ResponseEntity.ok(product); // 200 OK ke saath product return karo
            }
        }
        return ResponseEntity.notFound().build(); // Agar product nahi mila toh 404 Not Found
    }

    // -------------------------------------------------------------
    // 3. ADD NEW PRODUCT (POST): http://localhost:8080/api/products
    // -------------------------------------------------------------
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product newProduct) {
        // Naya auto-incremented ID generate karein
        Product savedProduct = new Product(
            idCounter.incrementAndGet(), 
            newProduct.name(), 
            newProduct.price()
        );
        products.add(savedProduct);
        
        // 201 Created status ke saath naya product return karo
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
    }

    // -------------------------------------------------------------
    // 4. DELETE PRODUCT: http://localhost:8080/api/products/1
    // -------------------------------------------------------------
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        boolean removed = products.removeIf(product -> product.id().equals(id));
        if (removed) {
            return ResponseEntity.noContent().build(); // 204 No Content (Successfully deleted)
        }
        return ResponseEntity.notFound().build(); // Agar mila hi nahi toh 404
    }
}