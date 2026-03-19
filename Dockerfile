# Usa la imagen oficial de Nginx (Alpine para un tamaño mínimo)
FROM nginx:1.27-alpine

# Elimina la configuración por defecto de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia nuestra configuración personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia todos los archivos del sitio al directorio raíz de Nginx
COPY . /usr/share/nginx/html/

# Expone el puerto 80
EXPOSE 80

# Nginx arranca automáticamente con la imagen base
