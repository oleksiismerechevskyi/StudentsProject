
run:
ifneq (,$(findstring s, $(MAKEFLAGS)))
	docker compose up --build -d
else 
	docker compose up --build
endif

stop:
	docker compose down

create:
	docker compose create

clean:
	docker compose rm web
	docker compose rm postgres

migrate:
	docker compose exec web npm run migrate up

dropmigrate:
	docker compose exec web npm run migrate down



