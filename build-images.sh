#!/bin/bash

npm run build --prefix $PWD/book-service
npm run build --prefix $PWD/purchase-service
npm run build --prefix $PWD/shop-service
npm run build --prefix $PWD/user-service