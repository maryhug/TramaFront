UserController (/trama)


POST /auth/login
POST /users/save
GET /users
GET /users/id/{id}
GET /users/email/{email}
PUT /users/update/{id}
DELETE /users/delete/{id}
GET /users/name/{name}
ReviewController (/trama)


GET /reviews
GET /reviews/{id}
POST /reviews/save
POST /reviews/update/{id}
GET /reviews/delete/{id}
GET /reviews/user/{userId}
CommentController (/trama)


GET /comments/review/{reviewId}
GET /comments/{id}
POST /comments
PUT /comments/{id}
DELETE /comments/{id}
MovieController (/movies)


GET /id/{id}
GET /title/{title}
GET /popular/{period}
FollowerController (/trama/followers)


GET /followers/{userId}
GET /following/{userId}
POST /follow (Requiere followerId y followedId como @RequestParam)
DELETE /unfollow (Requiere followerId y followedId como @RequestParam)
GET /is-following (Requiere followerId y followedId como @RequestParam)
ListController (/trama/lists)


POST /create
DELETE /remove-list/{id}
POST /add-movie
POST /remove-movie
GET /{id}
POST /favorites/add
GET /user/{userId}
ReviewLikeController (/trama/review-likes)


GET /review/{reviewId}
POST /like (Requiere reviewId y userId como @RequestParam)
GET /liked (Requiere reviewId y userId como @RequestParam)
GET /user/{userId}/liked-reviews
CommentLikeController (/trama/comment-likes)


GET /comment/{commentId}
POST /like (Requiere commentId y userId como @RequestParam)
DELETE /like (Requiere commentId y userId como @RequestParam)
GET /liked (Requiere commentId y userId como @RequestParam)
ListLikeController (/trama/list-likes)


GET /list/{listId}
POST /like (Requiere listId y userId como @RequestParam)
DELETE /like (Requiere listId y userId como @RequestParam)
GET /liked (Requiere listId y userId como @RequestParam)