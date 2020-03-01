# Marvel characters API 

Simple app using marvel api to get a list of characters containing their name and image if available.

# Setup
``make copy-env``

Then fill the env file with variables (Marvel API keys needed)

# Install

### Requirements
- Docker 

A Makefile is used to install the project : 
``make pull`` : Pull needed images

``make build`` : Build the application

``make up`` : Launch the application


# Access
The API contains only 1 route : 
```http://<NODE_HOST>:<NODE_PORT>/v1/characters```

An additional offset param is needed to navigate through the offset

# Swagger
A swagger playground is accessible at the url :
```<baseUrl>/docs```

# Errors
Any error would trigger a 404 response from the API, a log message would be written anyway
