-- Up Migration

CREATE TABLE users (
	id uuid NOT NULL,
	username varchar(25) NOT NULL,
	email varchar(100) NOT NULL,
	password varchar(100) NULL,
	class_id numeric NOT NULL
);

CREATE TABLE classes (
	id numeric NOT NULL,
	name varchar(50) NOT NULL,
	healith numeric NULL,
	damage numeric NOT NULL,
	attack_type varchar NOT NULL,
	ability varchar NOT NULL,
	created_at timestamp NOT NULL,
	updated_at timestamp NULL
);

