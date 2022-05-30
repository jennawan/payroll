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
http://localhost:5000/api/vi/auth/register
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
<img width="808" alt="login" src="https://user-images.githubusercontent.com/101085792/170919803-d7d56696-9e07-485e-a87e-8ac180a5377f.png">
- [Capture employee details]
<img width="1496" alt="new payslip" src="https://user-images.githubusercontent.com/101085792/170919820-d53f1a8f-0906-4631-8359-b114eaf722d9.png">
- [Generate pay slip details]
- [Preview a generated pay slip]
<img width="1496" alt="preview paysli" src="https://user-images.githubusercontent.com/101085792/170919899-94f78b6b-12d4-449a-9cc8-dd098b505a56.png">
- [View pay slip history]
<img width="1495" alt="payslip list" src="https://user-images.githubusercontent.com/101085792/170919912-c5644f5a-122c-4b16-8d3c-127056425464.png">
- [Save/print/download a generated pay slip]
<img width="1494" alt="print payslip" src="https://user-images.githubusercontent.com/101085792/170919927-784c2e5b-06c2-4b9e-a582-bf998d26cdb3.png">

Hope you enjoy!
