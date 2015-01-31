CREATE DATABASE avocado;

# Create matching mysql user for development:
CREATE USER 'guacman'@'localhost' IDENTIFIED BY 'Boundless1!';
GRANT ALL ON avocados.* TO 'guacman'@'localhost';

# TODO: tighten mysql user permissions to necessary only
