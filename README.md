Parts

Components
Containers
Router 
Store
Reducers
Actions


Project Structure

/app
	/components
		/button
			button.js
			button.scss

	/containers
		/App
			app.js
			app.scss
			reducers.js
			actions.js

		/Items
			home.js
			home.scss
			reducers.js
			actions.js

	index.js
	rootReducer.js
	router.js

Components = Reusable, stateless, generic, only have access to the supplied props
Container = Static, stateful, specific, can get and update state. Used for the applications routing