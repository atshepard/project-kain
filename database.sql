
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	"display_name" varchar(255) NOT NULL,
	"profile_image" varchar(255) NOT NULL
);

CREATE TABLE "trip" (
	"id" serial NOT NULL,
	"location_name" varchar(255) NOT NULL,
	"latitude" int NOT NULL,
	"longitude" int NOT NULL,
	"start_date" DATE NOT NULL,
	"end_date" DATE NOT NULL
);

CREATE TABLE "user_trip" (
	"id" serial NOT NULL,
	"user_id" int REFERENCES "user",
	"trip_id" int REFERENCES "trip");

CREATE TABLE "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"link" varchar(255) NOT NULL,
	"media_type" varchar(20) NOT NULL,
	"trip_id" int REFERENCES "trip");

CREATE TABLE "pin" (
	"id" serial PRIMARY KEY NOT NULL,
	"pin_name" varchar(255) NOT NULL,
	"pin_desc" varchar(500) NOT NULL,
	"latitude" int NOT NULL,
	"longitude" int NOT NULL,
	"category" varchar(20) NOT NULL,
	"trip_id" int REFERENCES "trip");

CREATE TABLE "reflections" (
	"id" serial PRIMARY KEY NOT NULL,
	"reflection" varchar(25) NOT NULL,
	"user_trip_id" int REFERENCES "user_trip");

CREATE TABLE "friends" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_1_id" int REFERENCES "user",
	"user_2_id" int REFERENCES "user");

