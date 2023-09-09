# Project-Assignment



## User LogIn and Registration

## Phase I

### Models
- User Model
```
{ name: { mandatory}, phone: {mandatory}, email: {mandatory, valid email, unique}, password: {mandatory},token: {default: ""} }
```
##APIS

### POST /register
- Create an user - 
- Create a author document from request body.
  `Endpoint: BASE_URL/register`


### POST /login
-  An user login with their email and password. On a successful login attempt a JWT token in response body has been returned.
- If the credentials are incorrect in that case a suitable error message with a valid HTTP status code has been returned.

-  HTTP status 400 for an invalid request with a response body has been returned.



### PUT /user/:userId
-  An user by changing the its name, email, phone no and password has been updated

- An HTTP status 200 if updated successfully with a body has been returned.
- Also in the response the updated document has been returned. 

### DELETE /user/:userId
- Checked if the userId exists. If it does, delete that user document and return an suitable message with HTTP status code.
- If the user document doesn't exist in that case an HTTP status of 404 with a suitable message in respone has been returned.




### Authentication
- Added an authorisation implementation for the JWT token that validates the token before every protected endpoint is called. If the validation fails, a suitable error message with a corresponding HTTP status code has been returned.
- Protected routes are update an user, delete an user.
- Set the token, once validated, in the request - `x-api-key`
- A middleware is used for authentication purpose.

### Authorisation
- Only the login user is able to edit or delete that user's document only.
- In case of unauthorized access an appropirate error message has been returned.

### ForgetPassword
- Have taken email address through params. 
- For SMTP email functionality here ethereal SMTP environment is used.
- An email has been sent to the registered email Id.
- Used nodemailer and randomsting.

### ResetPassword
- Have taken new password through body.
- Token has been passed through query params.

## Testing (Self-evaluation During Development)
- To test these apis have created a new collection in Postman 
- Each api should have a new request in this collection
- Each request in the collection should be rightly named.



Refer below sample



## Response


### Successful Response structure
```yaml
{
  status: true,
  data: {

  }
}
```
### Error Response structure
```yaml
{
  status: false,
  message: ""
}
```





## Collections

### user register
```yaml
{
    "status": true,
    "message": {
        "name": "Atul",
        "email": "Atul@gmail.com",
        "phone": "1234560852",
        "password": "Atul@1000",
        "isDeleted": false,
        "token": "",
        "_id": "64fc1c6ff989612ff59cf173",
        "__v": 0
    }
}
```

### user logIn
```yaml
{
    "status": true,
    "message": "login successfully",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGZjMWM2ZmY5ODk2MTJmZjU5Y2YxNzMiLCJpYXQiOjE2OTQyNDQwNTh9.nb1CevCaaPHgQfJr80vDFSG33FilpJpfT4HjToDY9R0"
    }
}
```
### update user
```yaml
{
    "status": true,
    "message": "updated successfully",
    "data": {
        "_id": "64fc1c6ff989612ff59cf173",
        "name": "Atul",
        "email": "Atul@gmail.com",
        "phone": "9999999990",
        "password": "Atul@2000",
        "isDeleted": false,
        "token": "",
        "__v": 0
    }
}

```
### forget password
```yaml
{
    "satus": true,
    "msg": "An email has been sent"
}

```
### reset password
```yaml
{
    "status": true,
    "message": "password reset successfully",
    "data": {
        "_id": "64fc1c6ff989612ff59cf173",
        "name": "Atul",
        "email": "Atul@gmail.com",
        "phone": "9999999990",
        "password": "harry@2000",
        "isDeleted": false,
        "token": "6bgXrkLGDte2vvTVDjCF3MTJ9tMHO3Tq",
        "__v": 0
    }
}
```


### delete user
```yaml
{
    "status": true,
    "message": "deleted successfully"
}
```

