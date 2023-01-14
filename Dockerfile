FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/high-tech-bank-ui /usr/share/nginx/html
VOLUME /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#docker build . -t justamitsaha/high-tech-bank-ui
#docker  run -d --name webapp2 -p 80:80 justamitsaha/high-tech-bank-ui
#docker  run -d --name webapp2 -p 80:80 --restart always justamitsaha/high-tech-bank-ui
