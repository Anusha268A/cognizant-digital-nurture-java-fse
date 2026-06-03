CREATE TABLE Feedback (
    feedback_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    event_id INT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comments TEXT,
    feedback_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);

INSERT INTO Feedback
(feedback_id, user_id, event_id, rating, comments, feedback_date)
VALUES
(1, 3, 2, 4, 'Great insights!', '2025-05-16'),
(2, 4, 2, 5, 'Very informative.', '2025-05-16'),
(3, 2, 1, 3, 'Could be better.', '2025-06-11'),
(4, 1, 1, 5, 'Excellent event!', '2025-06-11'),
(5, 5, 3, 4, 'Well organized.', '2025-07-04'),
(6, 2, 5, 5, 'Loved the workshop.', '2025-06-21'),
(7, 3, 6, 4, 'Useful content.', '2025-04-19'),
(8, 4, 7, 5, 'Amazing speakers.', '2025-09-12'),
(9, 1, 8, 4, 'Great learning experience.', '2025-10-03'),
(10, 5, 4, 3, 'Good but lengthy.', '2025-08-06');