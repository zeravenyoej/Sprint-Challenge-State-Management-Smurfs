1. What problem does the context API help solve?

When we have global state, Context API can makes it easier to share props. We no longer have to pass it through every level of the tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that have a mandatory “type” (which tells the reducer what to do with the state) and an optional payload (which gives the action data to work with inside the reducer). The reducer is one large function with several “cases” that takes in the current state, the action object in question, and then returns a new state. The store is the entire state object/tree.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is one large piece of state that can be accessed throughout the entire application, whereas component state is only accessible to the component in question, and any of its children. When you have state that needs to be accessed by components that aren’t conveniently located near each other in the state tree, holding in at the application level allows for easier access and avoids excessive prop drilling.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It’s a middleware that allows use to use thunks, which are functions that are returned by other functions. It allows us to make an API call in redux, which would otherwise be way too tricky, due to their asychchronous nature and Redux’s inherent synchronousness. The API calls, (in this case, the thunks), are done within action-creator functions.


5. What is your favorite state management system you've learned and this sprint? Please explain why!

Probably redux. Context is simpler, but returning new pieces of application state after every UI interaction makes sense to me, and just allows for a good deal of control that I’m comfortable with. 
