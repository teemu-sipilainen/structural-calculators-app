# Structural Calculators App

### Database

```
docker run --name structural_calculators_app_di --env POSTGRES_DB=structural_calculators_app_db --env POSTGRES_USER=pguser --env POSTGRES_PASSWORD=pgpass -p 5432:5432 -d postgres:17.1
```