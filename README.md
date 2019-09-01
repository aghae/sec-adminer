# Secure Adminer 
#### Nodejs Secure Wrapper for php Adminer (GUI database Manager Specialy MySQL)

**Install**

```
Extract & cd to extracted folder
$ sudo apt-get install php-cgi
$ npm install
$ npm start

```

It run on port 8443 by default .you can change  port like this :
```
$ port=8000 npm start
```

by default it uses default certificate in ssl folder but 
you can generate your certifficate :
```
 $ ./keygen.sh
 $ npm run
```



good luck ;)