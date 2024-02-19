up:
	docker compose up -d --force-recreate
build:
	docker compose up -d --build
pz:
	docker compose exec paiza sh