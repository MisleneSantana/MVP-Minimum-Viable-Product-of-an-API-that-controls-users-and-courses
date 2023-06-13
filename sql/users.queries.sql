-- POST / users:
INSERT INTO
    "users" (% I)
VALUES
    (% L) RETURNING *;
-- 
select
    *
from
    users;

