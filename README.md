# BOOK RECORD MANAGEMENT

This is a book record management API Backend

# Routes and Endpoints

## /users
GET: Get all users list
POST: Create new user

## /users/{id}
GET: Get a user by Id
PUT: Update a user by Id
DELETE: Delete a user by Id (check if he/she still has an isseud book) (is there any fine to be paid)

## /users/subscription-details/{id}
GET: Get all user subsciption details
1. Date od subscription
2. Valid till
3. Fine if any

## /books
GET: Get all books list
POST: Add new book

## /books/{id}
GET: Get a book by Id
PUT: Update a book by Id

## /books/issued
GET: Get all issued books

## /books/issued/withFine
GET: All issued books with fine

# Subscription Types
 Basic (3 months)
 Standard (6 months)
 Premium (12 months)

 date swill be in format MM/DD/YYYY

 If the subscription date is 01/10/2023 and subscription type is Standard , it'll be valid till 
 01/04/24.

 If he has an issued book and the issued book is to be returned at 01/01/23 and he misses it, then Rs. 100 fine will be added.

 If he has an issued book and it is to be returned at 01/01/23 and he misses the date of return , and his subscription also expires then he'll charged fine Rs. 200.