#!/bin/bash

kubectl delete service/book-service
kubectl delete service/purchase-service
kubectl delete service/shop-service
kubectl delete service/user-service