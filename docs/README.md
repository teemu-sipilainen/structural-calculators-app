```
docker build `
  --build-arg NODE_ENV=production `
  --build-arg PORT=3000 `
  --build-arg PG_HOST=structural_calculators_app_docker_database_image `
  --build-arg PG_PORT=5432 `
  --build-arg PG_SSL=false `
  --build-arg PG_USERNAME=pguser `
  --build-arg PG_PASSWORD=pgpass `
  --build-arg PG_DATABASE=structural_calculators_app_db `
  --build-arg SECRET=NOTSET `
  -t structural_calculators_app_docker_app_image `
  .
```

```
docker network create structural_calculators_app_docker_network
```

```
docker run `
  --name structural_calculators_app_docker_database_container `
  --network structural_calculators_app_docker_network `
  -p 5432:5432 `
  -d postgres:17.1
```

```
docker run `
  -it `
  -p 3000:3000 `
  --name structural_calculators_app_docker_app_container `
  --network structural_calculators_app_docker_network `
  structural_calculators_app_docker_app_image
```
