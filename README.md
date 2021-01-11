# Residence App

### Data Model (Residence)

- Postal Code
- House Number
- Latitude
- Longitude
- Number of Residents

### Heat Map

- A heat map based on the residences with the most number of residents

---

## How to execute the Project

- First you need to clone this repository with the command **`git clone`**

### **Install all the dependecies**

- Inside the parent folder execute the command **`npm run setup:install`**

### **Executing the Server & Client**

- Inside the parent folder execute the command **`npm run setup:start`**

---

## Project Architecture

- Separated each REST operation as a module for the Residences CRUD
- Used **`redux`** to manage state containers all over the application
- Used **`redux-form`** to make it easier to handle form values and validations
- Used **`redux-thunk`**, a middleware to create asynchronous actions with **`redux`**
- Used **`react-router`** for navigation inside the application
- Used **`react-router`** for navigation, all components are isolated (fetch their own data)
- Used [history.js] for programmatic navigation inside the application
- Used **`lodash`** to make it easier to handle Object based Reducers
- Used **`jQuery`** for input masks on form
- Used **`axios`** for HTTP requests
- Used Portal from **`react-dom`** to create the Modal component
- Used **`react-leaflet`** for Map in HeatMap component
- Used **`react-leaflet-heatmap-layer`** for heat overlay in HeatMap component
- Used **`concurrently`** installing dependencies and starting the project more easier with only one line of code

---

## Self Evaluation

### Strong Points

- easy UI
- postal code api strong and worldwide
- redux
- reusable components
- CRUD for Residences (Create, Read, Update and Delete) 

### Points to Improve

- style
- pagination on list
- make the create form more easier( adding a city select imput after postal code is written and after selecting one city with zipcode longitude and latitude are automatically prefilled and with a slider to control the values ) OR ( after filling the postal code a map appear under focused on the postal code areas and with one click prefill most of fields )

### I could make it far more better but i worked less than 24 hours (and yes i know to work with hooks too :D but i wanted to use Classes for this one don't ask me why( i wanted to verify if i still got it :D! ))

### PS: after "npm run setup:install" if you get errors don't panic it works, the dependecies get installed!