CREATE TABLE Sessions (
    session_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    title VARCHAR(200) NOT NULL,
    speaker_name VARCHAR(100) NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);

INSERT INTO Sessions
(event_id, title, speaker_name, start_time, end_time)
VALUES
(1, 'Opening Keynote',
 'Dr. Tech',
 '2025-06-10 10:00:00',
 '2025-06-10 11:00:00'),

(1, 'Future of Web Development',
 'Alice Johnson',
 '2025-06-10 11:15:00',
 '2025-06-10 12:30:00'),

(2, 'AI in Healthcare',
 'Charlie Lee',
 '2025-05-15 09:30:00',
 '2025-05-15 11:00:00'),

(3, 'Introduction to HTML5',
 'Bob Smith',
 '2025-07-01 10:00:00',
 '2025-07-01 12:00:00'),

(4, 'Network Security Basics',
 'John Miller',
 '2025-08-05 09:00:00',
 '2025-08-05 10:30:00'),

(4, 'Ethical Hacking Workshop',
 'Sarah Wilson',
 '2025-08-05 11:00:00',
 '2025-08-05 01:00:00'),

(5, 'AWS Cloud Fundamentals',
 'David Brown',
 '2025-06-20 10:00:00',
 '2025-06-20 11:30:00'),

(6, 'Data Visualization with Python',
 'Emma Davis',
 '2025-04-18 09:30:00',
 '2025-04-18 11:00:00'),

(7, 'Modern JavaScript',
 'Michael Scott',
 '2025-09-10 10:00:00',
 '2025-09-10 11:30:00'),

(8, 'Flutter App Development',
 'Kevin Hart',
 '2025-10-01 09:00:00',
 '2025-10-01 11:00:00');