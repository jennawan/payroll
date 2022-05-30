# EzPayslip - a simple payroll management system


- [EzPayslip - a simple payroll management system](#ezPayslip---a-simple-payroll-management-system)
  - [Getting Started](#getting-started)
  - [Routes Documentation](#routes-documentation)
    - [User Registration](#user-registration)
    - [User Authentication/Login](#user-authenticationlogin)
- [What EzPayslip payroll system do](#what-ezpayslip-payroll-system-do)

## Getting Started
 It's super easy to get EzPayslip up and running.

 1. Clone the project

 ```shell
 git clone https://github.com/jennawan/payroll.git
 ```

 2. Install the dependencies

```shell
cd client
npm install
cd ../server
npm install
```

3. Copy `.env.example` to `.env` 

```shell
cp .env.example .env
```

4. Complete MONGO_URL= with your MongoDB connection string

```
mongodb+srv://user:<password>@cluster0.8t2uc.mongodb.net/?retryWrites=true&w=majority
```

5. Start server and client

```shell
npm start
cd ../client
npm start
```

## Routes Documentation

For the next part of this documentation, we assumed that EzPayslip is listening at http:localhost:5000

### User Registration 

You can make an `HTTP POST` call to create/register a new user to the following endpoint. 

```shell
http://localhost:5000/api/v1/auth/register
```

**API Payload & Response**

You can send a Form Multipart payload or a JSON payload like this.

```json
{
    "username":"EzPayslip User",
    "email":"user@ezpayslip.com",
    "password":"A Good Password"
}
```

If you receive a 201 Response, your user has been created and is now ready to log in!

If this user already exists, then you will receive a 500 Response. Please try again with different user information.

### User Authentication/Login

You will not need to make `HTTP POST` call anymore, simply visit http://localhost:3000/ and login using the information you registered with.

## What EzPayslip payroll system do

- [Provide secure access (login/logout)]
- [Capture employee details]
- [Generate pay slip details]
- [Preview a generated pay slip]
- [View pay slip history]
- [Save/print/download a generated pay slip]

Hope you enjoy!
