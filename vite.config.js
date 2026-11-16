import { resolve } from 'path';
import { defineConfig } from 'vite';

// Pure Multi-Page HTML/CSS/JS Configuration (No React)
export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    open: false
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        schoolUniform: resolve(__dirname, 'school-uniform.html'),
        companyUniform: resolve(__dirname, 'company-uniform.html'),
        safetyProducts: resolve(__dirname, 'safety-products.html'),
        chefUniform: resolve(__dirname, 'chef-uniform.html'),
        graduationGown: resolve(__dirname, 'graduation-gown.html'),
        contact: resolve(__dirname, 'contact.html'),
        productDetails: resolve(__dirname, 'product-details.html'),
        cart: resolve(__dirname, 'cart.html')
      }
    }
  }
});
