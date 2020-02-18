FROM nginx:1.17.8

COPY ./dist /usr/share/nginx/html

EXPOSE 80
