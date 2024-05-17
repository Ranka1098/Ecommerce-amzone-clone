# React + Vite

# Amazone-clone online shopping (E-commerce webSite)

# structure

- Navbar

  - logo
  - location
  - search bar
  - dropdown button
  - language
  - sign-in/ sign-out
  - orders
  - cart

- navLinks
- hamburger menu
  -all
- links

- carousel

- product list

- sign-in button

- pagination

  - button back to top

- footer
- links

# task 1

- amazone favicon logo add in index.html

# task 2

- create component folder
- navabar component created
- navbar bottom component ceated

# task 3

- footer component created
- footer section completed sucessfully

# task 4

- add carosel slidebar component

# task 5

- Routing reactRouting-6.4

# task 6

- install packages @reduxjs/toolkit and react-redux
- create slice
- create appstore
- provide appstore to store

# task 7

- login page created
- cart item info page created
- shimmer ui create

# task 8 Bug remove sucessfully

- backToTop scrollup page feature sucessfully completed
- prevent background page scrolling sucessfully completed

# task 9

- shimmer ui completed

# task 10 remainig

- cart check out page
- search bar
- responsive
- validation

# cart

- addCart
- clearCart
- removeCart
- quantity total
- increament , decrement

# bug

- sticky navbar fixed

# bug

- login page and create account page with correct validation

# SignIn - SignOut - firebase


- create user
- note after validtion is correct then create user
  - createUserWithEmailAndPassword(auth, email, password)
- manage user
  - updateProfile before user credential
  - updateProfile(auth.currentUser,{displayName:, photoURL: ""})
  - what if putting same email exitst or not
- check email user exist or not
  - show error email is exist
- sign in existing user 
- show loader -> react spinner
  - npm install react-loader-spinner --save
- after user account created stop loading and show msg account created sucessfully and navigate login page
- userinfo stored into redux store
    - 
- registration page is ready

- signin or signout
  - signin Email and password
  - import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
