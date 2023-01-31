
run:
ifneq (,$(findstring s, $(MAKEFLAGS)))
	docker compose up -d
else 
	docker compose up
endif

stop:
	docker compose down

create:
	docker compose create

clean:
	docker compose rm web
	docker compose rm postgres

migrate:
	docker compose exec web npm run migrate up db-init-migration --migration-filename-format=sql



