/*

-- CREATE TABLE "users" (
--   "user_id" SERIAL PRIMARY KEY,
--   "username" varchar(50),
--   "password" varchar(100)
-- );

-- CREATE TABLE "crawl" (
--   "crawl_id" SERIAL PRIMARY KEY,
--   "user_id" INT references users(user_id),
--   "location" varchar
-- );

-- CREATE TABLE "comments" (
--   "comment_id" SERIAL PRIMARY KEY,
--   "user_id" INT references users(user_id),
--   "crawl_id" INT references crawl(crawl_id),
--   "text" varchar(1000)
-- );

-- INSERT into users( username, password)
-- VALUES ('josemolina', '123456');

-- INSERT into crawl(user_id, location)
-- VALUES (1,'https://maps.googleapis.com/maps/api/staticmap?center=147+W+Broadway,+Salt+Lake+City,+UT+84101&zoom=15&scale=1&size=500x500&maptype=roadmap&key=${googleApi}&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x00fffb%7Clabel:1%7C242+S+200+W,+Salt+Lake+City,+UT+84101&markers=size:mid%7Ccolor:0x073ab0%7Clabel:2%7C147+W+Broadway,+Salt+Lake+City,+UT+84101&markers=size:mid%7Ccolor:0x1c0165%7Clabel:3%7C326+S+W+Temple+St,+Salt+Lake+City,+UT+84101')

-- INSERT into crawl(user_id, location)
-- VALUES(1, 'https://maps.googleapis.com/maps/api/staticmap?center=31+E+400+S,+Salt+Lake+City,+UT+84111&zoom=18&scale=1&size=600x300&maptype=roadmap&key=${googleApi}&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x0088cc%7Clabel:1%7C31+E+400+S,+Salt+Lake+City,+UT+84111&markers=size:mid%7Ccolor:0x0008ff%7Clabel:2%7C369+S+Main+St,+Salt+Lake+City,+UT+84111&markers=size:mid%7Ccolor:0x7300ff%7Clabel:3%7C32+Exchange+Pl,+Salt+Lake+City,+UT+84111');

-- CREATE TABLE "bars" (
--   "bar_id" SERIAL PRIMARY KEY,
--   "crawl_id" INT references crawl(crawl_id),
--   "bar_name" varchar(100),
--   "bar_street" varchar(100),
--   "bar_city" varchar(100),
--   "bar_state" varchar(10),
--   "bar_zip" INT
-- );

-- INSERT into bars(crawl_id, bar_name, bar_street, bar_city,bar_state,bar_zip)
-- VALUES(1, 'Poplar Street Pub', '242 S 200 W', 'Salt Lake City', 'UT',84101),
-- (1, 'Squatters', '147 W Broadway', 'Salt Lake City', 'UT',84101),
-- (1, 'Gracies', '326 S W Temple St', 'Salt Lake City', 'UT',84101),
-- (2, 'Green Pig Pub', '31 E 400 S', 'Salt Lake City', 'UT',84111),
-- (2, 'Alibi', '369 S Main St', 'Salt Lake City', 'UT',84111),
-- (2, 'Twist', '32 Exchange Pl', 'Salt Lake City', 'UT',84111);

-- UPDATE crawl set location ='https://maps.googleapis.com/maps/api/staticmap?center=31+E+400+S,+Salt+Lake+City,+UT+84111&zoom=18&scale=1&size=500x500&maptype=roadmap&key=AIzaSyBJ4T4JThJNRtDgkkTcGj5TN5enJIg5AT0&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x0088cc%7Clabel:1%7C31+E+400+S,+Salt+Lake+City,+UT+84111&markers=size:mid%7Ccolor:0x0008ff%7Clabel:2%7C369+S+Main+St,+Salt+Lake+City,+UT+84111&markers=size:mid%7Ccolor:0x7300ff%7Clabel:3%7C32+Exchange+Pl,+Salt+Lake+City,+UT+84111'
-- WHERE location = 'https://maps.googleapis.com/maps/api/staticmap?center=31+E+400+S,+Salt+Lake+City,+UT+84111&zoom=18&scale=1&size=600x300&maptype=roadmap&key=AIzaSyBJ4T4JThJNRtDgkkTcGj5TN5enJIg5AT0&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x0088cc%7Clabel:1%7C31+E+400+S,+Salt+Lake+City,+UT+84111&markers=size:mid%7Ccolor:0x0008ff%7Clabel:2%7C369+S+Main+St,+Salt+Lake+City,+UT+84111&markers=size:mid%7Ccolor:0x7300ff%7Clabel:3%7C32+Exchange+Pl,+Salt+Lake+City,+UT+84111';

-- SELECT * FROM 
-- users WHERE username = 'josemolina'

-- ALTER TABLE crawl ADD crawl_name VARCHAR(100);

-- UPDATE crawl set crawl_name = 'Sweet And Sour'
-- WHERE crawl_id = 1;

-- UPDATE crawl set crawl_name = 'To Much Fun'
-- WHERE crawl_id = 2;

-- SELECT * FROM crawl AS c
-- inner JOIN bars AS b
-- ON c.crawl_id = b.crawl_id;

-- UPDATE crawl set crawl_name = 'Too Much Fun'
-- WHERE crawl_name = 'To Much Fun';

Delete from users
Where user_id = 1

*?