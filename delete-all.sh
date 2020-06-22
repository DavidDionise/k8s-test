#!/bin/bash

kubectl delete service/book-service
kubectl delete service/purchase-service
kubectl delete service/shop-service
kubectl delete service/user-service
kubectl delete deployment/book-app
kubectl delete deployment/purchase-app
kubectl delete deployment/shop-app
kubectl delete deployment/user-app
kubectl delete configmap/book-env