# Secure Adminer 
#### Nodejs Secure Wrapper for Adminer.php (GUI database Manager Specialy MySQL)

**Install**

```
Extract & cd to extracted folder
$ sudo apt-get install php-cgi
$ npm install
$ npm start

```

it run on port 8443 by default .for changing port for example 8000
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