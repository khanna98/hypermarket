# HyperMarket - MERN Stack Ecommerce Website 

This is a MERN Stack ecommerce website using Redux for State Management. This is a combined POC of MongoDB, Node.js + Express and React + Redux Udemy course.

This site is under regular development/construction and is not advised to be used for production.

---

## Getting Started

Follow the following steps for setting up the Ecommerce Application:

### Server

1. First of all clone this repository:
`git clone https://github.com/khanna98/hypermarket`

2. Change the directory to the cloned directory:
`cd hypermarket`

3. In the current directory install the dependencies for server
`$ npm install`

4. After this change the directory to client and install dependencies:
`cd client && npm install`


After installing all the dependencies, make your own `config.env` file with the following items: 

```js
NODE_ENV="development" // or production
PORT="5000" // This is the port on which server will run.
MONGO_URI="mongodb://localhost:27017/ecommerce" // Your own mongodb url
PAYPAL_CLIENT_ID="" // Paypal Client Id for payment gateway
ACCESS_JWT_TOKEN_SECRET="" // JWT Access Secret Token
REFRESH_JWT_TOKEN_SECRET="" // JWT Refresh Secert Token
```

An example file with the same is also there for reference `config/config.env.example`

Once all of the above tasks are completed, you can run `$ npm run dev` to run the server and client together. 

I will be adding a few more features in the near future. Here is a list of all the features:

1. Stripe Payment
2. Social Login
3. Creating Admin from UI
4. Saving Card Info for the Customer

---

## About This App 

This React Application consists of 3 roles, i.e Admin, User and Guest. Lets talk about the role of each in detail.

### Admin

Following is the structure that is available for the Admin.

```
Admin
	├── My Account
	|	├── Cart
	|	├── Orders / History of Order
	|	├── Profile
	|	└── Logout
	├── Dashboard
	|	├── User Dashboard / Dashboard to Manage Users
	|	└── Products Dashboard / Dashboard to Manage Products
	└── Home / Market
```

### User
The following features will be available to the User

```
User
  ├── My Account
  |	  ├── Cart
  |	  ├── Orders / History of Order
  |	  ├── Profile
  |	  └── Logout
  └── Home / Market
```

### Guest

The Guest user can browse the products, but needs to login/ signup to place an order.

```
Guest
	├── Sign In
  	├── Sign Up
	└── Home / Market
```

---

Following the structure of the repository for better understanding:

```
  .
  ├── client
  ├── config
  ├── constant
  ├── controllers
  ├── middleware
  ├── models
  ├── routes
  ├── utils
  ├── .gitignore
  ├── LICENSE
  ├── package-lock.json
  ├── package.json
  ├── README.md
  └── server.js
```