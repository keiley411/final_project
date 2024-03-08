CREATE TABLE IF NOT EXISTS products (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    category VARCHAR(20),
                    name VARCHAR(255) NOT NULL,
                    description VARCHAR(255),
                    price DECIMAL(10,3) NOT NULL,
                    image_url VARCHAR(255)
                )`;