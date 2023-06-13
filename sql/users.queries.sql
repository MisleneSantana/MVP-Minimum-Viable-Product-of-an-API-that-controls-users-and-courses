-- POST / users:
INSERT INTO
    "users" (% I)
VALUES
    (% L) RETURNING *;

-- GET / users:
SELECT
    *
FROM
    "users";