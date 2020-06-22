#!/bin/bash

kubectl apply -f ./k8s/book-deployment.yml
kubectl apply -f ./k8s/purchase-deployment.yml
kubectl apply -f ./k8s/shop-deployment.yml
kubectl apply -f ./k8s/user-deployment.yml
kubectl apply -f ./k8s/book-service.yml
kubectl apply -f ./k8s/purchase-service.yml
kubectl apply -f ./k8s/shop-service.yml
kubectl apply -f ./k8s/user-service.yaml
kubectl create configmap book-env --from-env-file=./book-service/config --dry-run -o yaml | kubectl apply -f -
kubectl set env --from=configmap/book-env deployment/book-app