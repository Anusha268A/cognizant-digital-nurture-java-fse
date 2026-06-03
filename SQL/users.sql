-- create a table
CREATE TABLE Users (
  user_id INTEGER PRIMARY KEY,
  full_name varchar(100) NOT NULL,
  email varchar(100) unique NOT NULL,
    city varchar(100) not null,
    registration_date date not null
);
-- insert some values
INSERT INTO users VALUES (1, 'Ryan joseph', 'ryan@gmail.com','hyd','2026-05-20');
INSERT INTO users VALUES (2, 'Joanna', 'jo@gmail.com','hyd','2026-02-12');
INSERT INTO Users VALUES (3, 'Aarav Sharma', 'aarav@gmail.com', 'hyd', '2026-05-25');
INSERT INTO Users VALUES (4, 'Ananya Rao', 'ananya@gmail.com', 'hyd', '2026-05-10');
INSERT INTO Users VALUES (5, 'Vikram Malhotra', 'vikram@gmail.com', 'blr', '2026-04-15');
INSERT INTO Users VALUES (6, 'Sneha Patel', 'sneha@gmail.com', 'bom', '2026-05-28');
INSERT INTO Users VALUES (7, 'Rohan Das', 'rohan@gmail.com', 'ccu', '2025-12-25');
INSERT INTO Users VALUES (8, 'Priya Nair', 'priya@gmail.com', 'maa', '2026-05-01');
INSERT INTO Users VALUES (9, 'Kabir Singh', 'kabir@gmail.com', 'del', '2026-03-20');
INSERT INTO Users VALUES (10, 'Ishita Dutta', 'ishita@gmail.com', 'ccu', '2026-05-18');
INSERT INTO Users VALUES (11, 'Arjun Reddy', 'arjun@gmail.com', 'hyd', '2026-05-15');
INSERT INTO Users VALUES (12, 'Diya Kapoor', 'diya@gmail.com', 'del', '2026-02-28');
INSERT INTO Users VALUES (13, 'Aditya Verma', 'aditya@gmail.com', 'blr', '2026-05-22');
INSERT INTO Users VALUES (14, 'Meera Joshi', 'meera@gmail.com', 'pnq', '2026-04-30');
INSERT INTO Users VALUES (15, 'Rahul Mishra', 'rahul@gmail.com', 'lko', '2026-05-05');
INSERT INTO Users VALUES (16, 'Zara Khan', 'zara@gmail.com', 'bom', '2026-05-27');
INSERT INTO Users VALUES (17, 'Sai Kumar', 'sai@gmail.com', 'hyd', '2026-01-10');

-- fetch some values
SELECT * FROM users WHERE registration_date >= date_sub(curdate(),interval 30 day);

select * from users order by registration_date;

select city,count(*) from users group by city;

select city from users group by city having count(*)>=5;

select * from users where full_name like 'a%';


select city from users group by city having count(*)>=2;

SELECT user_id, full_name, registration_date FROM Users WHERE DAYOFWEEK(registration_date) IN (1, 7);

SELECT * FROM Users ORDER BY registration_date ASC LIMIT 1;

SELECT 
    DATE_FORMAT(registration_date, '%Y-%m') AS registration_month, 
    COUNT(*) AS total_users
FROM Users
GROUP BY registration_month ORDER BY registration_month ASC;