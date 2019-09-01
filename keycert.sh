#!/usr/bin/env bash
path=`dirname "$0"`/ssl
openssl genrsa 1024 > $path/private.key
openssl req -new -key $path/private.key -out $path/cert.csr
openssl x509 -req -in $path/cert.csr -signkey $path/private.key -out $path/certificate.pem

