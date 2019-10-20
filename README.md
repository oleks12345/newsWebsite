This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# newsWebsite
Website for displaying news using api

## usage

backend location ( example.com/api/news ) is handled by nginx.
you should use proxy_pass to do it.
example
in *site config*
```nginx
server {
   location /api/news/ {
      proxy_pass http://example.com:YOUR_PORT/;
      # YOUR_PORT should be same as in backend/.env 
   }
}
```
YOUR_PORT should be same as in *backend/.env* 

remember that you need newsApi api key to use on backend 